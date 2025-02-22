import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import { skillsGroupsData } from "./skillsData"
import React from "react";
import SkillsGroups from "@/app/components/Skills/SkillsGroup";
import Reveal from "@/app/components/Reveal/Reveal";

const Skills = () => {
    return (
        <SectionContainer id="skills">
            <div className="flex flex-col">
                <SectionHeader text="Mes" highlightText="Compétences" />
                <div className="section-content p-2 space-y-5">
                    {skillsGroupsData.map((item, i) => (
                        <Reveal initialX={i % 2 === 0 ? -60 : 60} delay={i * 0.3} key={i}>
                            <SkillsGroups title={item.title} skills={item.skills} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </SectionContainer>
    )
}

export default Skills;