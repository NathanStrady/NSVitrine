import {Card, CardBody, CardHeader} from "@heroui/card";
import Image from "next/image";
import me from "@/assets/ns_photo.png"

// Correction du nom du composant (majuscule)
const CardAboutMe = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-4 lg:max-h-[24rem]
    md:grid-cols-2 md:grid-rows-2 md:gap-4 md:max-h-[20rem]
    sm:grid-cols-1 sm:grid-rows-1 sm:gap-3 sm:max-h-[14rem]">

                <div className="lg:col-span-1 lg:row-span-3 md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-1">
                    <Card className="shadow-lg h-full">
                        <Image alt="me" className="object-cover w-full" src={me} />
                    </Card>
                </div>

                <div className="lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1">
                    <Card className="shadow-lg">
                        <CardHeader className="flex gap-3">
                            <p className="text-lg font-bold">Qui suis-je ?</p>
                        </CardHeader>
                        <CardBody>
                            <p>Je m'appelle Strady Nathan</p>
                        </CardBody>
                    </Card>
                </div>

                <div className="lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1">
                    <Card className="shadow-lg h-full">
                        <CardHeader className="flex gap-3">
                            <p className="text-lg font-bold">Description</p>
                        </CardHeader>
                        <CardBody className="overflow-y-auto px-4">
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <>
            <section>
                <CardAboutMe />
            </section>

            <section >
            </section>
        </>
    );
};

export default About;