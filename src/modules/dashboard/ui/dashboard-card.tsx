'use client';

import { memo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

interface DashboardCardProps {
  stat: {
    title: string;
    value: string;
    change: string;
    changeType: 'positive' | 'negative';
    icon: any;
    color: string;
    bgColor: string;
  };
  index: number;
}

export const DashboardCard = memo(({ stat, index }: DashboardCardProps) => {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group relative cursor-pointer"
    >
      <div className="rounded-xl border border-border bg-card/40 p-6 transition-all duration-300 hover:shadow-lg">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <div className={`rounded-lg p-3 ${stat.bgColor}`}>
              <Icon className={`h-6 w-6 ${stat.color}`} />
            </div>

            <div
              className={`flex items-center gap-1 text-sm font-medium ${stat.changeType === 'positive'
                  ? 'text-green-500'
                  : 'text-red-500'
                }`}
            >
              <TrendingUp
                className={`h-4 w-4 ${stat.changeType === 'negative' ? 'rotate-180' : ''
                  }`}
              />
              <span>{stat.change}</span>
            </div>
          </div>

          <div className="mb-3">
            <h3 className="mb-1 text-3xl font-bold text-foreground">
              {stat.value}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </p>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${65 + index * 8}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`h-full rounded-full ${stat.color.replace('text-', 'bg-')}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

DashboardCard.displayName = 'DashboardCard';
