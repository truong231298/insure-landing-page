import React from 'react'
import iconfacebook from "/images/icon-facebook.svg"
import icontwitter from "/images/icon-twitter.svg"
import iconpinterest from "/images/icon-pinterest.svg"
import iconinstagram from "/images/icon-instagram.svg"
import logo from "/images/logo.svg"

const Footer = () => {
    const footer = [
        {
            name: "Our company",
            links: ["How we work", "Why Insure?", "View plans", "Reviews"]
        },
        {
            name: "Help me",
            links: ["FAQ", "Terms of use", "Privacy policy", "Cookies"]
        },
        {
            name: "Contact",
            links: ["Sales", "Support", "Live chat"]
        },
        {
            name: "Others",
            links: ["Careers", "Press", "Licenses"]
        }
    ];


    return (
        <div className='flex flex-col gap-4 bg-VeryLiGray sm:bg-bg-footerdesktop bg-no-repeat bg-bg-footermobile'>
            <div className='flex sm:flex-row flex-col justify-center sm:justify-between items-center'>
                <img src={logo} alt="" className='mb-2'/>
                <div className='flex flex-row gap-2'>
                    {[iconfacebook, icontwitter, iconpinterest, iconinstagram].map((icon, index) => (
                        <span key={index}>
                            <img src={icon} alt="" className='w-6' />
                        </span>
                    ))}
                </div>
            </div>
            <hr className='border-2 w-full' />
            <div className='flex flex-col font-bold sm:flex-row sm:justify-between justify-center'>
                {footer.map((info, index) => (
                    <div key={index} className='flex flex-col text-center sm:text-justify mb-2'>
                        <h1 className='text-DarkGrayishViolet sm:mb-1 mb-4'>{info.name}</h1>
                        {info.links.map((link, i) => (
                            <ul className='my-2 sm:my-1'>
                                <li> <a key={i} href="#" className='text-Black'>{link}</a></li>
                            </ul>

                        ))}

                    </div>
                ))}
            </div>
        </div>
    )

}

export default Footer