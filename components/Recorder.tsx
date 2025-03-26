import { useEffect, useRef, useState } from "react";

function Recorder() {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const mediaRecorder = useRef<MediaRecorder | null>(null);
	const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
	const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
	const [isRecording, setIsRecording] = useState<boolean>(false);
	const [videoURL, setVideoURL] = useState<string>("");
	const [isVideoEnabled, setIsVideoEnabled] = useState<boolean>(true);
	const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);

	useEffect(() => {
		const getMedia = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
					audio: true,
				});
				setMediaStream(stream);
				if (videoRef.current) {
					videoRef.current.srcObject = stream;
				}
			} catch (error) {
				console.error("Error accessing media devices.", error);
			}
		};

		getMedia();

		return () => {
			mediaStream?.getTracks().forEach(track => track.stop());
		};
	}, []);

	const startRecording = () => {
		if (mediaStream) {
			mediaRecorder.current = new MediaRecorder(mediaStream);
			mediaRecorder.current.ondataavailable = event => {
				if (event.data.size > 0) {
					console.log({ recordedChunks });
					setRecordedChunks(prev => [...prev, event.data]);
				}
			};
			mediaRecorder.current.onstop = () => {
				if (recordedChunks.length === 0) {
					console.error("No data was recorded.");
					return;
				}
				const blob = new Blob(recordedChunks, { type: "video/webm" });
				const url = URL.createObjectURL(blob);
				setVideoURL(url);
				setRecordedChunks([]);
			};
			mediaRecorder.current.start();
			setIsRecording(true);
		}
	};

	const stopRecording = () => {
		mediaRecorder.current?.stop();
		setIsRecording(false);
	};

	const toggleVideo = () => {
		if (mediaStream) {
			mediaStream.getVideoTracks().forEach(track => {
				track.enabled = !track.enabled;
				setIsVideoEnabled(track.enabled);
			});
		}
	};

	const toggleAudio = () => {
		if (mediaStream) {
			mediaStream.getAudioTracks().forEach(track => {
				track.enabled = !track.enabled;
				setIsAudioEnabled(track.enabled);
			});
		}
	};

	return (
		<div>
			<video ref={videoRef} autoPlay playsInline muted />
			<div>
				{!isRecording ? (
					<button onClick={startRecording}>Start Recording</button>
				) : (
					<button onClick={stopRecording}>Stop Recording</button>
				)}
				<button onClick={toggleVideo}>
					{isVideoEnabled ? "Pause Camera" : "Resume Camera"}
				</button>
				<button onClick={toggleAudio}>
					{isAudioEnabled ? "Pause Microphone" : "Resume Microphone"}
				</button>
			</div>
			{videoURL && (
				<div>
					<h3>Recording:</h3>
					<video src={videoURL} controls />
					<a href={videoURL} download="recording.webm">
						Download Recording
					</a>
				</div>
			)}
		</div>
	);
}

export default Recorder;
