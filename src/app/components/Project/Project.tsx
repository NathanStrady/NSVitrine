import React from "react"
import Skill, { SkillProps } from "@/app/components/Skills/Skill";

export type Project = {
    title: string;
    description: string;
    media: string;
    mediaType: "video" | "image" | "";
    skills: SkillProps[];
    knowMore: string;
};

const ProjectCard = ({title, description, media, mediaType, skills, knowMore}: Project) => {
    return (
        <div className="px-8 py-6 w-full card card-shadow space-y-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h2 className="projects-section-title">{title}</h2>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <Skill key={skill.name} {...skill} />
                    ))}
                </div>
            </div>

            {media && (
                <div className="py-6">
                    {mediaType === "video" ? (
                        <video controls className="w-full rounded-lg">
                            <source src={media} />
                            Votre navigateur ne supporte pas la lecture des vidéos.
                        </video>
                    ) : (
                        <img src={media} alt={title} className="w-full object-cover rounded-lg" />
                    )}
                </div>
            )}

            <div className="space-y-2">
                {description && (
                    <div className="text-justify text-[15px] md:text-[20px] md:text-start md:mx-0 md:self-start">
                        {description}
                    </div>
                )}
                {knowMore && (
                    <div className="flex justify-end pt-5">
                        <a href={knowMore} className="infos-button flex items-center font-normal p-2.5 gap-2.5">
                            En savoir plus
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;