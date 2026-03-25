export default function EduExpPage() {
  const data = [
    {
      date: "2022 - Present",
      title: "UI/UX Designer",
      sub: "Freelance",
      desc: "Fullstack Web Developer",
      isHighlight: true,
    },
    {
      date: "2022 - 2025",
      title: "Bachelor Degree in Technology Digital and Innovation",
      sub: "Southeast Asia University",
    },
    {
      date: "2016 - 2021",
      title: "High school",
      sub: "Taweethapiseck School",
    },
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-12">
        Education & <span className="text-orange-500">Experience</span>
      </h1>

      <div className="relative border-l border-gray-800 ml-4 flex flex-col gap-12">
        {data.map((item, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute w-4 h-4 bg-[#1a1a1a] border-2 border-gray-700 rounded-full -left-[9px] top-1"></div>
            
            <p className="text-orange-500 text-sm font-medium mb-2">{item.date}</p>
            <h3 className="text-white text-xl font-bold">{item.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
            
            {item.desc && (
              <p className="text-gray-300 font-medium mt-2">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}