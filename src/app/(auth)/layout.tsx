import type { ReactNode } from "react"


interface AuthLayoutProps {
    children: ReactNode
}


export default function AuthLayout(props: AuthLayoutProps) {
    const { children } = props

    return (
        <div>{children}</div>
    )

}