import React from "react";

type TimelineItem = {
    title: string;
    description: string;
    date: string;
};

type Props = {
    items: TimelineItem[];
};

/* Venant de Mamba UI : https://mambaui.com/components/timeline */

const Timeline: React.FC<Props> = ({ items }) => {
    return (
        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-primary-300">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary-600">
                        <h3 className="text-lg md:text-xl font-semibold tracking-wide">{item.title}</h3>
                        <time className="text-xs tracking-wide uppercase dark:text-primary-600">{item.date}</time>
                        <p className="mt-3 text-sm md:text-base"> {item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline;