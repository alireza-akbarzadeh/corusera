'use client'

import { AboutSection, PricingSection, TestimonialsSection } from "../sections";
import { motion } from "motion/react"

export function HomeView() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black relative overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0">
                {/* Large floating orbs */}
                <motion.div
                    className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute top-1/3 right-20 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                <motion.div
                    className="absolute bottom-32 left-1/4 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-600/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                {/* Smaller accent orbs */}
                <motion.div
                    className="absolute top-1/4 left-3/4 w-40 h-40 bg-pink-600/12 rounded-full blur-2xl"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 25, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />

                <motion.div
                    className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-violet-600/10 rounded-full blur-2xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -35, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1.5,
                    }}
                />
            </div>

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Radial gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40" />
            <div className="relative z-10">
                <PricingSection />
                <AboutSection />
                <TestimonialsSection />
            </div>
        </div>

    )
}