import { Icons, Images } from '@/assets'
import { type PropsWithChildren } from 'react'
import Logo from '../Logo'
import Button from '../ui/Button '
import { Link, useLocation } from 'react-router'

const AuthLayout = ({ children }: PropsWithChildren) => {
    const location = useLocation().pathname

    return (
        <div className='grid bg-bg h-[100dvh]  md:grid-cols-[5fr_5fr] lg:grid-cols-[4fr_5fr]'>
            <div className='grid place-content-center ' >
                <div className='py-8 px-4 lg:px-10'>
                    <Logo iconSize={30} fontSize={"1.25rem"} className='mb-4' />
                    {
                        location === "/signup"
                            ?
                            <>
                                <h1 className="text-3xl text-dark-green mb-2 leading-14">
                                    Let's Get You Started
                                </h1>
                                <p className="text-sm text-gray-600 mb-6">
                                    Create your account. Share your work with the world. Start building your creative future today.
                                </p>

                            </>
                            :
                            <>
                                <h1 className='text-3xl text-dark-green mb-2 leading-14'>Welcome Back</h1>
                                <p className='text-sm text-gray-600 mb-6'>Manage your portfolio. Showcase your best work. Take control of your creative journey.</p>
                            </>

                    }

                    {children}

                    <div  >
                        <p className="text-center my-4">or</p>
                        <Button style='w-full flex items-center justify-center  !outline-dark-green/60' type='outline'>
                            <Icons.Google width={15} height={15} className='inline mr-2' />
                            Continue with Google
                        </Button>
                        {
                            location === "/signup"
                                ? <p className='text-center text-dark-green text-sm mt-4'>Already have an account? <Link className='text-green-600' to="/login">Login</Link></p>
                                : <p className='text-center text-dark-green text-sm mt-4'>Don't have an account? <Link className='text-green-600' to="/signup">Sign Up</Link></p>
                        }

                    </div>

                </div>

            </div>
            <div style={{ backgroundImage: `url(${Images.Loginbg2})` }} className='hidden md:grid grid-rows-[1fr_auto] bg-black/20 p-2 bg-cover bg-center bg-no-repeat  h-full'>

                <div className='p-5 text-white' >
                </div>
                <div className='bg-white/5 px-5 py-7 text-white backdrop-blur-sm rounded-3xl border border-white/10 w-full' >
                    <div className='flex mb-6 justify-between items-center'>
                        <div className='flex items-center'>
                            <div className='border border-white rounded-full h-10 aspect-square '></div>

                            <div className='border -ml-3 rounded-4xl text-xs h-10 grid place-content-center border-white w-fit px-8 py-2'>Creating</div>

                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-full border rotate-180 opacity-20  border-white aspect-square w-10 grid place-items-center'>
                                <Icons.Trendingup width={20} height={20} />
                            </div>
                            <div className='rounded-full border border-white aspect-square w-10 grid place-items-center'>
                                <Icons.Trendingup width={20} height={20} />
                            </div>
                        </div>


                    </div>

                    <p>Every great project begins with a single idea -
                        But only those who showcase their work leave a lasting impression.
                        Step up, organize your portfolio, and make your mark.</p>

                </div>
            </div>

        </div >
    )
}

export default AuthLayout