import { features } from './featuresData'

const Features = () => {
    return (
        <div className='bg-dark-green relative overflow-hidden px-pad py-24 text-white'>
            {/* <Icons.Donut className='absolute rotate-90 opacity-10 -top-70 -right-40' width={500} height={500} /> */}

            <h2 className='text-[40px] font-light text-center font-space mb-6'>Empowering Your Creative Journey</h2>
            <p className='text-center leading-6 text-sm text-gray-300'>From your first project to your biggest launch we’re here to help <br /> you share your work with the world</p>

            <div className='grid gap-6 grid-cols-3 mt-14 '>
                {
                    features.map((item, index) => (
                        <div className='bg-white/10 relative shadow border border-white/20 backdrop-blur-md  p-6  rounded-lg' key={index}>
                            <div className='flex  justify-between items-start mb-8'>
                                <item.icon width={40} height={40} />
                                <item.logo className='absolute opacity-5 top-2 right-2' width={70} height={70} />

                            </div>

                            <p className='text-lg  font-jetbrain  mb-3'>{item.title}</p>
                            <p className='text-sm font-extralight leading-6 text-gray-300'>{item.description}</p>


                        </div>
                    ))

                }
            </div>
        </div>

    )
}

export default Features




