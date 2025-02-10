import {Card, CardBody, CardHeader} from "@heroui/card";
import Image from "next/image";
import me from "@/assets/ns_photo.png"
import {aboutMe} from "@/app/(navigation)/about/aboutMe"



const CardAboutMe = () => {

    const cardClass = "h-full"
    const cardHeaderClass = "bg-primary text-secondary-foreground font-bold"

    return (
        <div className="grid grid-cols-3 auto-row-[300px] gap-5 p-36">
            {aboutMe.map((item : any, i : number) => (
                <div key={i} className={`${i === 1 ? 'md:col-span-2' : ''} 
                 ${i === 0  ? 'md:row-span-2' : ''}`}>
                    {item.image ? (
                        <Card>
                            <Image alt="Image description" src={item.image} className="w-full h-full object-cover" />
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
            <section className="bg-secondary h-screen flex items-center justify-center">
                <CardAboutMe />
            </section>

            <section className="bg-primary h-screen flex items-center justify-center">

            </section>
        </>
    );
};

export default About;