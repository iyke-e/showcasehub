import Features from "@/component/Landingpage/Features"
import Header from "../component/Header"
import Hero from "@/component/Landingpage/Hero"
import Footer from "@/component/Footer"
import Cta from "@/component/Landingpage/Cta"
import HowItWorks from "@/component/Landingpage/HowItWorks"
import FeaturedProjects from "@/component/Landingpage/FeaturedProjects"

const LandingPage = () => {
    return (
        <div className="bg-bg2 min-h-screen">
            <Header />
            <Hero />
            <Features />
            <FeaturedProjects />

            <HowItWorks />
            <Cta />
            <Footer />

        </div>
    )
}

export default LandingPage