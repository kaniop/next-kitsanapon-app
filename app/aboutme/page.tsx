export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center w-full h-full pl-10 md:pl-20 pr-10">
      
      <h3 className="text-gray-400 text-lg mb-4 tracking-widest uppercase">
        About <span className="text-orange-500 font-medium">Me</span>
      </h3>

      <h1 className="text-[40px] md:text-[48px] font-normal leading-[1.2] mb-10 text-white max-w-4xl tracking-tight">
        I find fulfillment in blending <br />
        <span className="text-orange-500">visual design</span> with the power of <br />
        <span className="text-orange-500">coding</span> to create meaningful experiences.
      </h1>

      <div className="space-y-6 max-w-2xl">
        <p className="text-gray-400 text-lg leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quam rerum, atque, 
          iste numquam exercitationem mollitia sint fuga deleniti ut similique provident 
          architecto facilis voluptates beatae voluptatum sunt magni ex.
        </p>
      </div>

    </div>
  );
}