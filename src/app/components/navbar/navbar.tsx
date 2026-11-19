'use client'

import { useCallback, useEffect, useState } from 'react';

const navItems = [
    { name: "Home", id: "Home" },
    { name: "Compétences", id: "Compétences" },
    { name: "Parcours", id: "Parcours" },
    { name: "Projets", id: "Projets" },
];

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    useEffect(() => {
        const targetSection = sessionStorage.getItem("targetSection");
        if (!targetSection) return;

        sessionStorage.removeItem("targetSection");
        const section = document.getElementById(targetSection);
        if (section) {
            setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 100);
        }
    }, []);

    // Scroll spy
    useEffect(() => {
        if (window.location.pathname !== "/") return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        );

        navItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Fallback haut / bas de page
        const onScroll = () => {
            if (window.scrollY < 50) {
                setActiveSection(navItems[0].id);
            } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
                setActiveSection(navItems[navItems.length - 1].id);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const scrollToSection = useCallback((sectionId: string) => {
        setIsMobileMenuOpen(false);

        if (window.location.pathname !== "/") {
            sessionStorage.setItem("targetSection", sectionId);
            window.location.href = "/";
            return;
        }
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const itemClass = (id: string) =>
        `cursor-pointer p-2 rounded-lg transition-colors duration-300 ${
            activeSection === id
                ? "text-white bg-primary font-bold"
                : "text-white hover:text-primary"
        }`;

    return (
        <div className="bg-background text-foreground card-shadow w-full fixed top-0 z-50">
            <nav className="bg-background max-w-10xl mx-auto p-6 flex items-center relative justify-between">
                <p className="text-lg font-bold lg:text-xl">© Fait par Strady Nathan</p>
                <button
                    className="relative md:hidden ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={toggleMobileMenu}
                    type="button"
                    aria-label="Ouvrir le menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>
                </button>

                <div className="md:hidden">
                    <ul
                        className={`bg-background w-full absolute top-full left-0 border-b -z-10 border-gray-200 flex flex-col items-center transition-transform duration-300 ease-in-out ${
                            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                    >
                        {navItems.map((item) => (
                            <li key={item.id} className="py-4">
                                <div onClick={() => scrollToSection(item.id)} className={itemClass(item.id)}>
                                    {item.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:block">
                    <ul className="flex flex-row gap-2">
                        {navItems.map((item) => (
                            <li key={item.id} className="flex items-center p-3">
                                <div onClick={() => scrollToSection(item.id)} className={itemClass(item.id)}>
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