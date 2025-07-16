// ListComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { faker } from '@faker-js/faker';
import {
    ListGroup as ListGroupComponent,
    ListHeader,
    ListItem,
    ListItems,
    ListProvider,
    type DragEndEvent,
} from '@/containers/dnd-list';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

// Utility function to capitalize strings
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Define types for our data
interface User {
    id: string;
    name: string;
    image: string;
}

interface Status {
    id: string;
    name: string;
    color: string;
}

interface Feature {
    id: string;
    name: string;
    startAt: Date;
    endAt: Date;
    status: Status;
    owner: User;
}

// Generate mock data
const generateStatuses = (count: number): Status[] => {
    return Array.from({ length: count }).map(() => ({
        id: faker.string.uuid(),
        name: faker.helpers.arrayElement(['Planned', 'In Progress', 'Done', 'Backlog', 'Review']),
        color: faker.color.rgb(),
    }));
};

const generateUsers = (count: number): User[] => {
    return Array.from({ length: count }).map(() => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        image: faker.image.avatar(),
    }));
};

const generateFeatures = (count: number, statuses: Status[], users: User[]): Feature[] => {
    return Array.from({ length: count }).map(() => ({
        id: faker.string.uuid(),
        name: capitalize(faker.company.buzzPhrase()),
        startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
        endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
        status: faker.helpers.arrayElement(statuses),
        owner: faker.helpers.arrayElement(users),
    }));
};

const meta: Meta<typeof ListGroupComponent> = {
    title: 'Components/Board/List',
    component: ListGroupComponent,
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: 'text',
            description: 'Unique identifier for the list group',
        },
        children: {
            control: false,
            description: 'React children nodes',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ListGroupComponent>;

// Base story with default data
const statuses = generateStatuses(3);
const users = generateUsers(4);
const features = generateFeatures(20, statuses, users);

export const Default: Story = {
    render: () => {
        const [featuresState, setFeatures] = React.useState(features);

        const handleDragEnd = (event: DragEndEvent) => {
            const { active, over } = event;
            if (!over) {
                return;
            }
            const status = statuses.find((status) => status.name === over.id);
            if (!status) {
                return;
            }
            setFeatures(
                featuresState.map((feature) => {
                    if (feature.id === active.id) {
                        return { ...feature, status };
                    }
                    return feature;
                })
            );
        };

        return (
            <div className="flex gap-4">
                <ListProvider onDragEnd={handleDragEnd}>
                    {statuses.map((status) => (
                        <ListGroupComponent id={status.name} key={status.name}>
                            <ListHeader color={status.color} name={status.name} />
                            <ListItems>
                                {featuresState
                                    .filter((feature) => feature.status.name === status.name)
                                    .map((feature, index) => (
                                        <ListItem
                                            id={feature.id}
                                            index={index}
                                            key={feature.id}
                                            name={feature.name}
                                            parent={feature.status.name}
                                        >
                                            <div
                                                className="h-2 w-2 shrink-0 rounded-full"
                                                style={{ backgroundColor: feature.status.color }}
                                            />
                                            <p className="m-0 flex-1 font-medium text-sm">
                                                {feature.name}
                                            </p>
                                            {feature.owner && (
                                                <Avatar className="h-4 w-4 shrink-0">
                                                    <AvatarImage src={feature.owner.image} />
                                                    <AvatarFallback>
                                                        {feature.owner.name?.slice(0, 2)}
                                                    </AvatarFallback>
                                                </Avatar>
                                            )}
                                        </ListItem>
                                    ))}
                            </ListItems>
                        </ListGroupComponent>
                    ))}
                </ListProvider>
            </div>
        );
    },
};

// Story with empty state
export const Empty: Story = {
    render: () => (
        <div className="flex gap-4">
            <ListProvider onDragEnd={() => { }}>
                {statuses.map((status) => (
                    <ListGroupComponent id={status.name} key={status.name}>
                        <ListHeader color={status.color} name={status.name} />
                        <ListItems>
                            <div className="p-4 text-center text-sm text-muted-foreground">
                                No items in this list
                            </div>
                        </ListItems>
                    </ListGroupComponent>
                ))}
            </ListProvider>
        </div>
    ),
};

// Story with many items
export const WithManyItems: Story = {
    render: () => {
        const manyFeatures = generateFeatures(50, statuses, users);
        const [featuresState, setFeatures] = React.useState(manyFeatures);

        const handleDragEnd = (event: DragEndEvent) => {
            const { active, over } = event;
            if (!over) {
                return;
            }
            const status = statuses.find((status) => status.name === over.id);
            if (!status) {
                return;
            }
            setFeatures(
                featuresState.map((feature) => {
                    if (feature.id === active.id) {
                        return { ...feature, status };
                    }
                    return feature;
                })
            );
        };

        return (
            <div className="flex gap-4">
                <ListProvider onDragEnd={handleDragEnd}>
                    {statuses.map((status) => (
                        <ListGroupComponent id={status.name} key={status.name}>
                            <ListHeader color={status.color} name={status.name} />
                            <ListItems>
                                {featuresState
                                    .filter((feature) => feature.status.name === status.name)
                                    .map((feature, index) => (
                                        <ListItem
                                            id={feature.id}
                                            index={index}
                                            key={feature.id}
                                            name={feature.name}
                                            parent={feature.status.name}
                                        >
                                            <div
                                                className="h-2 w-2 shrink-0 rounded-full"
                                                style={{ backgroundColor: feature.status.color }}
                                            />
                                            <p className="m-0 flex-1 font-medium text-sm">
                                                {feature.name}
                                            </p>
                                            {feature.owner && (
                                                <Avatar className="h-4 w-4 shrink-0">
                                                    <AvatarImage src={feature.owner.image} />
                                                    <AvatarFallback>
                                                        {feature.owner.name?.slice(0, 2)}
                                                    </AvatarFallback>
                                                </Avatar>
                                            )}
                                        </ListItem>
                                    ))}
                            </ListItems>
                        </ListGroupComponent>
                    ))}
                </ListProvider>
            </div>
        );
    },
};

// Story with custom statuses
export const WithCustomStatuses: Story = {
    render: () => {
        const customStatuses = [
            { id: 'backlog', name: 'Backlog', color: '#94A3B8' },
            { id: 'design', name: 'Design', color: '#7C3AED' },
            { id: 'development', name: 'Development', color: '#2563EB' },
            { id: 'testing', name: 'Testing', color: '#DB2777' },
            { id: 'deployed', name: 'Deployed', color: '#059669' },
        ];

        const customFeatures = generateFeatures(30, customStatuses, users);
        const [featuresState, setFeatures] = React.useState(customFeatures);

        const handleDragEnd = (event: DragEndEvent) => {
            const { active, over } = event;
            if (!over) {
                return;
            }
            const status = customStatuses.find((status) => status.name === over.id);
            if (!status) {
                return;
            }
            setFeatures(
                featuresState.map((feature) => {
                    if (feature.id === active.id) {
                        return { ...feature, status };
                    }
                    return feature;
                })
            );
        };

        return (
            <div className="flex gap-4">
                <ListProvider onDragEnd={handleDragEnd}>
                    {customStatuses.map((status) => (
                        <ListGroupComponent id={status.name} key={status.name}>
                            <ListHeader color={status.color} name={status.name} />
                            <ListItems>
                                {featuresState
                                    .filter((feature) => feature.status.name === status.name)
                                    .map((feature, index) => (
                                        <ListItem
                                            id={feature.id}
                                            index={index}
                                            key={feature.id}
                                            name={feature.name}
                                            parent={feature.status.name}
                                        >
                                            <div
                                                className="h-2 w-2 shrink-0 rounded-full"
                                                style={{ backgroundColor: feature.status.color }}
                                            />
                                            <p className="m-0 flex-1 font-medium text-sm">
                                                {feature.name}
                                            </p>
                                            {feature.owner && (
                                                <Avatar className="h-4 w-4 shrink-0">
                                                    <AvatarImage src={feature.owner.image} />
                                                    <AvatarFallback>
                                                        {feature.owner.name?.slice(0, 2)}
                                                    </AvatarFallback>
                                                </Avatar>
                                            )}
                                        </ListItem>
                                    ))}
                            </ListItems>
                        </ListGroupComponent>
                    ))}
                </ListProvider>
            </div>
        );
    },
};

// Story with single column
export const SingleColumn: Story = {
    render: () => {
        const singleStatus = [{ id: 'tasks', name: 'All Tasks', color: '#3B82F6' }];
        const singleFeatures = generateFeatures(10, singleStatus, users);
        const [featuresState, setFeatures] = React.useState(singleFeatures);

        const handleDragEnd = () => {
            // No-op since we only have one column
        };

        return (
            <div className="w-64">
                <ListProvider onDragEnd={handleDragEnd}>
                    <ListGroupComponent id={singleStatus?.[0]?.name || ''} key={singleStatus?.[0]?.name}>
                        <ListHeader color={singleStatus?.[0]?.color || ''} name={singleStatus?.[0]?.name || ''} />
                        <ListItems>
                            {featuresState.map((feature, index) => (
                                <ListItem
                                    id={feature.id}
                                    index={index}
                                    key={feature.id}
                                    name={feature.name}
                                    parent={feature.status.name}
                                >
                                    <div
                                        className="h-2 w-2 shrink-0 rounded-full"
                                        style={{ backgroundColor: feature.status.color }}
                                    />
                                    <p className="m-0 flex-1 font-medium text-sm">
                                        {feature.name}
                                    </p>
                                    {feature.owner && (
                                        <Avatar className="h-4 w-4 shrink-0">
                                            <AvatarImage src={feature.owner.image} />
                                            <AvatarFallback>
                                                {feature.owner.name?.slice(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>
                                    )}
                                </ListItem>
                            ))}
                        </ListItems>
                    </ListGroupComponent>
                </ListProvider>
            </div>
        );
    },
};