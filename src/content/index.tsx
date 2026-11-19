import { fr } from "./fr"
import { en } from "./en"

export type { Dictionary } from "./types"

const dictionaries = { fr, en }
export type Lang = keyof typeof dictionaries

const isLang = (value: string | undefined): value is Lang =>
    value !== undefined && value in dictionaries

export const CURRENT_LANG: Lang = isLang(process.env.NEXT_PUBLIC_LANG)
    ? process.env.NEXT_PUBLIC_LANG
    : "fr"

export const content = dictionaries[CURRENT_LANG]