import React from "react"
import Me from "@/app/components/Presentation/Me";
import Parcours from "@/app/components/Parcours/Parcours";

const Sections = () => {
    return (
        <main className="flex flex-col gap-[160px] w-full md:max-w-screen-xl pt-[200px] md:pt-40 mx-auto">
            <Me/>
            <Parcours />
        </main>
    )
}

export default Sections;