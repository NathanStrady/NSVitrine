import type { Project } from "@/app/components/Project/Project";
import { skills } from "@/app/components/Skills/skillCatalog"
import { content } from "@/content"

const t = content.projects
export const projectsData: Project[] = [
    {
        title: "Le Chasseur d'Aurore",
        description: "",
        media: "",
        mediaType: "",
        skills: [skills.unreal, skills.cpp, skills.perforce],
        knowMore: ""
    },
    {
        title: "Neuromancer (Prototype)",
        description: "",
        media: "",
        mediaType: "",
        skills: [skills.unreal, skills.cpp, skills.perforce],
        knowMore: ""
    },
    {
        title: "Fenrir (Prototype)",
        description: "",
        media: "",
        mediaType: "",
        skills: [skills.unreal, skills.cpp],
        knowMore: ""
    },
    {
        title: "Super Island",
        description: t.descriptions.superIsland,
        media: "/videos/Démonstration.webm",
        mediaType: "video",
        skills: [skills.unity, skills.csharp],
        knowMore: "/SuperIsland"
    },
    {
        title: "Secom",
        description: t.descriptions.secom,
        media: "/images/LoginSecom.png",
        mediaType: "image",
        skills: [skills.visualStudio, skills.vue, skills.javascript, skills.csharp, skills.sql],
        knowMore: "/Secom"
    },
]