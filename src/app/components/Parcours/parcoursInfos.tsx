import { content } from "@/content"

export type ParcoursItem = {
    title: string;
    description: string;
    date: string;
    logo?: string;
};

const t = content.parcours

export const ParcoursAcademique: ParcoursItem[] = [
    { ...t.academic.rubika, logo: "/images/rubika.png" },
    { ...t.academic.but, logo: "/images/uphf.png" },
    { ...t.academic.bac },
]

export const ParcoursPros: ParcoursItem[] = [
    { ...t.pro.skfApprentice, logo: "/images/skf.png" },
    { ...t.pro.skfTemp, logo: "/images/skf.png" },
    { ...t.pro.skfIntern, logo: "/images/skf.png" },
]