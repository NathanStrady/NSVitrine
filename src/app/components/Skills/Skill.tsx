import React from "react"

type Props = {
    icon: string;
    name: string;
};


const Skill = ({icon, name}: Props) => {
    return (
        <div className="relative h-16 gap-3 p-1 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-lg h-[60px] items-center">
            <div className="flex h-full w-full items-center justify-center bg-card p-2 gap-2">
                <img src={icon} alt={name + ' icon'} className="w-8 h-8" />
                <p className="text-2xl font-semibold ">{name}</p>
            </div>
        </div>
    );
};

export default Skill;