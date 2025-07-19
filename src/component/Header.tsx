import { Link, NavLink } from 'react-router'
import { Icons } from '../assets'
import Button from './ui/Button '
import { useState } from 'react'
import ProfileImage from './ProfileImage'

const Header = () => {
    const [isLoggedin, setisLoggedin] = useState(false)

    return (
        <header className='px-pad pb-2  bg-bg sticky top-0 z-50  pt-6 flex justify-between'>
            <Link to={"/"} className='flex justify-center items-center gap-2'>
                <Icons.Logo fill='#0A2F47' stroke="#0A2F47" height={40} width={40} />
                <h1 className='font-inter text-2xl font-extrabold text-dark-green'>ShowcaseHub</h1>
            </Link>

            <ul className='flex text-dark-green font-medium font-inter items-center gap-6 '>
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





            <div className="flex items-center gap-6">
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
        </header>
    )
}

export default Header