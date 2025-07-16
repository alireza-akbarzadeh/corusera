// File: Announcement.stories.tsx
'use client';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArrowUpRightIcon } from 'lucide-react';

import {
    Announcement,
    AnnouncementTag,
    AnnouncementTitle,
} from '@/containers/announcment';

// Default export for Storybook metadata
const meta: Meta = {
    title: 'Components/Feedback/Announcement',
    component: Announcement,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        themed: { control: 'boolean' },
        className: { control: 'text' },
    },
};
export default meta;

type Story = StoryObj<typeof Announcement>;

const icon = <ArrowUpRightIcon className="shrink-0 opacity-70" size={16} />;

// Individual Stories
export const ErrorAnnouncement: Story = {
    args: {
        className: 'bg-rose-100 text-rose-700',
        themed: true,
        children: (
            <>
                <AnnouncementTag>Error</AnnouncementTag>
                <AnnouncementTitle>
                    Something went wrong {icon}
                </AnnouncementTitle>
            </>
        ),
    },
};

export const SuccessAnnouncement: Story = {
    args: {
        className: 'bg-emerald-100 text-emerald-700',
        themed: true,
        children: (
            <>
                <AnnouncementTag>Success</AnnouncementTag>
                <AnnouncementTitle>
                    New feature added {icon}
                </AnnouncementTitle>
            </>
        ),
    },
};

export const WarningAnnouncement: Story = {
    args: {
        className: 'bg-orange-100 text-orange-700',
        themed: true,
        children: (
            <>
                <AnnouncementTag>Warning</AnnouncementTag>
                <AnnouncementTitle>
                    Approaching your limit {icon}
                </AnnouncementTitle>
            </>
        ),
    },
};

export const InfoAnnouncement: Story = {
    args: {
        className: 'bg-sky-100 text-sky-700',
        themed: true,
        children: (
            <>
                <AnnouncementTag>Info</AnnouncementTag>
                <AnnouncementTitle>
                    Welcome to the platform {icon}
                </AnnouncementTitle>
            </>
        ),
    },
};

// Optional: Story that showcases all variants at once
export const AllStates: Story = {
    render: () => (
        <>
            <ErrorAnnouncement.args.children.type {...ErrorAnnouncement.args} />
            <SuccessAnnouncement.args.children.type {...SuccessAnnouncement.args} />
            <WarningAnnouncement.args.children.type {...WarningAnnouncement.args} />
            <InfoAnnouncement.args.children.type {...InfoAnnouncement.args} />
        </>
    ),
};
