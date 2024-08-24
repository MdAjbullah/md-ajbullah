import React from "react";

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-start p-8 text-center md:p-12 lg:p-20">
      
      <div className="relative z-10">
        <span className="websiteName">
          <h1 className="text-4xl md:text-5xl lg:text-[5.2rem] font-bold text-azure tracking-wider font-mona leading-tight md:leading-[120%] animate-slideIn">
            Grey Hat Shadow
          </h1>
        </span>
        <span className="title">
          <p className="text-sm md:text-base lg:text-[16px] leading-6 md:leading-7 text-white p-4 md:p-6 lg:p-10 tracking-widest font-mona font-normal brightness-90 animate-fadeInUp">
            In the Digital Age, Cybersecurity Is Not Just A Technical Necessity;
            <br />
            It's A Mindset Of Vigilance And Resilience
          </p>
        </span>
        <button className="px-6 py-2 rounded-xl text-base md:text-lg font-bold text-white bg-gradient-to-t from-[#041329] via-[#0a1a2f] to-[#275eb1] border border-white shadow-md transition ease duration-300 hover:from-[#0a1a2f] hover:to-[#3f73dd] hover:shadow-lg hover:text-black hover:scale-105 animate-pulse">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default Hero;
