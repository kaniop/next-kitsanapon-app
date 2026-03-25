import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPenNib } from "react-icons/fa";

export default function SpecPage() {
  const specs = [
    { title: "Front end-developer", icon: <BiCodeAlt />, desc: "Front-end is where I weave code and creativity to shape captivating..." },
    { title: "UI/UX Designer", icon: <AiOutlineGlobal />, desc: "UI/UX design is my palette for blending art and user psychology..." },
    { title: "Graphic designer", icon: <FaPenNib />, desc: "As a graphic designer, I transform ideas into visually striking and..." },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-12">My <span className="text-orange-500">Specializations</span></h1>
      
      <div className="flex flex-col gap-6">
        {specs.map((spec, index) => (
          <div key={index} className="group p-8 rounded-[30px] border border-gray-800 hover:border-orange-500 transition-all flex justify-between items-start">
            <div>
              <h3 className="text-white text-xl font-bold mb-3">{spec.title}</h3>
              <p className="text-gray-500 max-w-lg">{spec.desc}</p>
            </div>
            <div className="text-orange-500 text-2xl">{spec.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}