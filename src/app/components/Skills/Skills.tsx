import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import Skill from "@/app/components/Skills/Skill";
import React from "react";
import { tools, hardSkills, softSkills } from "@/app/components/Skills/skillsData";

const Skills = () => {
    return (
        <SectionContainer id="skills">
            <div className="flex flex-col">
                <SectionHeader text="Mes" highlightText="Compétences" />
                <div className="section-content p-2 space-y-5">
                    <div className="px-8 py-6 card card-shadow">
                        <h1 className="skills-section-title">Hard-Skills</h1>
                        <div className="skills-section-row">
                            {hardSkills.map((h_skill, id) => (
                                <Skill key={id} icon={h_skill.icon} name={h_skill.text} />
                            ))}
                        </div>
                    </div>

                    <div className="px-8 py-6 card card-shadow">
                        <h1 className="skills-section-title">Soft-Skills</h1>
                        <div className="skills-section-row">
                            {softSkills.map((s_skill, id) => (
                                <Skill key={id} icon={s_skill.icon} name={s_skill.text} />
                            ))}
                        </div>
                    </div>

                    <div className="px-8 py-6 card card-shadow">
                        <h1 className="skills-section-title">Outils Utilisés</h1>
                        <div className="skills-section-row">
                            {tools.map((tool, id) => (
                                <Skill key={id} icon={tool.icon} name={tool.text} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Skills;