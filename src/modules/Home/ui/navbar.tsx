"use client"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import type { User as AuthUser } from "better-auth"
import { BarChart3, Bell, BookOpen, GraduationCap, LogOut, Menu, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/ui/mode-toggle"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import { CommandSearch } from "./command-search"
import { MobileNav } from "./mobile-nav"
import Link from "next/link"



interface NavbarProps {
    user: AuthUser | null
}

export const navigationItems = [
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
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/60">
            <div className="px-6 flex h-16 items-center">
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 text-base hover:bg-white/10 focus-visible:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden text-white"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0 bg-slate-900 border-white/10">
                        <MobileNav user={user} />
                    </SheetContent>
                </Sheet>

                {/* Logo */}
                <Link href="/" className="mr-6 flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                        <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <span className="hidden font-bold sm:inline-block text-white text-lg">LearnHub</span>
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10">
                                Courses
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-slate-900/95 backdrop-blur-xl border-white/10">
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500/20 to-blue-500/20 p-6 no-underline outline-none focus:shadow-md hover:bg-gradient-to-b hover:from-purple-500/30 hover:to-blue-500/30 transition-all"
                                                href="/featured"
                                            >
                                                <BookOpen className="h-6 w-6 text-white" />
                                                <div className="mb-2 mt-4 text-lg font-medium text-white">Featured Courses</div>
                                                <p className="text-sm leading-tight text-slate-300">
                                                    Discover our most popular and highly-rated courses
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/courses/programming" title="Programming" className="text-white hover:bg-white/10">
                                        Learn coding from basics to advanced concepts
                                    </ListItem>
                                    <ListItem href="/courses/design" title="Design" className="text-white hover:bg-white/10">
                                        Master UI/UX and graphic design principles
                                    </ListItem>
                                    <ListItem href="/courses/business" title="Business" className="text-white hover:bg-white/10">
                                        Develop essential business and leadership skills
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        {navigationItems.slice(0, 3).map((item) => (
                            <NavigationMenuItem key={item.href}>
                                <Link href={item.href} passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10 text-slate-200">
                                        {item.title}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Search bar */}
                <CommandSearch open={open} setOpen={setOpen} user={user} />

                {/* Right Side Actions */}
                <div className="flex items-center space-x-2">
                    {/* Notifications */}
                    {user && (
                        <Button variant="ghost" size="icon" className="relative hover:bg-white/10 text-white">
                            <Bell className="h-4 w-4" />
                            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                                3
                            </Badge>
                            <span className="sr-only">Notifications</span>
                        </Button>
                    )}

                    {/* Mode Toggle */}
                    <div className="hidden">
                        <ModeToggle />
                    </div>

                    {/* User Menu or Login */}
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-white/10">
                                    <Avatar className="h-8 w-8 ring-2 ring-purple-500/50">
                                        <AvatarImage src={user.image || ""} alt={user.name || ""} />
                                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                                            {user.name?.charAt(0)?.toUpperCase() || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-56 bg-slate-900/95 backdrop-blur-xl border-white/10"
                                align="end"
                                forceMount
                            >
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none text-white">{user.name}</p>
                                        <p className="text-xs leading-none text-slate-400">{user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem
                                    asChild
                                    className="text-slate-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                                >
                                    <Link href="/profile" className="flex items-center">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    asChild
                                    className="text-slate-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                                >
                                    <Link href="/progress" className="flex items-center">
                                        <BarChart3 className="mr-2 h-4 w-4" />
                                        <span>Progress</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    asChild
                                    className="text-slate-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                                >
                                    <Link href="/settings" className="flex items-center">
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem className="text-red-400 focus:text-red-300 hover:bg-red-500/10 focus:bg-red-500/10">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost" asChild className="text-slate-200 hover:bg-white/10 hover:text-white">
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button
                                asChild
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-purple-500/25"
                            >
                                <Link href="/signup">Sign Up</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}






export const ListItem = ({
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
