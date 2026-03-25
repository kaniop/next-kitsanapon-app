import SkillCircle from "@/component/skillci";
import { FaFigma, FaHtml5, FaNodeJs, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function SkillsPage() {
  const skills = [
    { icon: <img src="/react-logo.png.png" className="w-10" />, percentage: 60, label: "React", isActive: true },
    { icon: <FaFigma />, percentage: 85, label: "Figma" },
    { icon: <FaHtml5 />, percentage: 80, label: "HTML/CSS" },
    { icon: <SiNextdotjs />, percentage: 80, label: "Next.js" },
    { icon: <FaJsSquare />, percentage: 60, label: "Java Script" },
    { icon: <FaGithub />, percentage: 90, label: "GitHub" },
  ];

  return (
    <div className="pl-10">
      <h1 className="text-5xl font-bold mb-12">
        My <span className="text-orange-500">Skills</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
        {skills.map((skill, index) => (
          <SkillCircle 
            key={index}
            icon={skill.icon}
            percentage={skill.percentage}
            label={skill.label}
            isActive={skill.isActive}
          />
        ))}
      </div>
    </div>
  );
}