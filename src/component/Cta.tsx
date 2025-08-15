import Button from './ui/Button '
import { Link } from 'react-router'

const Cta = () => {
    return (
        <div className='bg-dark-green text-center px-pad py-20 text-white'>
            <h2 className='text-4xl leading-12 mb-3'>Ready to Showcase Your <span className='text-primary'>Projects?</span> </h2>
            <p className='text-gray-300 mx-auto max-w-100'>Join a community of creators and start sharing your work with the world today.</p>
            <div className=' flex flex-col md:flex-row justify-center gap-4 mt-10'>
                <Link to="/signup">
                    <Button style='text-white/80 w-full  outline-white/50' type='outline'>Get Started for Free</Button>
                </Link>
                <Link to="/signup">
                    <Button style='w-full'  >Explore Projects</Button>
                </Link>
            </div>
        </div>


    )
}

export default Cta