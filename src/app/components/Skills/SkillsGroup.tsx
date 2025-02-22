import React from "react"
import Skill from "@/app/components/Skills/Skill";

type SkillType = {
    icon: string;
    name: string;
};

type Props = {
    title: string;
    skills: SkillType[];
};

const SkillsGroups: React.FC<Props> = ({ title, skills }) => {
    return (
        <div className="px-8 py-6 card card-shadow">
            <h1 className="skills-section-title">{title}</h1>
            <div className="skills-section-row">
                {skills.map((h_skill, id) => (
                    <Skill key={id} icon={h_skill.icon} name={h_skill.name} />
                ))}
            </div>
        </div>
    );
};

export default SkillsGroups;