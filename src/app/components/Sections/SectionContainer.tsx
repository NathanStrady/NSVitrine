import React from "react"

type Props = React.PropsWithChildren<{
    id: string
}>

const SectionContainer: React.FC<Props> = ({ children, id }) => {
    return (
        <section id={id} className="w-full relative flex justify-center z-30">
            {children}
        </section>
    );
};

export default SectionContainer;