import React from "react";
import SectionContainer from "@/app/components/Sections/SectionContainer";
import SectionHeader from "@/app/components/Sections/SectionHeader";
import { parcoursInfos} from "@/app/components/Parcours/parcoursInfos";
import {Card, CardBody, CardHeader} from "@heroui/card";

const parcours = () => {
    const cardClass = "bg-card h-full card-shadow text-foreground"
    const cardHeaderClass = "bg-primary text-2xl/1 text-center font-semibold block md:text-[16px] md:text-start md:inline"

    return (
        <SectionContainer id="parcours">
            <div>
                <SectionHeader text="Mon parcours" highlightText="Scolaire & Professionnel"/>
                <div className="card w-full px-[33px] py-[27px] grid grid-cols-1 auto-row-[150px] gap-5 p-36 md:grid-cols-2 rounded-lg card-shadow">
                    {parcoursInfos.map((item, i) => (
                        <div key={i} className={`${i === 0 || i === 1  ? 'md:col-span-1' : ''}`}>
                            <Card className={cardClass}>
                                <CardHeader className={cardHeaderClass}>
                                    {item.title}
                                </CardHeader>
                                <CardBody>
                                    {item.description}
                                </CardBody>
                            </Card>
                        </div>
                    ))}

                </div>
            </div>
        </SectionContainer>
    )
}

export default parcours;