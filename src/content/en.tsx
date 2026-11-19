import type { Dictionary } from "./types"

export const en: Dictionary = {
    meta: {
        title: "Strady Nathan",
        description: "Strady Nathan's portfolio",
    },
    skills: {
        architecture: "Code Architecture",
        systems: "Systems",
        teamwork: "Team Spirit",
        fastLearner: "Fast Learner",
        autonomy: "Self-Taught",
        curious: "Curious",
    },
    projects: {
        descriptions: {
            superIsland:
                "Project carried out in a team of two during semester 5 of the BUT Informatique degree. The goal was to develop a functional 3D platformer featuring collectibles and enemies.\n" +
                "As our team was small, we used free assets to build the game's visuals.",
            secom:
                "Web application developed for the SKF Aeroengine Valenciennes site. This project, carried out during my work-study placement, aimed to simplify the factory's processes by centralizing the data coming from the ERP used by the company.",
        },
    },
    parcours: {
        academic: {
            rubika: {
                title: "Rubika: Game Programmer",
                description: "Specialized video game programming program. Development of gameplay systems in C++ with Unreal Engine, within student teams.",
                date: "September 2025 - Present",
            },
            but: {
                title: "BUT Informatique (Computer Science): Maubeuge University Campus",
                description: "Degree obtained. A program during which I deepened my software development skills, notably through team projects: building websites, developing custom software and designing video games.",
                date: "September 2022 - July 2025",
            },
            bac: {
                title: "French General Baccalaureate: Lycée Alfred Kastler",
                description: "Learned the fundamentals of computer science and programming through the NSI specialty. Graduated with Honors (Mention Assez Bien).",
                date: "September 2019 - July 2022",
            },
        },
        pro: {
            skfApprentice: {
                title: "Work-study at SKF Aeroengine",
                description: "Continued the work started during the temporary job, developing and improving an internal web application.",
                date: "September 2024 - July 2025",
            },
            skfTemp: {
                title: "Temporary worker at SKF Aeroengine",
                description: "Developed an internal web application acting as a 'toolbox' to make the factory's processes easier and more efficient.",
                date: "July 2024 - August 2024",
            },
            skfIntern: {
                title: "Intern at SKF Aeroengine",
                description: "Built Power BI dashboards to anticipate the factory's future needs and give visibility on its resources.",
                date: "April 2024 - June 2024",
            },
        },
    },
    me: {
        titleIntro: "Hello! My name is Nathan Strady and I love to",
        titleHighlight: "develop",
        subtitle: "Passionate about computing since high school, my dream is to build my own video game.",
        madeWithTitle: "This portfolio website is made with:",
        sourceCode: "View source code",
        photoAlt: "Nathan Strady",
    },
    footer: {
        title: "Contact me 📩",
        phone: "Phone",
        email: "Email",
        socials: "Socials",
        copyright: (year) => `© ${year} Made by Strady Nathan`,
    },
}