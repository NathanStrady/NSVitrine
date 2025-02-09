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
            <nav className="block px-4 py-4 mx-auto bg-primary text-primary-foreground hadow-lg lg:px-8 backdrop-saturate-150 z-[999]">
                <div className="flex flex-wrap items-center justify-between mx-3">
                    <p className="font-bold text-lg">© Fait par Strady Nathan</p>
                    <div className="lg:hidden">
                        <button className="flex items-center text-black-600 p-3" onClick={toggleMobileMenu} type="button">
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`lg:hidden fixed top-full left-0 w-full bg-primary  shadow-md transform transition-all duration-300 ease-in-out overflow-hidden z-[100]
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 invisible'}`}>
                        <ul className="flex flex-col gap-4 ml-4">
                            {navItems.map((item, index) => (
                                <li key={index} className="flex items-center p-1 text-lg gap-x-2 text-primary-foreground">
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