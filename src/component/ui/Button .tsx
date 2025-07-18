import { type PropsWithChildren } from 'react'

type ButtonProp = PropsWithChildren

const Button = ({ children }: ButtonProp) => {
    return (
        <button className='bg-black rounded-full px-20 py-10 text-white'>
            {children}
        </button>
    )
}

export default Button 