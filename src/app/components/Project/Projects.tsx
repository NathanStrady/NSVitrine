import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import Project from "./Project";
import {projectsData} from "./projectsData"
import React from "react";
import Reveal from "@/app/components/Reveal/Reveal";

const projects = () => {
    return (
        <SectionContainer id="Projets">
            <div className="flex flex-col">
                <SectionHeader text="Mes projets en " highlightText="Dev"/>
                <div className="section-content p-2 space-y-2">
                    {projectsData.map((project, i) => (
                        <Reveal initialX={i % 2 === 0 ? -60 : 60} delay={i * 0.3} key={i}>
                            <Project title={project.title} description={project.description} skills={project.skills} media={project.media} knowMore={project.knowMore} mediaType={project.mediaType} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </SectionContainer>
    )
}

export default projects;