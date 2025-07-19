import { Icons } from '@/assets'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div className='bg-black px-pad pt-10 text-xs text-white'>
            <div className='flex justify-between pb-10'>
                <div>
                    <Link to={"/"} className='flex items-center gap-2'>
                        <Icons.Logo fill='#ffffff' stroke="#ffffff" height={30} width={30} />
                        <p className='font-inter text-xl text-white'>ShowcaseHub</p>
                    </Link>
                </div>
                <div className='flex gap-30'>
                    <ul className='grid gap-2'>
                        <li className='font-medium text-base pb-3'>Company</li>
                        {
                            footerLinks.company.map((item, index) => (
                                <li key={index}>
                                    <Link className=' hover:text-primary text-sm text-gray-400' to={item.url}>
                                        {item.name}
                                    </Link>

                                </li>
                            ))
                        }
                    </ul>
                    <ul className='grid gap-2'>
                        <li className='font-medium pb-3 text-base'>Services</li>
                        {
                            footerLinks.Services.map((item, index) => (
                                <li key={index}>
                                    <Link className='hover:text-primary text-sm text-gray-400' to={item.url}>
                                        {item.name}
                                    </Link>

                                </li>
                            ))
                        }
                    </ul>
                    <ul className='grid place-content-start gap-4'>
                        <li className='font-medium pb-3 text-base'>Get in Touch</li>
                        {
                            footerLinks.getIntouch.map((item, index) => (
                                <>
                                    <li className=' text-sm  text-gray-400' key={index}>
                                        {item.email}
                                    </li>
                                    <li>
                                        <ul className='flex gap-3 '>
                                            {
                                                item.socialLinks.map(e => (
                                                    <li className='p-2 rounded-xl backdrop-blur-md bg-white/10'>
                                                        <a href={e.url}>
                                                            <e.icon width={20} height={20} />
                                                        </a>

                                                    </li>

                                                ))
                                            }

                                        </ul>
                                    </li>
                                </>

                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='border-t flex text-gray-400 justify-between py-6 items-center border-white/10'>
                <p>                &copy; 2024 ShowcaseHub. All rights reserved                </p>
                <ul className='flex  items-center gap-4'>
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Footer


const footerLinks = {
    company: [
        {
            url: "#",
            name: "About Us"
        },
        {
            url: "#",
            name: "Customers"
        },
        {
            url: "#",
            name: "NewsRoom"
        },
        {
            url: "#",
            name: "Events"
        },
    ],
    Services: [
        {
            url: "#",
            name: "Website Development"
        },
        {
            url: "#",
            name: "Landing Pages"
        },
        {
            url: "#",
            name: "Portfolios"
        },
        {
            url: "#",
            name: "E-commerce"
        },
        {
            url: "#",
            name: "FinTech Apps"
        },
    ],
    getIntouch: [
        {
            email: "ikegwimik@gmail.com",
            socialLinks: [
                {
                    name: "Linkedin",
                    icon: Icons.Linkedin,
                    url: ""
                },
                {
                    name: "Github",
                    icon: Icons.Github,
                    url: ""
                },
                {
                    name: "Facebook",
                    icon: Icons.Facebook,
                    url: ""
                },
            ]
        }
    ]
}