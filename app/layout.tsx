import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import ProCard from "@/component/procard"; 
import Navbar from "@/component/bar";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Next.js Portfolio Assignment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="en">
    <body className={`${libreFranklin.variable} font-sans antialiased bg-[#0f0f0f] text-white`}>
      

      <div className="h-screen w-screen flex items-center justify-between p-4 md:p-8 lg:px-12 max-w-[1920px] mx-auto overflow-hidden">
        

        <div className="flex flex-col md:flex-row gap-8 items-center flex-grow">
          

          <aside className="flex-none h-full flex items-center">
            <ProCard />
          </aside>

          <main className="flex-grow py-4 overflow-visible">
            {children}
          </main>
        </div>

        <aside className="flex-none sticky top-10 hidden lg:block ml-10">
          <Navbar />
        </aside>

      </div>
    </body>
  </html>
);
}