export default function Home() {
  return (
   
    <div className="flex flex-col justify-center w-full h-full min-h-screen pl-10 md:pl-20">
      
      <p className="text-gray-400 text-[40px] mb-4">
        Lets Work <span className="text-orange-500 font-medium">Together !</span>
      </p>
      
      
      <h1 className="text-[48px] md:text-[48px] font-bold leading-[1.2] mb-8 text-white max-w-4xl">
        Hi From <span className="text-orange-500">Kitsanapon</span> ,<br />
        Interactive Designer & Fullstack Web Developer
      </h1>
      
      
      <p className="text-gray-500 text-[24px] mb-12 leading-relaxed max-w-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In praesentium sequi laboriosam perferendis quis inventore deserunt, adipisci sapiente architecto quasi ullam aut, alias aspernatur eius, veniam libero vitae at repudiandae.
      </p>
      
      <div className="flex gap-16">
        <div>
          <h2 className="text-[64px] font-bold text-orange-500 mb-2">3+</h2>
          <p className="text-gray-400 text-[20px] tracking-[0.2em] uppercase">Years of Experience</p>
        </div>
        <div>
          <h2 className="text-[64px] font-bold text-orange-500 mb-2">10+</h2>
          <p className="text-gray-400 text-[20px] tracking-[0.2em] uppercase">Projects Completed</p>
        </div>
      </div>
    </div>
  );
}