import { Icons } from '@/assets'
import { Link } from 'react-router'

type LogoProps = {
    color?: string
    iconSize?: number
    iconWidth?: number
    fontSize?: string | number
    style?: React.CSSProperties
    className?: string
}

const Logo = ({
    color = "#0A2F47",
    iconSize = 40,
    fontSize = "2rem",
    style,
    className = ""
}: LogoProps) => {
    return (
        <Link to={"/"} className={`flex justify-center items-center gap-2 w-fit ${className}`} style={style}>
            <Icons.Logo fill={color} stroke={color} height={iconSize} width={iconSize} />
            <h1
                style={{ color, fontSize, ...style }}
                className="font-inter font-extrabold"
            >
                ShowcaseHub
            </h1>
        </Link>
    )
}

export default Logo