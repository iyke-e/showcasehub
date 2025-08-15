import {
    Link,
    NavLink
} from 'react-router'
import { Icons } from '../assets'
import Button from './ui/Button '
import ProfileImage from './ProfileImage'
import { useState } from 'react'

const Header = () => {
    const isLoggedin = false;
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header >
            <div className='grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] px-minipad py-4  lg:px-pad bg-bg sticky top-0 z-50  '>
                <Link to={"/"} className='flex  items-center gap-2'>
                    <Icons.Logo className='w-8 h-8 ' fill='#0A2F47' stroke="#0A2F47" />
                    <h1 className='font-inter text-xl lg:2xl font-extrabold text-dark-green'>ShowcaseHub</h1>
                </Link>

                <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                    <Icons.Menu className='w-8 h-8  cursor-pointer' />
                </div>

                {
                    isOpen && <div className='absolute top-0 left-0 w-full h-[100dvh] backdrop-blur-[4px] bg-black/10  '>
                        <div className='w-7/10 p-minipad grid grid-rows-[1fr_auto] bg-white h-full'>
                            <div>
                                <Icons.ArrowheadLeft onClick={() => setIsOpen(!isOpen)} className='w-8 h-8 ml-auto cursor-pointer' />

                                <h1 className='text-2xl font-bold mb-6'>Menu</h1>


                                <ul className='grid gap-8'>

                                    <li>
                                        <NavLink className={({ isActive }) => isActive ? "text-primary fill-primary flex items-end gap-2" : "hover:text-primary flex items-end gap-2"} to={"/"}>
                                            <Icons.Home className='w-10 h-10 ' />
                                            <span>Home</span>

                                        </NavLink>
                                    </li>
                                    {
                                        isLoggedin &&
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? "text-primary fill-primary flex items-end gap-2" : "hover:text-primary flex items-end gap-2 fill-dark-green"} to={"/project"}>
                                                <Icons.FolderBlack className='w-8 h-8' />
                                                <span className=''>My Projects</span>

                                            </NavLink>
                                        </li>}
                                    <li>
                                        <NavLink className={({ isActive }) => isActive ? "text-primary flex fill-primary items-end gap-2" : "hover:text-primary fill-dark-green flex items-end gap-2"} to={"/about"}>
                                            <Icons.User className='w-10 h-10' />
                                            <span >About Us</span>

                                        </NavLink>
                                    </li>

                                </ul>

                            </div>


                            <div className="grid mb-8 gap-6">
                                {
                                    isLoggedin ?
                                        <>


                                        </>
                                        :
                                        <>
                                            <Link to={"/login"}>
                                                <Button style='w-full py-4' type='outline'>Login</Button>

                                            </Link>
                                            <Link to={"/signup"}>
                                                <Button style='w-full py-4'>Sign Up</Button>

                                            </Link>
                                        </>
                                }

                            </div>



                        </div>

                    </div>
                }

                <ul className=' hidden md:flex justify-center text-dark-green font-medium font-inter items-center gap-6 '>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-primary" : "hover:text-primary"} to={"/"}>Home</NavLink>
                    </li>
                    {
                        isLoggedin &&
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-primary" : "hover:text-primary"} to={"/"}>My Projects</NavLink>
                        </li>}
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-primary" : "hover:text-primary"} to={"/about"}>About</NavLink>
                    </li>
                </ul>


                <div className="hidden md:flex items-center gap-6">
                    {
                        isLoggedin ?
                            <>
                                <Button>+ Add Project</Button>
                                <ProfileImage />

                            </>
                            :
                            <>
                                <Link to={"/login"}>
                                    <Button type='outline'>Login</Button>

                                </Link>
                                <Link to={"/signup"}>
                                    <Button>Sign Up</Button>

                                </Link>
                            </>
                    }

                </div>
            </div>






        </header>
    )
}

export default Header