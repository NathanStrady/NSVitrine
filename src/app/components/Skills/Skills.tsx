import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import React from "react";

const Skills = () => {
    return (
        <SectionContainer id="skills">
            <div className="flex flex-col space-y-10"  >
                <SectionHeader text="Mes" highlightText="Compétences"/>
                <div className="card p-10 ">
                    <div className="items-center space-y-20">
                        <h1 className="text-start font-semibold text-[20px] md:text-[35px] md:inline">
                            Outils maîtrisés
                        </h1>
                        <div className="flex flex-wrap items-center bg-primary w-full">
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="text-start font-semibold text-[20px] md:text-[35px] md:inline">
                            Hard-Skills
                        </h1>
                        <div className="flex flex-wrap items-center bg-primary w-full">

                        </div>
                    </div>
                    <div className="flex flex-col items-start space-y-10">
                        <h1 className="text-start font-semibold text-[20px] md:text-[35px] md:inline">
                            Soft-Skills
                        </h1>
                        <div className="flex flex-wrap items-center bg-primary w-full">

                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Skills;