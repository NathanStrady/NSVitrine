import React from "react"
import Skill from "@/app/components/Skills/Skill";

type Skill = {
    name: string;
    icon: string;
};

type Props = {
    title: string;
    description: string;
    media: string;
    mediaType: "video" | "image";
    skills: Array<Skill>;
    knowMore: string;
};

const Project = ({title, description, media, mediaType, skills, knowMore}: Props) => {

    return (
        <div className="px-8 py-6 w-full card card-shadow space-y-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h1 className="projects-section-title">{title}</h1>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, i) => (
                        <Skill key={i} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
            <div className="py-6">
                {mediaType === "video" ? (
                    <video controls className="w-full">
                        <source src={media} />
                        Votre navigateur ne supporte pas la lecture des vidéos.
                    </video>
                ) : (
                    <img src={media} alt={media + 'icon'} className="w-full object-cover rounded-lg" />
                )}
            </div>
            <div className="space-y-2">
                <div className="text-justify text-[15px] md:text-[20px] md:text-start md:mx-0 md:self-start">
                    {description}
                </div>
                <div className="flex justify-end pt-5">
                    <a href={knowMore} className="infos-button flex items-center font-normal p-2.5 gap-2.5" target="_blank" rel="noopener noreferrer">
                        En savoir plus
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;