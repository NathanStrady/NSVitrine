import React from "react";
import TopBackground from "@/app/components/Presentation/TopBackground";
import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import {secomImages} from "@/app/(navigation)/Secom/secomImages";
import Reveal from "@/app/components/Reveal/Reveal";
const Secom = () => {
    return (
        <div className="relative overflow-clip" id="home">
            <TopBackground />
            <main className="flex flex-col gap-[160px] w-full md:max-w-screen-xl pt-[200px] md:pt-40 mx-auto">
                <SectionContainer id="detailed-projects">
                    <div className="flex flex-col">
                        <SectionHeader text={"Alternance"} highlightText={"SECOM"}/>
                        <Reveal initialX={-60} delay={0.3}>
                            <div className="section-content p-2 space-y-2">
                                <div className="px-8 py-6 w-full card card-shadow">
                                    <img src="/images/Secom.PNG" alt="secom image"
                                         className="w-full object-cover rounded-lg"/>
                                </div>
                                <div className="w-full card card-shadow p-6">
                                    <h1 className="text-[25px] md:text-[36px] font-semibold">
                                        À propos
                                    </h1>
                                    <div className="py-4 text-justify text-[15px] md:text-[20px]">
                                        <p>
                                            SECOM, projet réalisé durant mon Alternance en 3ème année de BUT Informatique,
                                            est un site web
                                            servant de boîte à outils pour le site de SKF Valenciennes.
                                        </p>
                                        <p>
                                            Elle permet de faire de nombreuses opérations comme :
                                        </p>
                                        <ul className="list-disc pl-10">
                                            <li>Créer différentes fiches (suivi, non-conformités, etc.).</li>
                                            <li>Centraliser les informations entre les services.</li>
                                            <li>Afficher efficacement les données de l&#8217;ERP.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                    {secomImages.map((items, i) => (
                                        <div className="p-3 card card-shadow" key={i}>
                                            <img src={items.src} alt={'secom ' + i}
                                                 className="w-full object-cover rounded-lg"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </SectionContainer>
            </main>
        </div>
    );
};

export default Secom;