import React from "react";
import TopBackground from "@/app/components/Presentation/TopBackground";
import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import { commandsSuperIsland } from "@/app/(navigation)/Commandes";
import { contentSuperIsland } from "@/app/(navigation)/Contenu";
import UnityGame from "@/app/components/GameUnity/UnityGame";


const SuperIsland = () => {
    return (
        <div className="relative overflow-clip" id="home">
            <TopBackground />
            <main className="flex flex-col gap-[160px] w-full md:max-w-screen-xl pt-[200px] md:pt-40 mx-auto">
                <SectionContainer id="detailed-projects">
                    <div className="flex flex-col">
                        <SectionHeader text={"Super"} highlightText={"Island"}/>
                        <div className="section-content p-3 space-y-5">
                            <div className="w-full card card-shadow p-6">
                                <div className="py-6">
                                    <UnityGame projectName="superIsland" />
                                </div>
                            </div>
                            <div className="w-full card card-shadow p-6">
                                <h1 className="text-[25px] md:text-[36px] font-semibold">
                                    À propos
                                </h1>
                                <div className="py-4 text-justify text-[15px] md:text-[20px]">
                                    <p>
                                        Ce projet a été réalisé dans le cadre de mes cours en BUT Informatique, spécifiquement sur la programmation 3D. Nous étions deux à développer ce jeu en seulement 3 semaines. Bien que tout ne soit pas parfait, nous sommes fiers du résultat.
                                    </p>
                                    <p>
                                        L'objectif était de créer un jeu de plateforme en 3D avec des ennemis et des collectibles. Vous pouvez l'essayer par vous-même juste au-dessus !
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                {[
                                    { title: "Commandes", content: commandsSuperIsland },
                                    { title: "Contenu", content: contentSuperIsland },
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
                    </div>
                </SectionContainer>
            </main>
        </div>
    );
};

export default SuperIsland;