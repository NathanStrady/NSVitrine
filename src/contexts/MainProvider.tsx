'use client'

import * as React from 'react'

import { HeroUIProvider} from "@heroui/react";
import {PropsWithChildren, useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function MainProvider({children}: PropsWithChildren) {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null;

    return <HeroUIProvider navigate={router.push}>
            {children}
    </HeroUIProvider>;
}