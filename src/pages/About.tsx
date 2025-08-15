import Aboutus from "@/component/About/Aboutus"
import MissionVision from "@/component/About/MissionVision"
import Story from "@/component/About/Story"
import Cta from "@/component/Cta"
import Footer from "@/component/Footer"
import Header from "@/component/Header"

const About = () => {
    return (
        <div>
            <Header />
            <Story />
            <Aboutus />
            <MissionVision />
            <Cta />
            <Footer />
        </div>
    )
}

export default About