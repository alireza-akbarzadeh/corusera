import { AboutSection, PricingSection, TestimonialsSection } from "../sections";


export function HomeView() {
    return (
        <main className="gradient-bg">
            <PricingSection />
            <AboutSection />
            <TestimonialsSection />
        </main>
    )
}