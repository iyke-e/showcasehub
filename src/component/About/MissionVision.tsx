import { Images } from '@/assets'
import Button from '../ui/Button '

const MissionVision = () => {
    return (
        <div className=' grid bg-bg2 gap-10  pb-24 px-minipad lg:px-pad py-10'>

            <div className='grid items-center max-w-240 gap-16 md:gap-8 lg:gap-16 md:grid-cols-2 lg:grid-cols-[5fr_4fr]'>
                <div className='md:order-2'>
                    <h3 className='text-4xl'>Our Mission</h3>
                    <p className='leading-8 mt-8 mb-16 text-gray-500'>To simplify the way creators manage, present, and update their work, giving them the tools to showcase their talent with clarity, consistency, and style.</p>
                    <Button>Learn More</Button>
                </div>
                <div className='bg-cover  w-full h-60 lg:h-100 mt-10 lg:mt-0 rounded-4xl relative bg-center'>
                    <img className='h-60 lg:h-80 rounded-4xl grayscale w-full object-cover' src={Images.Tech} alt="" />
                    <img className='h-60 lg:h-80 absolute bottom-10 lg:top-10 left-1/2 -translate-x-1/2 rounded-4xl  w-9/10 object-cover' src={Images.Tech} alt="" />


                </div>
            </div>
            <div className='grid ml-auto  max-w-240 items-center gap-16  md:gap-8  lg:gap-16 md:grid-cols-2 lg:grid-cols-[4fr_5fr] '>
                <div  >
                    <h3 className='text-4xl'>Our Vision</h3>
                    <p className='leading-8 mt-8 mb-16 text-gray-500'>To become the go-to platform where every creator, regardless of industry or skill level, can manage and present their work without friction—turning portfolios into living, evolving stories.</p>
                    <Button>Learn More</Button>

                </div>
                <div className='bg-cover w-full h-60 lg:h-100 rounded-4xl relative bg-center'>
                    <img className='h-60 lg:h-90 absolute grayscale lg:left-1/2 lg:-translate-x-1/2 rounded-4xl w-full lg:w-4/5 object-cover' src={Images.Tech} alt="" />
                    <img className='h-60 lg:h-90 absolute top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0  rounded-4xl  w-4/5 object-cover' src={Images.Tech} alt="" />


                </div>
            </div>

        </div>
    )
}

export default MissionVision