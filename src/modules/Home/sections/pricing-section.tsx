'use client';

import { buttonVariants } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import NumberFlow from '@number-flow/react';
import { Spotlight } from '../ui/spotlight';

// Define your plans
const plans = [
    {
        name: 'STARTER',
        price: '50',
        yearlyPrice: '40',
        period: 'per month',
        features: [
            'Up to 10 projects',
            'Basic analytics',
            '48-hour support response time',
            'Limited API access',
            'Community support',
        ],
        description: 'Perfect for individuals and small projects',
        buttonText: 'Start Free Trial',
        href: '/sign-up',
        isPopular: false,
    },
    {
        name: 'PROFESSIONAL',
        price: '99',
        yearlyPrice: '79',
        period: 'per month',
        features: [
            'Unlimited projects',
            'Advanced analytics',
            '24-hour support response time',
            'Full API access',
            'Priority support',
            'Team collaboration',
            'Custom integrations',
        ],
        description: 'Ideal for growing teams and businesses',
        buttonText: 'Get Started',
        href: '/sign-up',
        isPopular: true,
    },
    {
        name: 'ENTERPRISE',
        price: '299',
        yearlyPrice: '239',
        period: 'per month',
        features: [
            'Everything in Professional',
            'Custom solutions',
            'Dedicated account manager',
            '1-hour support response time',
            'SSO Authentication',
            'Advanced security',
            'Custom contracts',
            'SLA agreement',
        ],
        description: 'For large organizations with specific needs',
        buttonText: 'Contact Sales',
        href: '/contact',
        isPopular: false,
    },
];

interface PricingPlan {
    name: string;
    price: string;
    yearlyPrice: string;
    period: string;
    features: string[];
    description: string;
    buttonText: string;
    href: string;
    isPopular: boolean;
}

interface PricingProps {
    plans: PricingPlan[];
    title?: string;
    description?: string;
}

export function PricingSection() {
    const [isMonthly, setIsMonthly] = useState(true);
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const switchRef = useRef<HTMLButtonElement>(null);

    const handleToggle = (checked: boolean) => {
        setIsMonthly(!checked);
        if (checked && switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            confetti({
                particleCount: 50,
                spread: 60,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
                colors: [
                    'hsl(var(--primary))',
                    'hsl(var(--accent))',
                    'hsl(var(--secondary))',
                    'hsl(var(--muted))',
                ],
                ticks: 200,
                gravity: 1.2,
                decay: 0.94,
                startVelocity: 30,
                shapes: ['circle'],
            });
        }
    };

    return (
        <section id='pricing' className="container mx-auto py-20 relative">
            <Spotlight
                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
            />
            <div className="mb-12 space-y-4 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Simple, transparent pricing for all.
                </h2>
                <p className="whitespace-pre-line text-lg text-gray-300">
                    Choose the plan that works for you\nAll plans include access to our
                    platform, lead generation tools, and dedicated support.
                </p>
            </div>

            <div className="mb-10 flex justify-center">
                <label className="relative inline-flex cursor-pointer items-center">
                    <Label>
                        <Switch
                            ref={switchRef as any}
                            checked={!isMonthly}
                            onCheckedChange={handleToggle}
                            className="relative"
                        />
                    </Label>
                </label>
                <span className="ml-2 font-semibold">
                    Annual billing <span className="text-primary">(Save 20%)</span>
                </span>
            </div>

            <div className="sm:2 grid grid-cols-1 gap-4 md:grid-cols-3">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 1 }}
                        whileInView={
                            isDesktop
                                ? {
                                    y: plan.isPopular ? -20 : 0,
                                    opacity: 1,
                                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                                }
                                : {}
                        }
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.6,
                            type: 'spring',
                            stiffness: 100,
                            damping: 30,
                            delay: 0.4,
                            opacity: { duration: 0.5 },
                        }}
                        className={cn(
                            `relative rounded-2xl border border-white/10 bg-[rgba(30,30,40,0.7)] p-6 text-center lg:flex lg:flex-col lg:justify-center`,
                            plan.isPopular ? 'border-2 border-blue-500' : 'border-white/10',
                            'flex flex-col',
                            !plan.isPopular && 'mt-5',
                            index === 0 || index === 2
                                ? '-translate.ts-z-[50px] rotate-y-[10deg] z-0 translate.ts-x-0 translate.ts-y-0 transform'
                                : 'z-10',
                            index === 0 && 'origin-right',
                            index === 2 && 'origin-left',
                        )}
                    >
                        {plan.isPopular && (
                            <div className="absolute right-0 top-0 flex items-center rounded-bl-xl rounded-tr-xl bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-0.5">
                                <Star className="h-4 w-4 fill-current text-white" />
                                <span className="ml-1 font-sans font-semibold text-white">
                                    Popular
                                </span>
                            </div>
                        )}
                        <div className="flex flex-1 flex-col">
                            <p className="text-base font-semibold text-blue-200">
                                {plan.name}
                            </p>
                            <div className="mt-6 flex items-center justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-white">
                                    <NumberFlow
                                        value={
                                            isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                                        }
                                        format={{
                                            style: 'currency',
                                            currency: 'USD',
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        }}
                                        transformTiming={{
                                            duration: 500,
                                            easing: 'ease-out',
                                        }}
                                        willChange
                                        className="font-variant-numeric: tabular-nums"
                                    />
                                </span>
                                {plan.period !== 'Next 3 months' && (
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-blue-200">
                                        / {plan.period}
                                    </span>
                                )}
                            </div>

                            <p className="text-xs leading-5 text-gray-400">
                                {isMonthly ? 'billed monthly' : 'billed annually'}
                            </p>

                            <ul className="mt-5 flex flex-col gap-2">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" />
                                        <span className="text-left text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <hr className="my-4 w-full border-white/10" />

                            <Link
                                href={plan.href}
                                className={cn(
                                    buttonVariants({
                                        variant: 'outline',
                                    }),
                                    'group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter',
                                    'transform-gpu ring-offset-current transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:ring-2 hover:ring-blue-500 hover:ring-offset-1',
                                    plan.isPopular
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                        : 'bg-[rgba(30,30,40,0.7)] text-white',
                                )}
                            >
                                {plan.buttonText}
                            </Link>
                            <p className="mt-6 text-xs leading-5 text-gray-400">
                                {plan.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
