import type { SkillProps } from "@/app/components/Skills/Skill";
import { content } from "@/content";

const t = content.skills;

export const skills = {
    csharp: { icon: "/icons/csharp-icon.svg", name: "CSharp" },
    cpp: { icon: "/icons/cpp-icon.png", name: "C++" },
    threeC: { icon: "/icons/gamepad.svg", name: "3C" },
    architecture: { icon: "/icons/architecture.svg", name: t.architecture },
    systems: { icon: "/icons/gear.svg", name: t.systems },

    teamwork: { icon: "/icons/teamwork-icon.svg", name: t.teamwork },
    fastLearner: { icon: "/icons/fast-learner-icon.png", name: t.fastLearner },
    autonomy: { icon: "/icons/autonomy-icon.png", name: t.autonomy },
    curious: { icon: "/icons/curious.png", name: t.curious },

    unity: { icon: "/icons/unity-icon.svg", name: "Unity" },
    unreal: { icon: "/icons/unreal-engine-icon.svg", name: "Unreal Engine" },
    git: { icon: "/icons/git-vcs-color.svg", name: "Git" },
    perforce: { icon: "/icons/Logo-perforce-icon-reg.svg", name: "Perforce" },
    rider: { icon: "/icons/ryder-icon.svg", name: "Rider" },
    visualStudio: { icon: "/icons/visual-icon.svg", name: "Visual Studio" },

    vue: { icon: "/icons/vuejs-icon.svg", name: "VueJs" },
    javascript: { icon: "/icons/javascript-icon.svg", name: "Javascript" },
    sql: { icon: "/icons/sql-icon.svg", name: "SQL" },
} satisfies Record<string, SkillProps>;