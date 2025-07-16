"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, BookOpen, Users, Award, ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, 0],
            transition: {
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    const stats = [
        { icon: BookOpen, value: "10K+", label: "Courses" },
        { icon: Users, value: "50K+", label: "Students" },
        { icon: Award, value: "95%", label: "Success Rate" },
    ]

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
            </div>

            {/* Floating Elements */}
            <motion.div variants={floatingVariants} animate="animate" className="absolute top-20 right-20 hidden lg:block">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Sparkles className="w-8 h-8 text-white" />
                </div>
            </motion.div>

            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute bottom-32 left-20 hidden lg:block"
                style={{ animationDelay: "2s" }}
            >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-2xl">
                    <BookOpen className="w-6 h-6 text-white" />
                </div>
            </motion.div>

            <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm font-medium">
                            🚀 New AI-Powered Learning Experience
                        </Badge>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Master Skills That
                        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            Shape Tomorrow
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Join thousands of learners advancing their careers with our cutting-edge courses, expert mentorship, and
                        hands-on projects designed for the future of work.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
                        >
                            Start Learning Today
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg font-semibold rounded-xl group bg-transparent"
                        >
                            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                            Watch Demo
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-center justify-center mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-slate-400 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
        </section>
    )
}
