"use client"

import type React from "react"

import { Bell, BookOpen, GraduationCap, Menu, Search, LogOut, Settings, BarChart3 } from "lucide-react"
import Link from "next/link"
import type { User as AuthUser } from "better-auth"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/ui/mode-toggle"

interface NavbarProps {
    user: AuthUser | null
}

const navigationItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        description: "Overview of your learning progress",
    },
    {
        title: "My Courses",
        href: "/courses",
        description: "Access your enrolled courses",
    },
    {
        title: "Browse",
        href: "/browse",
        description: "Discover new courses and content",
    },
    {
        title: "Progress",
        href: "/progress",
        description: "Track your learning journey",
    },
]

export function Navbar({ user }: NavbarProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="px-6 flex h-16  items-center">
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <MobileNav user={user} />
                    </SheetContent>
                </Sheet>

                {/* Logo */}
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="hidden font-bold sm:inline-block">LearnHub</span>
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/featured"
                                            >
                                                <BookOpen className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-medium">Featured Courses</div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Discover our most popular and highly-rated courses
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/courses/programming" title="Programming">
                                        Learn coding from basics to advanced concepts
                                    </ListItem>
                                    <ListItem href="/courses/design" title="Design">
                                        Master UI/UX and graphic design principles
                                    </ListItem>
                                    <ListItem href="/courses/business" title="Business">
                                        Develop essential business and leadership skills
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        {navigationItems.slice(0, 3).map((item) => (
                            <NavigationMenuItem key={item.href}>
                                <Link href={item.href} legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        {item.title}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Search Bar */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search courses..."
                                className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-2">
                    {/* Notifications */}
                    {user && (
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-4 w-4" />
                            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
                            <span className="sr-only">Notifications</span>
                        </Button>
                    )}

                    {/* Mode Toggle */}
                    <ModeToggle />

                    {/* User Menu or Login */}
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user.image || ""} alt={user.name || ""} />
                                        <AvatarFallback>{user.name?.charAt(0)?.toUpperCase() || "U"}</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">{user.name}</p>
                                        <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/profile" className="flex items-center">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/progress" className="flex items-center">
                                        <BarChart3 className="mr-2 h-4 w-4" />
                                        <span>Progress</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/settings" className="flex items-center">
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600 focus:text-red-600">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/signup">Sign Up</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

function MobileNav({ user }: { user: AuthUser | null }) {
    return (
        <div className="flex flex-col space-y-3">
            <Link href="/" className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold">LearnHub</span>
            </Link>
            <div className="flex flex-col space-y-1">
                {navigationItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col space-y-1 rounded-md p-2 text-sm hover:bg-accent"
                    >
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                    </Link>
                ))}
                <Link href="/browse" className="flex flex-col space-y-1 rounded-md p-2 text-sm hover:bg-accent">
                    <span className="font-medium">Browse Courses</span>
                    <span className="text-xs text-muted-foreground">Explore all available courses</span>
                </Link>
            </div>
            {user && (
                <>
                    <div className="border-t pt-3">
                        <div className="flex items-center space-x-2 rounded-md p-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={user.image || ""} alt={user.name || ""} />
                                <AvatarFallback>{user.name?.charAt(0)?.toUpperCase() || "U"}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">{user.name}</span>
                                <span className="text-xs text-muted-foreground">{user.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <Link href="/profile" className="flex items-center space-x-2 rounded-md p-2 text-sm hover:bg-accent">
                            <LogOut className="h-4 w-4" />
                            <span>Profile</span>
                        </Link>
                        <Link href="/progress" className="flex items-center space-x-2 rounded-md p-2 text-sm hover:bg-accent">
                            <BarChart3 className="h-4 w-4" />
                            <span>Progress</span>
                        </Link>
                        <Link href="/settings" className="flex items-center space-x-2 rounded-md p-2 text-sm hover:bg-accent">
                            <Settings className="h-4 w-4" />
                            <span>Settings</span>
                        </Link>
                        <button className="flex items-center space-x-2 rounded-md p-2 text-sm text-red-600 hover:bg-accent">
                            <LogOut className="h-4 w-4" />
                            <span>Log out</span>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

const ListItem = ({
    className,
    title,
    children,
    ...props
}: {
    className?: string
    title: string
    children: React.ReactNode
    href: string
}) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
