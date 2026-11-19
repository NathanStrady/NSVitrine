type ParcoursText = {
    title: string
    description: string
    date: string
}

export type Dictionary = {

    meta: {
        title: string
        description: string
    },
    me: {
        titleIntro: string
        titleHighlight: string
        subtitle: string
        madeWithTitle: string
        sourceCode: string
        photoAlt: string
    },
    projects: {
        descriptions: {
            superIsland: string
            secom: string
        }
    },
    parcours: {
        academic: {
            rubika: ParcoursText
            but: ParcoursText
            bac: ParcoursText
        }
        pro: {
            skfApprentice: ParcoursText
            skfTemp: ParcoursText
            skfIntern: ParcoursText
        }
    },
    skills: {
        architecture: string
        systems: string
        teamwork: string
        fastLearner: string
        autonomy: string
        curious: string
    },
    footer: {
        title: string
        phone: string
        email: string
        socials: string
        copyright: (year: number) => string
    }
}