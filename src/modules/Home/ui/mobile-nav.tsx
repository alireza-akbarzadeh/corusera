
import type { User as AuthUser } from "better-auth"
import { BarChart3, GraduationCap, LogOut, Settings } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { navigationItems } from "./navbar"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

interface NavbarProps {
    user: AuthUser | null
}

export function MobileNav({ user }: { user: AuthUser | null }) {
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
                    className="block dark:text-white select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...props}
                >
                    <div className="text-sm text-white font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-white! text-sm leading-snug ">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
