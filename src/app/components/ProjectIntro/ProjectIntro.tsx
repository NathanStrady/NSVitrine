import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import React from "react";

const projectIntro = () => {
    return (
        <SectionContainer id="projects">
            <div>
                <SectionHeader text="Mes projets en " highlightText="Dev"/>
            </div>
        </SectionContainer>
    )
}

export default projectIntro;