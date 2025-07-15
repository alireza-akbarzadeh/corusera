
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Link } from "lucide-react"

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
