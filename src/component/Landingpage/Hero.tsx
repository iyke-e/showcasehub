import { Icons, Images } from '@/assets'
import Button from '../ui/Button '
import { Link } from 'react-router'

const Hero = () => {
    return (
        <div className="  bg-gradient-to-b from-[#f5f9fa] to-bg2    px-minipad lg:px-pad">
            <h1 className="font-space text-dark-green pt-8 lg:pt-20  text-6xl lg:text-7xl leading-20 lg:leading-24  font-medium  text-center mb-4">Showcase Your <span className="text-primary ">Projects,</span>  <br />   <span className="text-primary">Share</span> Your Vision </h1>
            <p className="text-center mb-8 max-w-80 md:max-w-130 mx-auto">Build your personal project gallery, manage your portfolio <span className="text-primary">Projects</span>, and connect with collaborators  all in one place.</p>
            <div className="flex items-center justify-center gap-6">
                <Link to={"/signup"}>
                </Link>
                <Button type="outline">Get Started</Button>
                <Button>Explore Projects</Button>
            </div>
            <div className="mt-16 md:mt-0 grid lg:px-10 self-end md:grid-cols-[3fr_4fr_2.5fr_3fr] lg:grid-cols-[3fr_2.5fr_4fr_2.5fr_3fr] gap-4 lg:gap-6 items-end pb-14 lg:pb-24">
                <div style={{ backgroundImage: `url(${Images.Tech})` }} className="h-80 hidden lg:block bg-primary rounded-3xl bg-cover bg-center"></div>
                <div className="h-50 md:h-70 grid gap-2 place-content-center p-6 bg-dark-green rounded-3xl">
                    <p className="text-white text-4xl  font-jetbrain text-center font-bold">100+</p>
                    <p className="text-white px-4 lg:px-0 text-xl lg:text-sm text-center "> Esteemed Clients and Partners</p>
                </div>
                <div className="h-56 grid gap-1 bg-white rounded-3xl p-6 ">
                    <div className="flex items-top justify-between">
                        <div className="bg-green-200 mb-2  w-fit p-1 rounded-lg">
                            <Icons.UploadFolder width={30} height={30} />
                        </div>
                        <Icons.Threedot width={20} height={20} />

                    </div>

                    <p className="text-dark-green items-center flex gap-1 text-sm ">Total Projects <Icons.Diagarrow width={16} height={16} /> <span className="text-green-400">8%</span></p>
                    <p className="text-dark-green font-bold text-3xl ">1510+</p>
                    <p className="text-dark-green text-sm ">Increase of <span className="text-green-600">12%</span> this month</p>
                </div>
                <div style={{ backgroundImage: `url(${Images.Programmer})` }} className="h-60 bg-primary rounded-3xl bg-cover bg-top"></div>
                <div className="h-80 relative grid place-content-end before:w-40 before:h-40 bg-dark-green rounded-3xl p-6">
                    <Icons.Donut className="opacity-10 absolute -top-27 -left-29" width={280} height={280} />
                    <Icons.Meter className="mb-2" width={50} height={50} />
                    <p className="text-white text-xl md:text-base">Achieve Optimal Efficiency and Boost Productivity</p>
                </div>
            </div>
        </div>
    )
}

export default Hero