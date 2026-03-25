"use client";
import { usePathname } from "next/navigation";
import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineProject 
} from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri"; 

export default function Navbar() {
  const pathname = usePathname();

  const menus = [
    { id: 'home', icon: AiOutlineHome, link: '/' },            
    { id: 'about', icon: AiOutlineUser, link: '/aboutme' },      
    { id: 'edu', icon: HiOutlineAcademicCap, link: '/eduexp' }, 
    { id: 'spec', icon: RiFileList3Line, link: '/spec' },        
    { id: 'projects', icon: AiOutlineProject, link: '/projects' },
    { id: 'skills', icon: BiCodeAlt, link: '/skills' },          
    { id: 'contact', icon: MdOutlineMailOutline, link: '/contactme' }, 
  ];

  return (
    <nav className="flex flex-col gap-6 border border-gray-700 rounded-full py-8 px-3 bg-[#1a1a1a] items-center">
      {menus.map((menu) => (
        <a 
          key={menu.id} 
          href={menu.link} 
          className="transition-transform hover:scale-110 flex items-center justify-center w-8 h-8"
        >
          <menu.icon 
            size={24} 
            className={pathname === menu.link ? "text-orange-500" : "text-gray-500"} 
          />
        </a>
      ))}
    </nav>
  );
}