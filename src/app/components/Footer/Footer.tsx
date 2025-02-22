import React from "react"
import {contact} from "./contactMe"

const Footer = () => {
    return (
        <footer className="bg-card">
            <div className="mx-auto w-full p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-3">
                        <span className="self-center text-[30px] font-bold whitespace-nowrap">Me contacter ? 📩</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 md:gap-2 md:grid-cols-3 text-start">
                    <div>
                        <h1 className="footer-subtitle">Téléphone</h1>
                        <ul className="font-medium text-[13px] md:text-[15px]">
                            <li> 06 16 37 62 30 </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="footer-subtitle">Email</h1>
                        <ul className="font-medium text-[13px] md:text-[15px]">
                            <li> nathan.strady.tra@gmail.com </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="footer-subtitle">Réseaux</h1>
                        <div className="flex flex-row gap-2">
                            {contact.map((contact, index) => (
                                <a
                                    className="icon-clickable"
                                    href={contact.link}
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img className="w-10 h-10" src={contact.src} alt={`${contact.name} icon`} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="border-gray-200 my-8" />
                <div className="flex flex-wrap justify-center font-semibold md:justify-end text-[15px] md:text-lg">
                    © Fait par Strady Nathan
                </div>
            </div>
        </footer>
    )
}

export default Footer;