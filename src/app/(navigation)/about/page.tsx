import {Card, CardBody, CardHeader} from "@heroui/card";
import Image from "next/image";
import {aboutMe} from "@/app/(navigation)/about/aboutMe"



const CardAboutMe = () => {

    const cardClass = "bg-card h-full card-shadow text-foreground"
    const cardHeaderClass = "bg-primary text-foreground font-bold"

    return (
        <div className="grid grid-cols-3 auto-row-[300px] gap-5 p-36">
            {aboutMe.map((item : any, i : number) => (
                <div key={i} className={`${i === 0 || i === 2  ? 'md:col-span-2' : ''} 
                 ${ i === 1  ? 'md:row-span-2' : ''}`}>
                    {item.image ? (
                        <Card className="bg-card">
                            <Image alt="Image description" src={item.image} fill className="object-cover" />
                        </Card>
                    ) : (
                        <Card className={cardClass}>
                            <CardHeader className={cardHeaderClass}>
                                {item.title}
                            </CardHeader>
                            <CardBody>
                                {item.description}
                            </CardBody>
                        </Card>
                    )}
                </div>
            ))}
        </div>
    );
};

const cardAboutSkills = () => {

};

const About = () => {
    return (
        <>
            <section className="h-screen flex items-center justify-center">
                <CardAboutMe />
            </section>

            <section className="h-screen flex items-center justify-center">

            </section>
        </>
    );
};

export default About;