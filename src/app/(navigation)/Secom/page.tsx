import React from "react";
import TopBackground from "@/app/components/Presentation/TopBackground";
import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import UnityGame from "@/app/components/GameUnity/UnityGame";
const Secom = () => {
    return (
        <div className="relative overflow-clip" id="home">
            <TopBackground />
            <main className="flex flex-col gap-[160px] w-full md:max-w-screen-xl pt-[200px] md:pt-40 mx-auto">
                <SectionContainer id="detailed-projects">
                    <div className="flex flex-col">
                        <SectionHeader text={"Alternance"} highlightText={"SECOM"}/>
                        <div className="section-content p-2 space-y-2">
                            <div className="px-8 py-6 w-full card card-shadow">
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </main>
        </div>
    );
};

export default Secom;