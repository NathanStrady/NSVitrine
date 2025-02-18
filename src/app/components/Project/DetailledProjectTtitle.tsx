import React from "react"

type Props = React.PropsWithChildren<{
    text: string;
    highlightText: string,
}>

const DetailedProjectTitle = ({ text, highlightText }: Props) => {
    return (
        <h2 className="text-[22px] md:text-[35px] font-bold px-20 text-center">
            {text} {" "} <span className="highlight px-2 whitespace-nowrap"> {highlightText} </span>
        </h2>
    );
};

export default DetailedProjectTitle;