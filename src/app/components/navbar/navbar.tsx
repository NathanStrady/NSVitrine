'use client'

import {useCallback, useEffect, useState} from 'react';

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { name: "Home", id: "home" },
        { name: "Compétences", id: "skills" },
        { name: "Parcours", id: "parcours" },
        { name: "Projets", id: "projects" },
    ];

    useEffect(() => {
        setActiveSection("Home")
    }, [])

    const scrollToSection = useCallback(
        (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    }, [])

    return (
        <div className="bg-background text-foreground card-shadow w-full fixed top-0 z-50 md:relative">
            <nav className="bg-background max-w-10xl mx-auto p-6 flex items-center relative justify-between">
                <p className="text-lg font-bold lg:text-xl">© Fait par Strady Nathan</p>
                <button
                    className="relative md:hidden ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                    <ul className={`bg-background w-full absolute top-full left-0 border-b -z-10 border-gray-200 flex flex-col items-center transition-transform duration-300 ease-in-out
    ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
                    >
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4 md:py-0 md:mr-6">
                                <div
                                    onClick={() => {
                                        setActiveSection(item.name);
                                        scrollToSection(item.id);
                                    }}
                                    className={`cursor-pointer p-2 transition-colors duration-300 ${
                                        activeSection === item.name ? "text-white bg-primary rounded-lg font-bold" : "text-white hover:text-primary"
                                    }`}
                                >
                                    {item.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:block">
                    <ul className="flex flex-row gap-2">
                        {navItems.map((item, index) => (
                            <li key={index} className="flex items-center text-black-600 p-3">
                                <div
                                    onClick={() => {
                                        setActiveSection(item.name);
                                        scrollToSection(item.id);
                                    }}
                                    className={`cursor-pointer p-2 transition-colors duration-300 ${
                                        activeSection === item.name ? "text-white bg-primary rounded-lg font-bold" : "text-white hover:text-primary"
                                    }`}
                                >
                                    {item.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

