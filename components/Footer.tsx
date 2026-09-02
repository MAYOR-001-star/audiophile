import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navlinks = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/headphones" },
    { name: "Speakers", href: "/speakers" },
    { name: "Earphones", href: "/earphones" }
]

const socials = [
    { name: "facebook", src: "/socials/facebook.svg" },
    { name: "instagram", src: "/socials/instagram.svg" },
    { name: "twitter", src: "/socials/twitter.svg" }
]

const SocialIcons = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-4 ${className}`}>
        {socials.map((social) => (
            <Link key={social.name} href="#" className="hover:opacity-75 transition-opacity">
                <Image src={social.src} alt={social.name} width={24} height={24} />
            </Link>
        ))}
    </div>
)

const Footer = () => {
    return (
        <footer className='footer-container'>
            {/* Top Row: Logo & Navlinks */}
            <div className='flex flex-col lg:flex-row justify-between items-center md:items-start lg:items-center mb-[2.25rem]'>
                <Image src="/Audiophile.svg" alt="logo" width={143} height={25} />
                <ul className="flex flex-col md:flex-row items-center gap-[2.13rem] mt-[3rem] md:mt-[2rem] lg:mt-0">
                    {navlinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="footer-navlink">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Middle Row: Description */}
            <div className='mb-[3.5rem]'>
                <p className='footer-text font-medium max-w-[33.75rem] text-center md:text-left'>
                    Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
                </p>
            </div>

            {/* Bottom Row: Copyright & Social Icons */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <p className='footer-text font-bold'>
                    Copyright 2021. All Rights Reserved
                </p>
                <SocialIcons />
            </div>
        </footer>
    )
}

export default Footer