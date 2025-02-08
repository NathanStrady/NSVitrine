'use client'

import { useState } from 'react';
import {TransitionLink} from "@/components/utils/TransitionLink";
import {Divider} from "@heroui/divider";
import Link from "next/link";


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Strady Nathan
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <TransitionLink href="/" className="px-4 py-2 hover:bg-white hover:text-black rounded-3xl">
                        Home
                    </TransitionLink>
                    <TransitionLink href="/about" className="px-4 py-2 hover:bg-white hover:text-black rounded-3xl">
                        À propos de moi
                    </TransitionLink>
                    <TransitionLink href="/projects" className="px-4 py-2 hover:bg-white hover:text-black rounded-3xl">
                        Mes projets
                    </TransitionLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-2 bg-gray-700 p-4 rounded-lg">
                    <TransitionLink href="/" className="px-4 py-2 hover:bg-white hover:text-black rounded-3xl">
                        Home
                    </TransitionLink>
                    <TransitionLink href="/about" className="px-4 py-2 hover:bg-white hover:text-black rounded-3xl">
                        À propos de moi
                    </TransitionLink>
                    <TransitionLink href="/projects" className="px-4 py-2 hover:bg-white hover:text-black rounded-3xl">
                        Mes projets
                    </TransitionLink>
                </div>
            )}
        </nav>
    );
};

export class NavBar {
}