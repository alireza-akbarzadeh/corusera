"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {motion} from "motion/react"

import Link from "next/link"
import AuthLayoutView from "./Auth.view"
import {SocialButtons} from "../ui/social-buttons"
import {useState, useTransition} from "react";
import {authClient} from "@/lib/auth-client";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {Route} from "@/lib/route";
import {useMessages} from "@/lib/intl/useMessages";

export function LoginView() {
    const router = useRouter();
    const [email, setEmail] = useState("")
    const [isPending, startTransition] = useTransition()

    const signInWithEmail = () => {
        const {t} = useMessages()
        startTransition(async () => {
            await authClient.emailOtp.sendVerificationOtp({
                email: email,
                type: "sign-in",
                fetchOptions: {
                    onSuccess: () => {
                        toast.error(t('auth.fail_to_send_email'));
                        router.push(Route.VERIFY_EMAIL)
                    },
                    onError: () => {
                        toast.error(t('auth.fail_to_send_email'));
                    },
                }
            })
        })
    }


    return (
        <AuthLayoutView>
            {/* Main Content */}
            <div className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-2">
                {/* Left Side - Illustration */}
                <motion.div
                    className="hidden flex-1 items-center  justify-center space-y-8 p-8 text-center md:flex"
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <div className="space-y-6">
                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.8, delay: 0.2, ease: "easeOut"}}
                            className="relative"
                        >
                            {/* Glowing effect behind the logo */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20 scale-150"/>
                            <img
                                src="/placeholder.svg?height=300&width=300"
                                alt="Learning Illustration"
                                className="relative z-10 mx-auto h-auto w-full md:w-80 drop-shadow-2xl"
                            />
                        </motion.div>
                        <motion.h1
                            className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-white"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.4, ease: "easeOut"}}
                        >
                            Unlock Your Learning Adventure
                        </motion.h1>
                        <motion.p
                            className="text-lg font-medium leading-relaxed tracking-tight text-white/80 max-w-md mx-auto"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.6, ease: "easeOut"}}
                        >
                            Log in or create an account to access courses, track your progress, and join a vibrant
                            community of
                            learners. Your journey to mastery starts here!
                        </motion.p>
                    </div>
                </motion.div>

                {/* Right Side - Login Form */}
                <motion.div
                    className="flex flex-1 items-center justify-center p-8"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <motion.div
                        initial={{opacity: 0, y: 30, scale: 0.95}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        transition={{duration: 0.6, delay: 0.2, ease: "easeOut"}}
                        className="w-full max-w-md"
                    >
                        <Card className="border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
                            <CardContent className="space-y-6 p-8">
                                {/* Logo and Header */}
                                <motion.div
                                    className="space-y-4 text-center"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.4, ease: "easeOut"}}
                                >
                                    <div className="flex items-center justify-center space-x-4">
                                        <h3 className="text-xl font-bold text-white">Welcome to Coursera</h3>
                                    </div>
                                </motion.div>

                                {/* Email Input */}
                                <motion.div
                                    className="space-y-2"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.5, ease: "easeOut"}}
                                >
                                    <Label htmlFor="email" className="text-white/90">
                                        Email
                                    </Label>
                                    <Input
                                        onChange={(event) => setEmail(event.target.value)}
                                        value={email}
                                        id="email"
                                        type="email"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                                        placeholder="A@example.com"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.6, ease: "easeOut"}}
                                >
                                    <Label htmlFor="password" className="text-white/90">
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                                        placeholder="Enter your password"
                                    />
                                </motion.div>

                                {/* Continue Button */}
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.7, ease: "easeOut"}}
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                >
                                    <Button
                                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                                        Start Learning
                                    </Button>
                                </motion.div>

                                {/* Divider */}
                                <motion.div
                                    className="relative"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5, delay: 0.8, ease: "easeOut"}}
                                >
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/20"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-transparent px-2 text-white/70">or continue with</span>
                                    </div>
                                </motion.div>

                                {/* Social Login Buttons */}
                                <SocialButtons/>
                                {/* Terms */}
                                {/* Already have account link */}
                                <motion.div
                                    className="text-center"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5, delay: 1.2, ease: "easeOut"}}
                                >
                                    <p className="text-sm text-white/70">
                                        Don't have an account?{" "}
                                        <Link
                                            href="/register"
                                            className="text-white font-medium underline hover:text-purple-300 transition-colors duration-300"
                                        >
                                            Sign up
                                        </Link>
                                    </p>
                                </motion.div>


                                <motion.p
                                    className="mt-4 text-center text-xs text-white/60"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5, delay: 1.0, ease: "easeOut"}}
                                >
                                    By signing in, you agree to our{" "}
                                    <Link
                                        href="#"
                                        className="text-white/80 underline hover:text-purple-300 transition-colors duration-300"
                                    >
                                        Learning Community Guidelines
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="#"
                                        className="text-white/80 underline hover:text-purple-300 transition-colors duration-300"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </motion.p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </AuthLayoutView>
    )
}
