import React from "react";
import TopBackground from "@/app/components/Presentation/TopBackground";
import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import UnityGame from "@/app/components/GameUnity/UnityGame";
import {commandsProjectSky} from "@/app/(navigation)/Commandes";
import {contentProjectSky} from "@/app/(navigation)/Contenu";
import Reveal from "@/app/components/Reveal/Reveal";


const ProjectSky = () => {
    return (
        <div className="relative overflow-clip" id="home">
            <TopBackground />
            <main className="flex flex-col gap-[160px] w-full md:max-w-screen-xl pt-[200px] md:pt-40 mx-auto">
                <SectionContainer id="detailed-projects">
                    <div className="flex flex-col">
                        <SectionHeader text={"Project"} highlightText={"Sky"}/>
                        <Reveal initialX={-60} delay={0.3}>
                            <div className="section-content p-3 space-y-5">
                                <div className="w-full card card-shadow p-6 cursor-pointer">
                                    <div className="py-6r">
                                        <UnityGame projectName="projectSky"/>
                                    </div>
                                </div>
                                <div className="w-full card card-shadow p-6">
                                    <h1 className="text-[25px] md:text-[36px] font-semibold">
                                        À propos
                                    </h1>
                                    <div className="py-4 text-justify text-[15px] md:text-[20px]">
                                        <p>
                                            Ce projet a été réalisé pendant mon temps libre. Mon idée était de créer un jeu de plateforme en 2D inspiré de <span className="font-bold">Super Meat Boy</span>.
                                        </p>
                                        <p>
                                            C&#8217;est dans cette optique que j&#8217;ai créé mon premier jeu tout en découvrant Unity. Mon objectif était de bien comprendre la physique du moteur, et j&#8217;ai donc mis l&#8217;accent sur la réalisation de déplacements fluides, en intégrant des éléments comme le Coyote Time, une sensation d&#8217;inertie, etc...
                                        </p>
                                        <p>
                                            En résumé, je pense que ce projet était un excellent point de départ pour apprendre Unity !
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                    {[
                                        { title: "Commandes", content: commandsProjectSky },
                                        { title: "Contenu", content: contentProjectSky },
                                    ].map((section, index) => (
                                        <div key={index} className="card card-shadow px-8 py-6 w-full">
                                            <h1 className="text-[25px] md:text-[36px] font-semibold">{section.title}</h1>
                                            <div className="py-3 text-justify text-[15px] md:text-[20px] space-y-3">
                                                {section.title === "Commandes" ? (
                                                    <ul className="space-y-2">
                                                        {section.content.map((item, i) => (
                                                            <li key={i}>
                                                                <span className="font-bold">{item.title} :</span> {item.desc}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    section.content.map((item, i) => (
                                                        <div key={i} className="space-y-1">
                                                            <h2 className="font-semibold text-lg">{item.title}</h2>
                                                            <p className="text-md">{item.desc}</p>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
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

export default ProjectSky;