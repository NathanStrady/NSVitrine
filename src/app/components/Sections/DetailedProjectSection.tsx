import React from "react"
import DetailedProjects from "@/app/components/Project/DetailedProjects";
import TopBackground from "@/app/components/Presentation/TopBackground";


const DetailedProjectSection = () => {
    return (
        <main className="flex flex-col gap-[160px] w-full md:max-w-screen-xl pt-[200px] md:pt-40 mx-auto">
            <DetailedProjects />
        </main>
    )
}

export default DetailedProjectSection;