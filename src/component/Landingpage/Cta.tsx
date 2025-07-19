import React from 'react'
import Button from '../ui/Button '
import { Link } from 'react-router'

const Cta = () => {
    return (
        <div className='bg-dark-green text-center px-pad py-20 text-white'>
            <h2 className='text-4xl mb-3'>Ready to Showcase Your <span className='text-primary'>Projects?</span> </h2>
            <p className='text-gray-300'>Join a community of creators and start sharing your <br /> work with the world today.</p>
            <div className='flex justify-center gap-4 mt-10'>
                <Link to="/signup">
                    <Button style='text-white/80 outline-primary' type='outline'>Get Started Free</Button>
                </Link>
                <Link to="/signup">
                    <Button  >Explore Projects</Button>
                </Link>
            </div>
        </div>


    )
}

export default Cta