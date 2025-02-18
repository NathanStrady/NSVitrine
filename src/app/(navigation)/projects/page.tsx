import React from "react";
import TopBackground from "@/app/components/Presentation/TopBackground";
import DetailedProjectSection from "@/app/components/Sections/DetailedProjectSection";


const About = () => {
    return (
        <div className="relative overflow-clip" id="home">
            <TopBackground />
            <DetailedProjectSection />
        </div>
    );
};

export default About;