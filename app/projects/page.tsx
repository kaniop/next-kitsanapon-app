import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center w-full h-full pl-10 md:pl-20 pr-10">
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Featured <span className="text-[#ff6b00]">Projects</span>
      </h1>

      <div className="max-w-3xl mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
          Manage Task App - fullstack web development
        </h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
          Here&rsquo;s my latest project built with Next.js and Laravel, using TailwindCSS on the 
          front-end. Watch the video to see the responsive landing page in action!
        </p>
      </div>

      <div className="relative w-full max-w-2xl rounded-lg overflow-hidden border border-gray-700 shadow-2xl">

        <div className="relative aspect-video bg-white overflow-hidden">
          
          <Image 
            src="/pica.png" 
            alt="Manage Task App Screenshot"
            fill
            className="object-cover object-top" 
          />

          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-all duration-300">
            
            <div className="w-20 h-16 md:w-24 md:h-20 bg-white border-4 border-[#ff6b00] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <FaPlay className="text-[#ff6b00] text-2xl md:text-4xl ml-2" />
            </div>

          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-8 w-full max-w-2xl justify-center">
        <div className="w-8 h-2 rounded-full bg-[#ff6b00]"></div> 
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
      </div>

    </div>
  );
}