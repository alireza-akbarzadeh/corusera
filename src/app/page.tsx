import { HomeView } from "@/modules/Home";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { Navbar } from "@/modules/Home/ui/navbar";
import type { User } from "better-auth";
import HeroSection from "@/modules/Home/sections/hero-section";


export default async function HomePage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    return (
        <>
            <Navbar user={session?.user as User} />
            <HeroSection />
            <HomeView />
        </>
    )
}
