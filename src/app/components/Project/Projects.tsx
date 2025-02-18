import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import Project from "./Project";
import {projectsData} from "./projectsData"
import React from "react";

const projects = () => {
    return (
        <SectionContainer id="projects">
            <div className="flex flex-col">
                <SectionHeader text="Mes projets en " highlightText="Dev"/>
                <div className="section-content p-2 space-y-2">
                    {projectsData.map((project, i) => (
                        <Project key={i} title={project.title} description={project.description} skills={project.skills} media={project.media} knowMore={project.knowMore} mediaType={project.mediaType} />
                    ))}
                </div>
            </div>
        </SectionContainer>
    )
}

export default projects;