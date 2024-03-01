"use client";
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { motion, AnimatePresence, delay, stagger } from "framer-motion";


export default function Navbar() {
    //  track state of the navbar
    //  track if the navbar is open or closed
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const links = [
        {
            "name": "Home",
            "url": "/"
        },
        {
            "name": "About",
            "url": "/about"
        },
        {
            "name": "Gallery",
            "url": "/gallery"
        }
    ]

    const ulVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (


        <nav className="bg-primary px-10">
            <div className="flex flex-wrap items-center justify-between py-4">
                {/* <span className="self-center text-3xl font-semibold whitespace-nowrap">MW</span> */}
                <Link href="/">
                    <Image src="/images/mw.png" alt="logo" width={50} height={50} />
                </Link>
                <button onClick={toggleNavbar} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <AnimatePresence>

                    {isOpen && <div className={`w-full md:block md:w-auto`} id="navbar-default">
                        <motion.ul
                            className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 "
                            variants={ulVariants}
                            initial="hidden"
                            animate="show"
                        >
                            {links.map((link, index) => {
                                return (
                                    <motion.li
                                        key={index}
                                        onClick={toggleNavbar}
                                        variants={item}
                                    >
                                        <Link href={link.url} className={`${(pathname == link.url) ? "text-white bg-primary md:text-white " : "text-black "}block py-2 px-3  rounded md:bg-transparent xl:text-2xl  md:p-0 `}>{link.name}</Link>
                                    </motion.li>
                                )
                            })}
                        </motion.ul>
                    </div>}
                </AnimatePresence>
            </div>
        </nav>


    )
}
