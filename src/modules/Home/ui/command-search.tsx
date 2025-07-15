"use client"

import { useState } from "react"
import { Search, BookOpen, BarChart3, User, Settings, GraduationCap, Clock, Star } from "lucide-react"
import type { User as AuthUser } from "better-auth"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    ResponsiveCommandDialog,
} from "@/components/ui/command"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Course {
    id: string
    title: string
    category: string
    instructor: string
    duration: string
    rating: number
    level: "Beginner" | "Intermediate" | "Advanced"
    enrolled?: boolean
}

interface CommandSearchProps {
    user: AuthUser | null
    open: boolean
    setOpen: (open: boolean) => void
}

// Mock course data - replace with your actual data source
const courses: Course[] = [
    {
        id: "1",
        title: "React Fundamentals",
        category: "Programming",
        instructor: "John Doe",
        duration: "8 hours",
        rating: 4.8,
        level: "Beginner",
        enrolled: true,
    },
    {
        id: "2",
        title: "UI/UX Design Masterclass",
        category: "Design",
        instructor: "Jane Smith",
        duration: "12 hours",
        rating: 4.9,
        level: "Intermediate",
    },
    {
        id: "3",
        title: "Advanced JavaScript",
        category: "Programming",
        instructor: "Mike Johnson",
        duration: "15 hours",
        rating: 4.7,
        level: "Advanced",
        enrolled: true,
    },
    {
        id: "4",
        title: "Data Science with Python",
        category: "Data Science",
        instructor: "Sarah Wilson",
        duration: "20 hours",
        rating: 4.6,
        level: "Intermediate",
    },
    {
        id: "5",
        title: "Digital Marketing Strategy",
        category: "Business",
        instructor: "Tom Brown",
        duration: "6 hours",
        rating: 4.5,
        level: "Beginner",
    },
    {
        id: "6",
        title: "Machine Learning Basics",
        category: "Data Science",
        instructor: "Alex Chen",
        duration: "18 hours",
        rating: 4.8,
        level: "Intermediate",
    },
]

const quickActions = [
    { title: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { title: "My Courses", href: "/courses", icon: BookOpen },
    { title: "Browse Courses", href: "/browse", icon: Search },
    { title: "View Progress", href: "/progress", icon: BarChart3 },
]

const categories = [
    { title: "Programming", href: "/courses/programming" },
    { title: "Design", href: "/courses/design" },
    { title: "Business", href: "/courses/business" },
    { title: "Data Science", href: "/courses/data-science" },
    { title: "Marketing", href: "/courses/marketing" },
]

export function CommandSearch({ user, open, setOpen }: CommandSearchProps) {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredCourses = courses.filter(
        (course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const filteredActions = quickActions.filter((action) => action.title.toLowerCase().includes(searchTerm.toLowerCase()))

    const filteredCategories = categories.filter((category) =>
        category.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const handleSelect = (href: string) => {
        setOpen(false)
        window.location.href = href
    }

    return (
        <>

            {/* Search Bar */}
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className="w-full flex-1 md:w-auto md:flex-none">
                    <Button
                        variant="outline"
                        className="relative w-full justify-start text-sm text-muted-foreground md:w-[300px] lg:w-[400px] bg-transparent"
                        onClick={() => setOpen(true)}
                    >
                        <Search className="mr-2 h-4 w-4" />
                        Search courses...
                        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </Button>
                </div>
            </div>
            <ResponsiveCommandDialog className="max-w-xl!" open={open} onOpenChange={setOpen}>
                <CommandInput
                    placeholder="Search courses, actions, or categories..."
                    value={searchTerm}
                    onValueChange={setSearchTerm}
                />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    {filteredActions.length > 0 && (
                        <>
                            <CommandGroup heading="Quick Actions">
                                {filteredActions.map((action) => {
                                    const Icon = action.icon
                                    return (
                                        <CommandItem key={action.href} onSelect={() => handleSelect(action.href)}>
                                            <Icon className="mr-2 h-4 w-4" />
                                            <span>{action.title}</span>
                                        </CommandItem>
                                    )
                                })}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    )}

                    {filteredCourses.length > 0 && (
                        <>
                            <CommandGroup heading="Courses">
                                {filteredCourses.slice(0, 8).map((course) => (
                                    <CommandItem
                                        key={course.id}
                                        onSelect={() => handleSelect(`/courses/${course.id}`)}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center">
                                            <BookOpen className="mr-2 h-4 w-4" />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{course.title}</span>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <span>{course.instructor}</span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {course.duration}
                                                    </span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1">
                                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                        {course.rating}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary" className="text-xs">
                                                {course.category}
                                            </Badge>
                                            <Badge
                                                variant={
                                                    course.level === "Beginner"
                                                        ? "default"
                                                        : course.level === "Intermediate"
                                                            ? "secondary"
                                                            : "destructive"
                                                }
                                                className="text-xs"
                                            >
                                                {course.level}
                                            </Badge>
                                            {course.enrolled && (
                                                <Badge variant="outline" className="text-xs text-green-600">
                                                    Enrolled
                                                </Badge>
                                            )}
                                        </div>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </>
                    )}

                    {filteredCategories.length > 0 && (
                        <>
                            <CommandGroup heading="Categories">
                                {filteredCategories.map((category) => (
                                    <CommandItem key={category.href} onSelect={() => handleSelect(category.href)}>
                                        <GraduationCap className="mr-2 h-4 w-4" />
                                        <span>{category.title}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </>
                    )}

                    {user && (
                        <>
                            <CommandSeparator />
                            <CommandGroup heading="Account">
                                <CommandItem onSelect={() => handleSelect("/profile")}>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </CommandItem>
                                <CommandItem onSelect={() => handleSelect("/settings")}>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </CommandItem>
                            </CommandGroup>
                        </>
                    )}
                </CommandList>
            </ResponsiveCommandDialog>
        </>
    )
}
