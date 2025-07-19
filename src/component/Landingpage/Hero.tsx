import { Icons, Images } from '@/assets'
import React from 'react'
import Button from '../ui/Button '

const Hero = () => {
    return (
        <div className="  bg-gradient-to-b from-[#f5f9fa] to-bg2 min-h-[80vh]    px-pad">
            <h1 className="font-space text-dark-green  pt-20 text-7xl leading-24  font-medium  text-center mb-4">Showcase Your <span className="text-primary ">Projects,</span>  <br />   <span className="text-primary">Share</span> Your Vision </h1>
            <p className="text-center mb-8">Build your personal project gallery, manage your portfolio <span className="text-primary">Projects</span> , <br />and connect with collaborators  all in one place.</p>
            <div className="flex items-center justify-center gap-6">
                <Button type="outline">Get Started</Button>
                <Button>Explore Projects</Button>
            </div>
            <div className="grid px-10 self-end grid-cols-[3fr_2.5fr_4fr_2.5fr_3fr] gap-6 items-end pb-24">
                <div style={{ backgroundImage: `url(${Images.Tech})` }} className="h-80 bg-primary rounded-3xl bg-cover bg-center"></div>
                <div className="h-60 grid place-content-center p-6 bg-dark-green rounded-3xl ">
                    <p className="text-white text-2xl font-jetbrain text-center font-bold">100+</p>
                    <p className="text-white text-center"> Esteemed Clients and Partners</p>
                </div>
                <div className="h-46 grid gap-1 bg-white rounded-3xl p-6 ">
                    <div className="flex items-top justify-between">
                        <div className="bg-green-200 mb-2  w-fit p-1 rounded-lg">
                            <Icons.UploadFolder width={30} height={30} />
                        </div>
                        <Icons.Threedot width={20} height={20} />

                    </div>

                    <p className="text-dark-green items-center flex gap-1 text-sm ">Total Projects <Icons.Diagarrow width={16} height={16} /> <span className="text-green-400">8%</span></p>
                    <p className="text-dark-green font-bold text-3xl ">1510+</p>
                    <p className="text-dark-green text-sm ">Increase of <span className="text-green-400">12%</span> this month</p>
                </div>
                <div style={{ backgroundImage: `url(${Images.Programmer})` }} className="h-60 bg-primary rounded-3xl bg-cover bg-top"></div>
                <div className="h-80 relative overflow-hidden grid place-content-end before:w-40 before:h-40 bg-dark-green rounded-3xl p-6">
                    <Icons.Donut className="opacity-10 absolute -top-27 -left-29" width={280} height={280} />
                    <Icons.Meter className="mb-2" width={30} height={30} />
                    <p className="text-white">Achieve Optimal Efficiency and Boost Productivity</p>
                </div>
            </div>
        </div>
    )
}

export default Hero