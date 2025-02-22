import React from "react"
import Image from "next/image"
import {madeWith} from "./madeWith"
import Reveal from "@/app/components/Reveal/Reveal";

const Me = () => {
    return (
        <section className="relative flex flex-row items-center z-20 mx-auto md:gap-[37px]">
            <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
                <Reveal initialX={-25} >
                    <h1 className="text-2xl/1 text-center font-semibold block md:text-[35px] md:text-start md:inline">
                        Salutations ! Je me nomme Nathan Strady et j&#8217;aime {" "}
                        <span className="block text-[27px] highlight mt-2 md:text-[40px] md:inline md:mt-0"> Développer</span> :)
                    </h1>
                </Reveal>
                <Reveal initialX={-40} delay={0.4}>
                    <p className="text-center text-sm md:text-[20px] md:text-start md:mx-0 md:self-start">
                        Passionné par l&#8217;Informatique depuis le lycée, mon rêve est de développer mon propre jeu vidéo.
                    </p>
                </Reveal>
                <div className="rounded-lg p-2 w-full">
                    <Reveal delay={0.6}>
                        <h1 className="text-2xl/1 text-center font-semibold">
                            Ce site portfolio est fait avec :
                        </h1>
                    </Reveal>
                    <div className="flex flex-wrap justify-center items-center gap-[16px] md:gap-[37px]">
                        {madeWith.map((item, i) => (
                            <Reveal initialY={40} delay={i * 0.3} key={i}>
                                <div className="bg-primary md:block rounded-lg items-center">
                                    <Image
                                        src={item.src}
                                        alt="dev icons"
                                        width={128}
                                        height={128}
                                        className="p-[10px] md:block min-w-[128px] h-[128px]"
                                    />
                                </div>
                            </Reveal>
                        ))
                        }
                        <Reveal initialY={40} delay={1.2}>
                            <a className="infos-button flex font-normal p-2.5 gap-2.5" href="https://github.com/NathanStrady/NSVitrine/tree/master" target="_blank">
                                Voir le code Source <img className="w-8 h-8" src="/icons/github-outline-fill-icon.svg" alt="github-repo"/>
                            </a>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="group">
                <Reveal delay={1.5} >
                    <Image src="/profile_card_circle.png"
                           alt="Nathan Strady profile"
                           width={420}
                           height={430}
                           className="hidden md:block absolute w-[420px] h-[430px] top-12 right-6 -z-10 group-hover:scale-[110%] ease-in-out duration-300"
                    />
                    <Image src="/images/ns_photo.png"
                           alt="Nathan Strady profile"
                           width={400}
                           height={417}
                           className="hidden md:block rounded-full min-w-[400px] h-[417px] top-0 z-10 mr-[7.7px] my-[6.5px]
                           group-hover:scale-[110%] ease-in-out duration-300"
                    >
                    </Image>
                </Reveal>
            </div>
        </section>
    )
}

export default Me;