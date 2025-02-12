import React from "react"

const TopBackground = () => {
    return (
        <>
            <div className="absolute top-0 w-full h-[796px] bg-repeat-x bg-[url('/hexagons_light.png')] bg-[auto_auto] hidden dark:hidden md:block"/>
            <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/hexagons_light.png')] bg-[auto_auto] dark:hidden md:hidden"/>
            <div className="absolute top-0 w-full h-[796px] bg-repeat-x bg-[url('/hexagons_dark.png')] bg-[auto_auto] hidden md:dark:block"/>
            <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/hexagons_dark.png')] bg-[auto_auto] hidden dark:block dark:md:hidden"/>

        </>
    )
}

export default TopBackground;