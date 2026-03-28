import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ProCard() {
  const socials = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaXTwitter, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaLinkedinIn, link: "#" },
    { Icon: FaGithub, link: "#" },
  ];

  return (
    <div className="bg-[#1D1C1D] border border-gray-800 flex flex-col items-center shadow-2xl overflow-hidden" 
         style={{ 
           width: '395px', 
           height: '695px', 
           borderRadius: '20px',
           padding: '40px 30px' 
         }}>
      
      <div className="w-full mb-2">
        <h2 className="text-white text-2xl font-bold text-left">
          <span className="text-orange-500">K</span>itsanapon
        </h2>
      </div>
      
      <div className="relative w-full aspect-square mb-2 bg-[#2a2a2a]" 
           style={{
             width: '325px', 
           height: '325px',
            borderRadius: '20px' }}>
        <Image 
          src="/picb.jpg" 
          alt="Profile" 
          fill 
          className="object-cover" 
        />
      </div>

      <div className="text-center mb-2">
        <h3 className="text-white text-xl font-bold mb-2">STU ID: 6652c10009</h3>
        <p className="text-gray-400 text-sm tracking-wide">Fullstack Web Developer</p>
      </div>

      <div className="flex justify-center gap-3 mb-2 w-full">
        {socials.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all flex-none"
          >
            <item.Icon size={20} />
          </a>
        ))}
      </div>

      <button className="libreFranklin.variable w-[80%] bg-[#FF5C00]  text-[#1D1C1D]  py-2.5 rounded-full  transition-all uppercase tracking-tighter text-base mt-auto">
        HIRE ME !
      </button>
    </div>
  );
}