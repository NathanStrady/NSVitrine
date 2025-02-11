import React from "react"
import Image from "next/image"

const Me = () => {
    return (
        <section className="relative flex flex-row items-center z-20 mx-auto">
            <div className="flex flex-col gap-[10px] items-center">
                <h1 className="text-2xl/1 text-center text-large font-semibold block">
                    Bonjour, je m'appelle Nathan Strady
                </h1>
                <p className="text-center text-sm">
                    Passionné par l'Informatique depuis le lycée, mon rêve est de développer mon propre jeu vidéo.
                </p>
            </div>
            <div className="pl-[20px]">
                <Image
                    src="/images/ns_photo.png"
                    alt="Nathan Strady profile"
                    width={400}
                    height={400}
                    layout="intrinsic"
                    className="profile-icon md:block hidden min-w-[400px] h-[400px] z-10 mr-[7.7px] my-[6.5px]"
                />
            </div>
        </section>
    )
}

export default Me;