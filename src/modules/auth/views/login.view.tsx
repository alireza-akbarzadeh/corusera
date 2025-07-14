'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, ArrowLeftIcon } from 'lucide-react';

export function LoginView() {
    return (
        <div className="rose-gradient relative min-h-screen overflow-hidden bg-background">
            <div className="absolute -top-10 left-0 h-1/2 w-full rounded-b-full bg-gradient-to-b from-background to-transparent blur"></div>
            <div className="absolute -top-64 left-0 h-1/2 w-full rounded-full bg-gradient-to-b from-primary/80 to-transparent blur-3xl"></div>
            <div className="relative z-9 grid min-h-screen grid-cols-1 md:grid-cols-2">
                <motion.div
                    className="hidden flex-1 items-center justify-center space-y-8 p-8 text-center md:flex"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        >
                            {/* TODO: Change this with the actual logo of the webstie */}
                            <img
                                src="/svg/github.svg"
                                alt="Illustration"
                                className="md:w-90 mx-auto h-auto w-full"
                            />
                        </motion.div>
                        <motion.h1
                            className="text-2xl md:text-4xl font-bold leading-tight tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        >
                            Unlock Your Learning Adventure
                        </motion.h1>

                        <motion.p

                            className="text-lg font-bold leading-tight tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} >
                            Log in or create an account to access courses, track your progress, and join a vibrant community of learners. Your journey to mastery starts here!
                        </motion.p>
                    </div>
                </motion.div>

                {/* Right Side - Login Form */}
                <motion.div
                    className="flex flex-1 items-center justify-center p-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    >
                        <Card className="w-full max-w-md border-border/70 bg-card/20 shadow-[0_10px_26px_#e0e0e0a1] backdrop-blur-lg dark:shadow-none">
                            <CardContent className="space-y-6 p-8">
                                {/* Logo and Header */}
                                <motion.div
                                    className="space-y-4 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                                >
                                    <div className="flex items-center justify-center space-x-4">

                                        <h3 className='text-lg font-bold'>Welcome to Coursera
                                        </h3>
                                    </div>

                                </motion.div>

                                {/* Email Input */}
                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                                >
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" />
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                                >
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        className="border border-border"
                                    />
                                </motion.div>

                                {/* Continue Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button className="w-full">Start Learning</Button>
                                </motion.div>

                                {/* Divider */}
                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
                                >
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-border"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-card px-2 text-muted-foreground">
                                            or continue with
                                        </span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        variant="secondary"
                                        className="w-full bg-primary-foreground text-primary shadow-[0_4px_16px_var(--border)] duration-300 hover:bg-primary-foreground/95 dark:shadow-[0_4px_14px_var(--muted-foreground)]"
                                    >
                                        <Image src='/svg/google.svg' alt='google icon' width={19} height={19} />
                                        <span className="ml-2">Sign in with Google</span>
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className="w-full bg-primary-foreground text-primary mt-4 shadow-[0_4px_16px_var(--border)] duration-300 hover:bg-primary-foreground/95 dark:shadow-[0_4px_14px_var(--muted-foreground)]"
                                    >
                                        <Image src='/svg/github.svg' alt='google icon' width={20} height={20} />
                                        <span className="ml-2">Sign in with Github</span>
                                    </Button>
                                </motion.div>

                                {/* Terms */}
                                <motion.p
                                    className="mt-2 text-center text-xs text-muted-foreground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.0, ease: 'easeOut' }}
                                >
                                    By signing in, you agree to our{' '}
                                    <Link
                                        href="#"
                                        className="text-muted-foreground underline hover:text-primary"
                                    >
                                        Learning Community Guidelines
                                    </Link>{' '}
                                    and{' '}
                                    <Link
                                        href="#"
                                        className="text-muted-foreground underline hover:text-primary"
                                    >
                                        Privacy Policy
                                    </Link>.
                                </motion.p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div >
        </div >
    );
}