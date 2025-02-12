import React from "react"
import Image from "next/image"
import {madeWith} from "./madeWith"

const Me = () => {
    return (
        <section className="relative flex flex-row items-center z-20 mx-auto md:gap-[37px]">
            <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
                <h1 className="text-2xl/1 text-center font-semibold block md:text-[35px] md:text-start md:inline">
                    Salutation ! Je me nomme Nathan Strady et j'aime {" "}
                    <span className="block text-[27px] highlight mt-2 md:text-[40px] md:inline md:mt-0"> Développer</span> :)
                </h1>
                <p className="text-center text-sm md:text-[20px] md:text-start md:mx-0 md:self-start">
                    Passionné par l'Informatique depuis le lycée, mon rêve est de développer mon propre jeu vidéo.
                </p>
                <div className="rounded-lg p-2 w-full">
                    <h1 className="text-2xl/1 text-center text-large font-semibold">
                        Ce site portfolio est fait avec :
                    </h1>
                    <div className="flex flex-wrap justify-center items-center gap-[16px] md:gap-[37px]">
                        {madeWith.map((item, i) => (
                            <div key={i} className="bg-primary md:block rounded-lg items-center">
                                <Image
                                    src={item.src}
                                    alt="dev icons"
                                    width={128}
                                    height={128}
                                    className="p-[10px] md:block min-w-[128px] h-[128px]"
                                />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <Image src="/profile_card_circle.png"
                       alt="Nathan Strady profile"
                       width={420}
                       height={430}
                       className="hidden md:block absolute w-[420px] h-[430px] top-2 right-6 -z-10"
                />
                <Image src="/images/ns_photo.png"
                       alt="Nathan Strady profile"
                       width={400}
                       height={417}
                       className="hidden md:block rounded-full min-w-[400px] h-[417px] top-0 z-10 mr-[7.7px] my-[6.5px]"
                >
                </Image>
            </div>
        </section>
    )
}

export default Me;