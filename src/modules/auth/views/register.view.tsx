"use client"

import type React from "react"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthLayoutView from "./Auth.view"



export function RegisterView() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <AuthLayoutView>
            {/* Main Content */}
            <div className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-2">
                {/* Left Side - Illustration */}
                <motion.div
                    className="hidden flex-1 items-center justify-center space-y-8 p-8 text-center md:flex"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Glowing effect behind the logo */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20 scale-150" />
                            <img
                                src="/placeholder.svg?height=300&width=300"
                                alt="Learning Illustration"
                                className="relative z-10 mx-auto h-auto w-full md:w-80 drop-shadow-2xl"
                            />
                        </motion.div>
                        <motion.h1
                            className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        >
                            Begin Your Learning Journey
                        </motion.h1>
                        <motion.p
                            className="text-lg font-medium leading-relaxed tracking-tight text-white/80 max-w-md mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        >
                            Create your account to access thousands of courses, connect with learners worldwide, and unlock your
                            potential. Join our community of knowledge seekers today!
                        </motion.p>
                    </div>
                </motion.div>

                {/* Right Side - Register Form */}
                <motion.div
                    className="flex flex-1 items-center justify-center p-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="w-full max-w-md"
                    >
                        <Card className="border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
                            <CardContent className="space-y-6 p-8">
                                {/* Logo and Header */}
                                <motion.div
                                    className="space-y-4 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                >
                                    <div className="flex items-center justify-center space-x-4">
                                        <h3 className="text-xl font-bold text-white">Join Coursera</h3>
                                    </div>
                                </motion.div>

                                {/* Full Name Input */}
                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                                >
                                    <Label htmlFor="fullName" className="text-white/90">
                                        Full Name
                                    </Label>
                                    <Input
                                        id="fullName"
                                        type="text"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                                        placeholder="Enter your full name"
                                    />
                                </motion.div>

                                {/* Email Input */}
                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                                >
                                    <Label htmlFor="email" className="text-white/90">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                                        placeholder="Enter your email"
                                    />
                                </motion.div>

                                {/* Password Input */}
                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                                >
                                    <Label htmlFor="password" className="text-white/90">
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 pr-12"
                                            placeholder="Create a strong password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors duration-200"
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Confirm Password Input */}
                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                                >
                                    <Label htmlFor="confirmPassword" className="text-white/90">
                                        Confirm Password
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 pr-12"
                                            placeholder="Confirm your password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors duration-200"
                                        >
                                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Create Account Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                                        Create Account
                                    </Button>
                                </motion.div>

                                {/* Divider */}
                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                                >
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/20"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-transparent px-2 text-white/70">or sign up with</span>
                                    </div>
                                </motion.div>

                                {/* Social Registration Buttons */}
                                <motion.div
                                    className="space-y-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                                >
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            variant="secondary"
                                            className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <Image src="/svg/google.svg" alt="google icon" width={19} height={19} />
                                            <span className="ml-2">Sign up with Google</span>
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            variant="secondary"
                                            className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <Image src="/svg/github.svg" alt="github icon" width={20} height={20} />
                                            <span className="ml-2">Sign up with Github</span>
                                        </Button>
                                    </motion.div>
                                </motion.div>

                                {/* Already have account link */}
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                                >
                                    <p className="text-sm text-white/70">
                                        Already have an account?{" "}
                                        <Link
                                            href="/login"
                                            className="text-white font-medium underline hover:text-purple-300 transition-colors duration-300"
                                        >
                                            Sign in
                                        </Link>
                                    </p>
                                </motion.div>

                                {/* Terms */}
                                <motion.p
                                    className="mt-4 text-center text-xs text-white/60"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
                                >
                                    By creating an account, you agree to our{" "}
                                    <Link
                                        href="#"
                                        className="text-white/80 underline hover:text-purple-300 transition-colors duration-300"
                                    >
                                        Terms of Service
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
