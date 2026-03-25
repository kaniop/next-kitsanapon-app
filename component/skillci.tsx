import { ReactNode } from "react";

interface SkillCircleProps {
  icon: ReactNode;
  percentage: number;
  label: string;
  isActive?: boolean; 
}

export default function SkillCircle({ icon, percentage, label, isActive }: SkillCircleProps) {
  
  const rx = 45;
  const ry = 65;
  const circumference = Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className={`relative w-32 h-44 flex items-center justify-center rounded-[50px] border-2 transition-all duration-300 ${isActive ? 'border-orange-500 shadow-[0_0_15px_rgba(255,107,0,0.3)]' : 'border-gray-800'}`}>
        
        <div className="flex flex-col items-center z-10">
          <div className={`text-4xl mb-4 `}>
            {icon}
          </div>
          <p className="text-orange-500 font-medium">{percentage}%</p>
        </div>
      </div>
      <p className="mt-4 text-gray-400 text-sm">{label}</p>
    </div>
  );
}