import type {ReactNode} from "react"
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";


interface AuthLayoutProps {
    children: ReactNode
}


export default async function AuthLayout(props: AuthLayoutProps) {
    const {children} = props
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (session) {
        return redirect("/")
    }
    return (
        <div className="bg-blacks">{children}</div>
    )

}