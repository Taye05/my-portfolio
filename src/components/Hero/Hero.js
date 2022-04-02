import React from "react";
import Wave from "./wave.svg";

const Hero = () => {
    return(
        <div>

        <div className="m-20 relative">
           <h1 className="font-bold absolute text-sm flex border border-black-500 items-center  lg:text-3xl m-20">Hello, I'm Taiwo. <br /> 
               Frontend Developer. <br /> 
               <span className="text-xs ml-10">Reactjs Tailwindcss Nextjs</span>
            </h1>
           <img src={Wave} alt="wave" className="rotate-0 w- md:rotate-90 lg:rotate-0 relative" />
        </div>
        
        </div>
    )
}

export default Hero;