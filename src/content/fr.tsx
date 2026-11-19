import type { Dictionary } from "./types"

export const fr: Dictionary = {
    meta: {
        title: "Strady Nathan",
        description: "Portfolio de Strady Nathan",
    },
    skills: {
        architecture: "Architecture de Code",
        systems: "Systèmes",
        teamwork: "Esprit d'équipe",
        fastLearner: "Apprend Vite",
        autonomy: "Autodidacte",
        curious: "Curieux",
    },
    projects: {
        descriptions: {
            superIsland:
                "Projet réalisé en équipe de deux dans le cadre du semestre 5 du BUT Informatique. L’objectif était de développer un jeu de plateforme 3D fonctionnel, intégrant des collectibles et des ennemis.\n" +
                "Étant limités en effectif, nous avons opté pour l’utilisation d’assets gratuits afin de constituer la partie graphique du jeu.",
            secom:
                "Application web développée pour le site de SKF Aeroengine Valenciennes. Ce projet, réalisé dans le cadre de mon alternance, avait pour objectif de simplifier les processus de l’usine en centralisant les données issues de l’ERP utilisé par l’entreprise.",
        },
    },
    parcours: {
        academic: {
            rubika: {
                title: "Rubika : Game Programmer",
                description: "Formation spécialisée en programmation de jeux vidéo. Développement de systèmes de jeu en C++ sous Unreal Engine, au sein d’équipes étudiantes.",
                date: "Septembre 2025 - Aujourd’hui",
            },
            but: {
                title: "BUT Informatique : Campus Universitaire de Maubeuge",
                description: "Diplôme obtenu. Formation au cours de laquelle j’ai approfondi mes compétences en développement informatique, notamment à travers des projets en équipe : création de sites web, développement de logiciels spécifiques et conception de jeux vidéo.",
                date: "Septembre 2022 - Juillet 2025",
            },
            bac: {
                title: "Baccalauréat Général : Lycée Alfred Kastler",
                description: "Acquisition des bases de l’informatique et de la programmation à travers la spécialité NSI. Obtention du Baccalauréat avec Mention Assez Bien.",
                date: "Septembre 2019 - Juillet 2022",
            },
        },
        pro: {
            skfApprentice: {
                title: "Alternant chez SKF Aeroengine",
                description: "Poursuite des missions réalisées lors de l'intérim, avec le développement et l'amélioration d'une application web interne.",
                date: "Septembre 2024 - Juillet 2025",
            },
            skfTemp: {
                title: "Intérimaire chez SKF Aeroengine",
                description: "Développement d'une application web interne servant de 'boîte à outils' afin de faciliter et optimiser les processus de l'usine.",
                date: "Juillet 2024 - Août 2024",
            },
            skfIntern: {
                title: "Stagiaire chez SKF Aeroengine",
                description: "Mise en place de tableaux de bord Power BI permettant d'anticiper les futurs besoins de l'usine et d'avoir une vision sur ces ressources.",
                date: "Avril 2024 - Juin 2024",
            },
        },
    },
    me: {
        titleIntro: "Salutations ! Je me nomme Nathan Strady et j’aime",
        titleHighlight: "développer",
        subtitle: "Passionné par l’informatique depuis le lycée, mon rêve est de développer mon propre jeu vidéo.",
        madeWithTitle: "Ce site portfolio est fait avec :",
        sourceCode: "Voir le code source",
        photoAlt: "Nathan Strady",
    },
    footer: {
        title: "Me contacter 📩",
        phone: "Téléphone",
        email: "Email",
        socials: "Réseaux",
        copyright: (year) => `© ${year} Fait par Strady Nathan`,
    },
}