import React from "react"
import Me from "@/app/components/Presentation/Me";
import Parcours from "@/app/components/Parcours/Parcours";
import ProjectIntro from "@/app/components/Project/Projects";
import Skills from "@/app/components/Skills/Skills";

const Sections = () => {
    return (
        <main className="flex flex-col gap-32 md:gap-48 lg:gap-64 w-full max-w-screen-xl mx-auto px-6 md:px-10 lg:px-12 pt-[200px] md:pt-48 pb-32 md:pb-48">
            <Me />
            <Skills />
            <Parcours />
            <ProjectIntro />
        </main>
    )
}

export default Sections;