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
        <div>
            <nav className="block sm:flex md:justify-between md:flex md:items-center p-4 bg-primary text-primary-foreground z-[999]">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="font-bold text-lg">© Fait par Strady Nathan</p>

                    <div className="lg:hidden">
                        <button className="flex items-center" onClick={toggleMobileMenu} type="button">
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={`${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"} lg:hidden flex fixed w-full bg-primary top-[60px] left-0 transform transition duration-300 ease-in-out -z-10`}>
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

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
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
                </div>


            </nav>
        </div>
    );
};

export class NavBar {
}