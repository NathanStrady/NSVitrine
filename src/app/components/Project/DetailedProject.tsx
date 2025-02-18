import React from "react"
import UnityGame from "@/app/components/GameUnity/UnityGame";

const DetailedProject = () => {
    return (
        <div className="px-8 py-6 w-full card card-shadow space-y-3">
            <div className="py-10">
                <UnityGame projectName="superIsland"/>
            </div>
        </div>
    )
}

export default DetailedProject;
