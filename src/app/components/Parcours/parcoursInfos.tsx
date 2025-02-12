import React from "react";

export const parcoursInfos = [
    {
        title: 'Mes diplômes & Formation en cours 🎓',
        description: (
            <div className="flex flex-col items-center space-y-10">
                <div>
                    <h1 className="text-center font-semibold text-[16px] md:text-[24px] md:inline">
                        Ma formation actuelle
                    </h1>
                    <div>
                        <h1 className="text-start font-semibold block md:text-[16px] md:text-center md:inline">
                            Bac Général - Mention Assez Bien - Lycée Alfred Kastler à Denain
                        </h1>
                        <p className="text-sm block md:mt-1">
                            Spécialité : Mathématique et Numérique et Sciences de l’Informatique
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-center font-semibold text-[16px] block md:text-[24px] md:inline">
                        Mes Diplômes
                    </h1>
                    <ul className="space-y-2">
                        <li>
                            <h1 className="text-start font-semibold block md:text-[16px] md:text-center md:inline">
                                Bac Général - Mention Assez Bien - Lycée Alfred Kastler à Denain
                            </h1>
                            <p className="text-sm block md:mt-1">
                                Spécialité : Mathématique et Numérique et Sciences de l’Informatique
                            </p>
                        </li>
                        <li>
                            <h1 className="text-start font-semibold block md:text-[16px] md:text-center md:inline">
                                Brevet des Collèges - Mention Très Bien - Collège Bayard à Denain
                            </h1>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: 'Expériences professionnelles 💼',
        description: (
            <div className="flex flex-col items-center">
                <ul className="space-y-8">
                    <li>
                        <h1 className="text-start font-semibold block md:text-[16px] md:text-center md:inline">
                            Alternant (Septembre 2024 à Juillet 2025)
                        </h1>
                        <p className="text-sm block md:mt-1">
                            SKF Aeroengine Valenciennes - Service Informatique - Migration d'application Logiciel vers une application Web
                        </p>
                    </li>
                    <li>
                        <h1 className="text-start font-semibold block md:text-[16px] md:text-center md:inline">
                            Intérimaire (Juillet à Août 2024)
                        </h1>
                        <p className="text-sm block md:mt-1">
                            SKF Aeroengine Valenciennes - Service Informatique - Migration d'application Logiciel vers une application Web
                        </p>
                    </li>
                    <li>
                        <h1 className="text-start font-semibold block md:text-[16px] md:text-center md:inline">
                            Stagiaire (Avril à Juin 2024)
                        </h1>
                        <p className="text-sm block md:mt-1">
                            SKF Aeroengine Valenciennes - Service Informatique - Projet Power BI
                        </p>
                    </li>
                </ul>
            </div>
        )
    },
]