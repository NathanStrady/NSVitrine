'use client'

import { useState } from 'react';
import {TransitionLink} from "@/components/utils/TransitionLink";



export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { name: "Home", href: "/", isActive: true },
        { name: "About", href: "/about", isActive: false },
        { name: "Portfolio", href: "/projects", isActive: false },
    ];

    return (
        <div className="bg-primary z-50 fixed top-0 w-full shadow-primary-foreground">
            <nav className="bg-primary text-primary-foreground max-w-10xl mx-auto p-6 flex items-center justify-between">
                <p className="text-lg font-bold lg:text-xl">© Fait par Strady Nathan</p>
                <button
                    className="relative lg:hidden ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={toggleMobileMenu}
                    type="button"
                >
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </span>
                </button>

                <div className="md:hidden">
                    <ul className={`bg-primary w-full absolute top-full left-0 border-b border-gray-200 flex flex-col items-center transition-transform duration-300 ease-in-out
                        ${isMobileMenuOpen ? "translate-y-0 -z-10" : "-translate-y-full -z-10"} md:static md:z-10 md:w-min md:transform-none md:border-none`}
                    >
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4 md:py-0 md:mr-6">
                                <TransitionLink href={item.href} className="flex item-center">
                                    {item.name}
                                </TransitionLink>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Desktop Menu */}
                <div className="lg:block hidden">
                    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
                        {navItems.map((item, index) => (
                            <li key={index} className="flex items-center text-black-600 p-3">
                                <TransitionLink href={item.href} className="flex item-center">
                                    {item.name}
                                </TransitionLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export class NavBar {
}