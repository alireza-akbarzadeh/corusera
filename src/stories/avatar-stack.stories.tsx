// File: AvatarStack.stories.tsx
'use client';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AvatarStack } from '@/containers/avatar-stack';

// Utility function to generate avatars from a list
const createAvatars = (users: { src: string; fallback: string }[]) =>
    users.map((user, index) => (
        <Avatar key={index}>
            <AvatarImage src={user.src} />
            <AvatarFallback>{user.fallback}</AvatarFallback>
        </Avatar>
    ));

const defaultUsers = [
    { src: 'https://github.com/haydenbleasel.png', fallback: 'HB' },
    { src: 'https://github.com/shadcn.png', fallback: 'CN' },
    { src: 'https://github.com/leerob.png', fallback: 'LR' },
    { src: 'https://github.com/serafimcloud.png', fallback: 'SC' },
];

// Default metadata
const meta = {
    title: 'Components/User/AvatarStack',
    component: AvatarStack,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
            navigation: {
                segments: ['dashboard', 'analytics'],
            },
        },
    },
    argTypes: {
        count: {
            name: 'Avatar Count',
            control: { type: 'range', min: 1, max: 6, step: 1 },
        },
    },
    args: {
        count: 4,
    },
} satisfies Meta<typeof AvatarStack>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default example with 4 avatars
export const Default: Story = {
    render: ({ count }) => (
        <AvatarStack>{createAvatars(defaultUsers.slice(0, count))}</AvatarStack>
    ),
};

// Another variant: only initials fallback
export const WithFallbackOnly: Story = {
    render: () => (
        <AvatarStack>
            <Avatar>
                <AvatarFallback>HB</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>LR</AvatarFallback>
            </Avatar>
        </AvatarStack>
    ),
};
