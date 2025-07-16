// KanbanBoard.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { faker } from '@faker-js/faker';
import {
    KanbanBoard as KanbanBoardComponent,
    KanbanCard,
    KanbanCards,
    KanbanHeader,
    KanbanProvider,
} from '@/containers/kanban';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Utility function to capitalize strings
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Define types for our data
interface User {
    id: string;
    name: string;
    image: string;
}

interface Column {
    id: string;
    name: string;
    color: string;
}

interface Feature {
    id: string;
    name: string;
    startAt: Date;
    endAt: Date;
    column: string;
    owner: User;
}

// Generate mock data
const generateColumns = (count: number): Column[] => {
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

const generateFeatures = (count: number, columns: Column[], users: User[]): Feature[] => {
    return Array.from({ length: count }).map(() => ({
        id: faker.string.uuid(),
        name: capitalize(faker.company.buzzPhrase()),
        startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
        endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
        column: faker.helpers.arrayElement(columns).id,
        owner: faker.helpers.arrayElement(users),
    }));
};

// Date formatters
const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
});

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
});

const meta: Meta<typeof KanbanBoardComponent> = {
    title: 'Components/Board/KanbanBoard',
    component: KanbanBoardComponent,
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: 'text',
            description: 'Unique identifier for the board column',
        },
        children: {
            control: false,
            description: 'React children nodes',
        },
    },
};

export default meta;
type Story = StoryObj<typeof KanbanBoardComponent>;

// Base story with default data
const columns = generateColumns(3);
const users = generateUsers(4);
const features = generateFeatures(20, columns, users);

export const Default: Story = {
    render: () => (
        <KanbanProvider columns={columns} data={features} onDataChange={() => { }}>
            {(column) => (
                <KanbanBoardComponent id={column.id} key={column.id}>
                    <KanbanHeader>
                        <div className="flex items-center gap-2">
                            <div
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: column.color }}
                            />
                            <span>{column.name}</span>
                        </div>
                    </KanbanHeader>
                    <KanbanCards id={column.id}>
                        {(feature: Feature) => (
                            <KanbanCard
                                column={column.id}
                                id={feature.id}
                                key={feature.id}
                                name={feature.name}
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex flex-col gap-1">
                                        <p className="m-0 flex-1 font-medium text-sm">
                                            {feature.name}
                                        </p>
                                    </div>
                                    {feature.owner && (
                                        <Avatar className="h-4 w-4 shrink-0">
                                            <AvatarImage src={feature.owner.image} />
                                            <AvatarFallback>
                                                {feature.owner.name?.slice(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                                <p className="m-0 text-muted-foreground text-xs">
                                    {shortDateFormatter.format(feature.startAt)} -{' '}
                                    {dateFormatter.format(feature.endAt)}
                                </p>
                            </KanbanCard>
                        )}
                    </KanbanCards>
                </KanbanBoardComponent>
            )}
        </KanbanProvider>
    ),
};

// Story with empty state
export const Empty: Story = {
    render: () => (
        <KanbanProvider columns={columns} data={[]} onDataChange={() => { }}>
            {(column) => (
                <KanbanBoardComponent id={column.id} key={column.id}>
                    <KanbanHeader>
                        <div className="flex items-center gap-2">
                            <div
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: column.color }}
                            />
                            <span>{column.name}</span>
                        </div>
                    </KanbanHeader>
                    <KanbanCards id={column.id}>
                        {() => (
                            <div className="p-4 text-center text-sm text-muted-foreground">
                                No items in this column
                            </div>
                        )}
                    </KanbanCards>
                </KanbanBoardComponent>
            )}
        </KanbanProvider>
    ),
};

// Story with many items
export const WithManyItems: Story = {
    render: () => {
        const manyFeatures = generateFeatures(50, columns, users);
        return (
            <KanbanProvider columns={columns} data={manyFeatures} onDataChange={() => { }}>
                {(column) => (
                    <KanbanBoardComponent id={column.id} key={column.id}>
                        <KanbanHeader>
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-2 w-2 rounded-full"
                                    style={{ backgroundColor: column.color }}
                                />
                                <span>{column.name}</span>
                            </div>
                        </KanbanHeader>
                        <KanbanCards id={column.id}>
                            {(feature: Feature) => (
                                <KanbanCard
                                    column={column.id}
                                    id={feature.id}
                                    key={feature.id}
                                    name={feature.name}
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex flex-col gap-1">
                                            <p className="m-0 flex-1 font-medium text-sm">
                                                {feature.name}
                                            </p>
                                        </div>
                                        {feature.owner && (
                                            <Avatar className="h-4 w-4 shrink-0">
                                                <AvatarImage src={feature.owner.image} />
                                                <AvatarFallback>
                                                    {feature.owner.name?.slice(0, 2)}
                                                </AvatarFallback>
                                            </Avatar>
                                        )}
                                    </div>
                                    <p className="m-0 text-muted-foreground text-xs">
                                        {shortDateFormatter.format(feature.startAt)} -{' '}
                                        {dateFormatter.format(feature.endAt)}
                                    </p>
                                </KanbanCard>
                            )}
                        </KanbanCards>
                    </KanbanBoardComponent>
                )}
            </KanbanProvider>
        );
    },
};

// Story with custom columns
export const WithCustomColumns: Story = {
    render: () => {
        const customColumns = [
            { id: 'backlog', name: 'Backlog', color: '#94A3B8' },
            { id: 'design', name: 'Design', color: '#7C3AED' },
            { id: 'development', name: 'Development', color: '#2563EB' },
            { id: 'testing', name: 'Testing', color: '#DB2777' },
            { id: 'deployed', name: 'Deployed', color: '#059669' },
        ];

        const customFeatures = generateFeatures(30, customColumns, users);

        return (
            <KanbanProvider columns={customColumns} data={customFeatures} onDataChange={() => { }}>
                {(column) => (
                    <KanbanBoardComponent id={column.id} key={column.id}>
                        <KanbanHeader>
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-2 w-2 rounded-full"
                                    style={{ backgroundColor: column.color }}
                                />
                                <span>{column.name}</span>
                            </div>
                        </KanbanHeader>
                        <KanbanCards id={column.id}>
                            {(feature: Feature) => (
                                <KanbanCard
                                    column={column.id}
                                    id={feature.id}
                                    key={feature.id}
                                    name={feature.name}
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex flex-col gap-1">
                                            <p className="m-0 flex-1 font-medium text-sm">
                                                {feature.name}
                                            </p>
                                        </div>
                                        {feature.owner && (
                                            <Avatar className="h-4 w-4 shrink-0">
                                                <AvatarImage src={feature.owner.image} />
                                                <AvatarFallback>
                                                    {feature.owner.name?.slice(0, 2)}
                                                </AvatarFallback>
                                            </Avatar>
                                        )}
                                    </div>
                                    <p className="m-0 text-muted-foreground text-xs">
                                        {shortDateFormatter.format(feature.startAt)} -{' '}
                                        {dateFormatter.format(feature.endAt)}
                                    </p>
                                </KanbanCard>
                            )}
                        </KanbanCards>
                    </KanbanBoardComponent>
                )}
            </KanbanProvider>
        );
    },
};