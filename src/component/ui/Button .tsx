import { type PropsWithChildren } from 'react'

type ButtonProp = PropsWithChildren<{
    type?: string,
    style?: string
    disabled?: boolean
    onClick?: () => void
}>

const Button = ({ children, type, style, disabled, onClick }: ButtonProp) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`${type === "outline" ? "outline outline-primary/50 text-primary" : "bg-primary text-white"}  cursor-pointer rounded-full px-5 py-3 ${style}`} >
            {children}
        </button >
    )
}

export default Button 