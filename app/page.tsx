'use client';
import Link from "next/link";
import Image from "next/image";
import { Brain, Heart, MessageCircle, Shield, Star, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card";

export default function Home() {
	return (
		<div className="">
			<main className="flex-1">
				<section className="py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Your journey to better mental health
										starts here
									</h1>
									<p className="max-w-[600px] text-muted-foreground md:text-xl">
										MindfulMe helps you track your mood,
										practice mindfulness, and connect with
										therapists—all in one place.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Button className="bg-teal-500 hover:bg-teal-600">
										Download App
									</Button>
									<Button variant="outline">
										Learn More
									</Button>
								</div>
							</div>
							<Image
								src="/placeholder.svg?height=550&width=550"
								width={550}
								height={550}
								alt="App screenshot"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
							/>
						</div>
					</div>
				</section>

				<section
					id="features"
					className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
									Features
								</div>
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
									Everything you need for mental wellness
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our app combines powerful tools to help you
									understand your emotions, build healthy
									habits, and get support when you need it.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
							<Card>
								<CardHeader className="flex flex-row items-center gap-4">
									<Brain className="h-8 w-8 text-teal-500" />
									<div className="grid gap-1">
										<CardTitle>Mood Tracking</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Log your daily moods and emotions to
										identify patterns and triggers over
										time.
									</CardDescription>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center gap-4">
									<MessageCircle className="h-8 w-8 text-teal-500" />
									<div className="grid gap-1">
										<CardTitle>Therapy Connect</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Connect with licensed therapists for
										virtual sessions when you need
										professional guidance.
									</CardDescription>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center gap-4">
									<Users className="h-8 w-8 text-teal-500" />
									<div className="grid gap-1">
										<CardTitle>Community Support</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Join moderated support groups with
										people who understand what you're going
										through.
									</CardDescription>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center gap-4">
									<Shield className="h-8 w-8 text-teal-500" />
									<div className="grid gap-1">
										<CardTitle>Privacy First</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Your data is encrypted and secure. We
										never share your personal information
										without consent.
									</CardDescription>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center gap-4">
									<Heart className="h-8 w-8 text-teal-500" />
									<div className="grid gap-1">
										<CardTitle>Guided Meditation</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Access a library of guided meditations
										and breathing exercises for stress
										relief.
									</CardDescription>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center gap-4">
									<Star className="h-8 w-8 text-teal-500" />
									<div className="grid gap-1">
										<CardTitle>Goal Setting</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Set and track personal wellness goals
										with gentle reminders and progress
										tracking.
									</CardDescription>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section
					id="testimonials"
					className="w-full py-12 md:py-24 lg:py-32"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
									Hear from our users
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									MindfulMe has helped thousands of people
									improve their mental wellbeing.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
							<Card>
								<CardHeader>
									<div className="flex items-center gap-4">
										<div>
											<CardTitle className="text-base">
												Jamie D.
											</CardTitle>
											<CardDescription>
												Using for 6 months
											</CardDescription>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										"The mood tracking feature helped me
										identify that my anxiety peaks on Sunday
										evenings. Now I can prepare and use the
										app's tools when I need them most."
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<div className="flex items-center gap-4">
										<div>
											<CardTitle className="text-base">
												Michael R.
											</CardTitle>
											<CardDescription>
												Using for 1 year
											</CardDescription>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										"Being able to connect with a therapist
										through the app changed everything for
										me. The convenience meant I finally got
										the help I needed."
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<div className="flex items-center gap-4">
										<div>
											<CardTitle className="text-base">
												Sarah L.
											</CardTitle>
											<CardDescription>
												Using for 3 months
											</CardDescription>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										"The community groups helped me realize
										I wasn't alone. Having a safe space to
										share my experiences has been incredibly
										healing."
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50 dark:bg-teal-950/30">
					<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Ready to start your mental wellness journey?
							</h2>
							<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Download the app today and take the first step
								toward a healthier mind.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
							<Button className="bg-teal-500 hover:bg-teal-600 h-12 px-8">
								Download for iOS
							</Button>
							<Button variant="outline" className="h-12 px-8">
								Download for Android
							</Button>
						</div>
					</div>
				</section>
			</main>
			<footer className="w-full border-t py-6 md:py-0">
				<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
					<div className="flex items-center gap-2">
						<Heart className="h-5 w-5 text-teal-500" />
						<p className="text-sm text-muted-foreground">
							© 2023 MindfulMe. All rights reserved.
						</p>
					</div>
					<nav className="flex gap-4 sm:gap-6">
						<Link
							href="#"
							className="text-xs hover:underline underline-offset-4"
						>
							Terms
						</Link>
						<Link
							href="#"
							className="text-xs hover:underline underline-offset-4"
						>
							Privacy
						</Link>
						<Link
							href="#"
							className="text-xs hover:underline underline-offset-4"
						>
							Contact
						</Link>
					</nav>
				</div>
			</footer>
		</div>
	);
}

// // Avatar component since we're using it in the testimonials section
// function Avatar({ className, children }) {
// 	return (
// 		<div
// 			className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
// 		>
// 			{children}
// 		</div>
// 	);
// }

// function AvatarFallback({ children }) {
// 	return (
// 		<div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium">
// 			{children}
// 		</div>
// 	);
// }
