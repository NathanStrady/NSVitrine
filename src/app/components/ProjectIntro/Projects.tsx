import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import React from "react";
import Skill from "@/app/components/Skills/Skill";

const projects = () => {
    return (
        <SectionContainer id="projects">
            <div>
                <SectionHeader text="Mes projets en " highlightText="Dev"/>
                <div className="section-content p-2 space-y-2">
                    <div className="px-8 py-6 w-full card card-shadow space-y-3">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                            <h1 className="projects-section-title">Super Island</h1>
                            <div className="flex flex-row gap-5">
                                <Skill icon="/icons/unity-icon.svg" name="Unity" />
                                <Skill icon="/icons/csharp-icon.svg" name="C#" />
                            </div>
                        </div>
                        <div className="py-6">
                            <video controls className="w-full">
                                <source src="/videos/Démonstration_super_island.mkv"/>
                            </video>
                        </div>
                        <div className="space-y-2">
                            <div className="text-justify text-sm md:text-[20px] md:text-start md:mx-0 md:self-start">
                                Ce jeu fut développé dans le cadre de mes études en BUT Informatique à l'IUT de Maubeuge, faisant office de projet pour le 5ème Semestre.
                                Nous étions deux à le développer et nous avons utilisés en majorité des assets gratuits pour le réaliser.
                            </div>
                            <div className="text-end pt-5">
                                <button className="button">
                                    En savoir plus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default projects;