import React from "react"
import Image from "next/image"

export type SkillProps = {
    icon: string;
    name: string;
};


const Skill = ({icon, name}: SkillProps) => {
    return (
        <div className="h-full p-1 bg-gradient-to-r from-primary to-secondary rounded-lg zoom-animation">
            <div className="flex h-full w-full items-center justify-center bg-card rounded-md p-2 gap-2">
                <Image
                    src={icon}
                    alt=""
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10"
                />
                <p className="text-xl md:text-2xl font-semibold">{name}</p>
            </div>
        </div>
    );
};

export default Skill;