export default function ContactMe() {
  return (
    <div className="flex flex-col justify-center w-full h-full pl-10 md:pl-20 pr-10">

      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-2">
          Contact <span className="text-[#ff6b00]">Me</span>
        </h1>
        <p className="text-gray-300 text-lg">Let&rsquo;s get in touch!</p>
      </div>

      <form className="w-full max-w-2xl flex flex-col gap-10">

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 relative">
            <input 
              type="email" 
              id="email" 
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-[#ff6b00] focus:outline-none focus:border-[#ff6b00] transition-colors peer"
            />
          </div>
          <div className="flex-1 relative">
            <input 
              type="tel" 
              id="phone" 
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-[#ff6b00] focus:outline-none focus:border-[#ff6b00] transition-colors peer"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 relative">
            <input 
              type="text" 
              id="name" 
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-[#ff6b00] focus:outline-none focus:border-[#ff6b00] transition-colors peer"
            />
          </div>
          <div className="flex-1 relative">
            <input 
              type="text" 
              id="address" 
              placeholder="Address" 
              className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-[#ff6b00] focus:outline-none focus:border-[#ff6b00] transition-colors peer"
            />
          </div>
        </div>


        <div className="relative">
          <textarea 
            id="content" 
            rows={4}
            placeholder="Content"
            className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-[#ff6b00] focus:outline-none focus:border-[#ff6b00] transition-colors resize-none peer"
          ></textarea>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <input 
            type="checkbox" 
            id="newsletter" 
            className="w-4 h-4 accent-[#ff6b00] cursor-pointer bg-transparent border border-white rounded-sm appearance-none checked:bg-[#ff6b00] checked:border-[#ff6b00]"
          />
          <label htmlFor="newsletter" className="text-gray-300 text-sm cursor-pointer">
            I would like to receive the newsletter.
          </label>
        </div>

        <button 
          type="button" 
          className="bg-[#ff6b00] text-white font-medium py-3 px-8 rounded-lg w-fit hover:bg-[#e66000] transition-all"
        >
          Submit
        </button>
      </form>

    </div>
  );
}