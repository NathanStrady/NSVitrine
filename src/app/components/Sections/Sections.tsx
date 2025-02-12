import React from "react"
import Me from "@/app/components/Presentation/Me";
import Parcours from "@/app/components/Parcours/Parcours";
import ProjectIntro from "@/app/components/ProjectIntro/ProjectIntro";
import Skills from "@/app/components/Skills/Skills";

const Sections = () => {
    return (
        <main className="flex flex-col gap-[160px] w-full md:max-w-screen-xl pt-[200px] md:pt-40 mx-auto">
            <Me/>
            <Parcours />
            <Skills />
            <ProjectIntro/>
        </main>
    )
}

export default Sections;