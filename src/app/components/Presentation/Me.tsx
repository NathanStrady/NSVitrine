import React from "react"
import Image from "next/image"
import {madeWith} from "./madeWith"
import Reveal from "@/app/components/Reveal/Reveal";
import {content} from "@/content"

const t = content.me

const Me = () => {
    return (
        <section className="relative flex flex-row items-center z-20 mx-auto md:gap-[37px]">
            <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
                <Reveal initialX={-25}>
                    <h1 className="text-2xl/tight text-center font-semibold block md:text-[35px] md:text-start md:inline">
                        {t.titleIntro}{" "}
                        <span className="block text-[27px] highlight mt-2 md:text-[40px] md:inline md:mt-0">{t.titleHighlight}</span> :)
                    </h1>
                </Reveal>
                <Reveal initialX={-40} delay={0.4}>
                    <p className="text-center text-sm md:text-[20px] md:text-start md:mx-0 md:self-start">
                        {t.subtitle}
                    </p>
                </Reveal>
                <div className="rounded-lg p-2 w-full">
                    <Reveal delay={0.6}>
                        <h2 className="text-2xl/tight text-center font-semibold">
                            {t.madeWithTitle}
                        </h2>
                    </Reveal>
                    <div className="flex flex-wrap justify-center items-center gap-[16px] md:gap-[37px]">
                        {madeWith.map((item, i) => (
                            <Reveal initialY={40} delay={i * 0.3} key={item.src}>
                                <div className="bg-primary rounded-lg">
                                    <Image
                                        src={item.src}
                                        alt={item.src}
                                        width={128}
                                        height={128}
                                        className="p-[10px] min-w-[128px] h-[128px]"
                                    />
                                </div>
                            </Reveal>
                        ))}
                        <Reveal initialY={40} delay={madeWith.length * 0.3}>
                            <a
                                className="infos-button flex font-normal p-2.5 gap-2.5"
                                href="https://github.com/NathanStrady/NSVitrine/tree/main"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.sourceCode}
                                <Image className="w-8 h-8" src="/icons/git-vcs-color.svg" alt="" width={32} height={32} />
                            </a>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="hidden md:block shrink-0">
                <Reveal delay={1.5}>
                    <div className="relative md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[417px] ease-in-out duration-300 hover:scale-110">
                        <Image
                            src="/profile_card_circle.png"
                            alt=""
                            width={420}
                            height={430}
                            priority
                            className="absolute bottom-12 right-12 md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[430px] -z-10"
                        />
                        <Image
                            src="/images/ns_rubika.jpg"
                            alt={t.photoAlt}
                            width={400}
                            height={417}
                            priority
                            className="relative rounded-full object-cover md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[417px] mr-[7.7px] my-[6.5px]"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Me;