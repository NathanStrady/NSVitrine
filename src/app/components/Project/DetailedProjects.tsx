import React from "react"
import SectionHeader from "@/app/components/Sections/SectionHeader";
import SectionContainer from "@/app/components/Sections/SectionContainer";
import DetailedProjectTitle from "@/app/components/Project/DetailledProjectTtitle";
import DetailedProject from "@/app/components/Project/DetailedProject";

const DetailedProjects = () => {
    return (
        <SectionContainer id="detailed-projects">
            <div className="flex flex-col">
                <SectionHeader text={"Mes projets de dev"} highlightText={"En Détails"}/>
                <div className="section-content p-2 space-y-2">
                    <DetailedProjectTitle text={"Project"} highlightText={"Sky"}/>
                    <DetailedProject/>
                </div>
            </div>
        </SectionContainer>
    )
}

export default DetailedProjects;