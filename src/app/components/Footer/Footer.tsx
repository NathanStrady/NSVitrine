import React from "react"
import {contact} from "./contactMe"

const PHONE_DISPLAY = "06 16 37 62 30"
const PHONE_HREF = "tel:+33616376230"
const EMAIL = "nathan.strady.tra@gmail.com"

const Footer = () => {
    return (
        <footer className="bg-card w-full">
            <div className="w-full px-6 md:px-10 lg:px-12 py-8 lg:py-12">
                <h2 className="mb-6 text-[30px] font-bold whitespace-nowrap">Me contacter 📩</h2>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 text-start">
                    <div>
                        <h3 className="footer-subtitle">Téléphone</h3>
                        <a href={PHONE_HREF} className="block font-medium text-[13px] md:text-[15px] hover:underline">
                            {PHONE_DISPLAY}
                        </a>
                    </div>

                    <div className="min-w-0">
                        <h3 className="footer-subtitle">Email</h3>
                        <a href={`mailto:${EMAIL}`} className="block font-medium text-[13px] md:text-[15px] break-all hover:underline">
                            {EMAIL}
                        </a>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h3 className="footer-subtitle">Réseaux</h3>
                        <div className="flex flex-row gap-2">
                            {contact.map((item) => (
                                <a
                                    className="icon-clickable"
                                    href={item.link}
                                    key={item.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                >
                                    <img className="w-10 h-10" src={item.src} alt="" width={40} height={40} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="border-gray-200 my-8" />

                <p className="flex flex-wrap justify-center font-semibold md:justify-end text-[15px] md:text-lg">
                    © {new Date().getFullYear()} Fait par Strady Nathan
                </p>
            </div>
        </footer>
    )
}

export default Footer;