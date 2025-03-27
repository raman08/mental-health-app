"use client";
import React, { useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';

const socket: Socket = io('https://mentalink-flask-app.onrender.com/', {
  transports: ['polling', 'websocket'],
});

const AVStreamer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const startMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        const audioContext = new AudioContext();
        const audioInput = audioContext.createMediaStreamSource(stream);
        const destination = audioContext.createMediaStreamDestination();
        audioInput.connect(destination);

        mediaRecorderRef.current = new MediaRecorder(destination.stream);

        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          audioChunksRef.current = [];

          const reader = new FileReader();
          reader.onloadend = () => {
            const base64Audio = (reader.result as string).split(',')[1];
            captureFrameAndEmit(base64Audio); // Emit video frame + audio
          };
          reader.readAsDataURL(audioBlob);
        };

        mediaRecorderRef.current.start();

        setInterval(() => {
          if (mediaRecorderRef.current?.state !== 'inactive') {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.start();
          }
        }, 300); // Capture every 300ms (adjustable)
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    startMedia();

    socket.on('av_stream', (data: { image: string; audio: string }) => {
      if (imgRef.current && audioRef.current) {
        imgRef.current.src = `data:image/jpeg;base64,${data.image}`;
        audioRef.current.src = `data:audio/wav;base64,${data.audio}`;
        audioRef.current.play().catch(err => console.error('Audio play error:', err));
      }
    });

    return () => {
      socket.off('av_stream');
      mediaRecorderRef.current?.stop();
    };
  }, []);

  const captureFrameAndEmit = (base64Audio: string) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/jpeg');
    const base64Image = imageData.split(',')[1];

    socket.emit('av_stream', {
      image: base64Image,
      audio: base64Audio,
    });
  };

  return (
    <div>
      <h2>Live AV Stream</h2>
      <video ref={videoRef} autoPlay playsInline width={640} height={480} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <img ref={imgRef} alt="Incoming video" width={640} height={480} />
      <audio ref={audioRef} controls />
    </div>
  );
};

export default AVStreamer;
