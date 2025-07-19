import { type PropsWithChildren } from 'react'

type ButtonProp = PropsWithChildren<{
    type?: string,
    style?: string
}>

const Button = ({ children, type, style }: ButtonProp) => {
    return (
        <button className={`${type === "outline" ? "outline outline-dark-green/10 text-dark-green/80" : "bg-primary text-white"}  cursor-pointer rounded-xl px-5 py-2 ${style}`}>
            {children}
        </button >
    )
}

export default Button 