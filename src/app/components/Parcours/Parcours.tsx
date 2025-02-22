import React from "react";
import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import {ParcoursPros, ParcoursAcademique} from "@/app/components/Parcours/parcoursInfos";
import Timeline from "@/app/components/Timeline/Timeline";
import Reveal from "@/app/components/Reveal/Reveal";

const parcours = () => {
    return (
        <SectionContainer id="parcours">
            <div className="flex flex-col">
                <SectionHeader text="Mon parcours" highlightText="Académique & Professionnel"/>
                <Reveal initialY={40} delay={0.7}>
                    <div className="p-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="px-8 py-6 w-full card card-shadow space-y-3">
                            <h1 className="text-[22px] md:text-[30px] text-start font-semibold">
                                🎓 {" "} Parcours <span className="highlight">Académique : </span>
                            </h1>
                            <Timeline items={ParcoursAcademique} />
                        </div>
                        <div className="px-8 py-6 w-full card card-shadow space-y-3">
                            <h1 className="text-[22px] md:text-[30px] text-start font-semibold">
                                💼 {" "} Parcours  <span className="highlight">Professionnel : </span>
                            </h1>
                            <Timeline items={ParcoursPros} />
                        </div>
                    </div>
                </Reveal>
            </div>
        </SectionContainer>
    )
}

export default parcours;