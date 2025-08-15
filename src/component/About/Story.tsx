import { Icons, Images } from "@/assets"
import Button from "../ui/Button "

const Story = () => {
    return (
        <div className=" bg-gradient-to-b from-[#f5f9fa] to-bg2  ">
            <div className="px-minipad lg:px-pad">
                <h1 className="text-[50px] lg:text-8xl lg:leading-28 text-dark-green pt-6 lg:pt-10 mb-6">Curating work, <br />Celebrating <span className="text-primary">Mastery</span>
                </h1>
                <p className="max-w-[1020px] text-gray-700 mb-16 leading-7">At ShowcaseHub, we believe every project deserves to shine.
                    Born out of the need for a more seamless way to manage and present creative work, ShowcaseHub was built to empower developers, designers, and creators to control how their projects are organized, showcased, and shared with the world.
                </p>
                <Button style="flex items-center gap-2">VIEW OUR PROJECT <Icons.Diagarrow className="w-6 h-6" /> </Button>
            </div>



            <div style={{ backgroundImage: `url(${Images.AboutHero})` }} className="w-full mt-14  bg-cover bg-center h-80" />

        </div>



    )
}

export default Story