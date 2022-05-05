import React from "react";
import { motion } from "framer-motion";
import Wave from "./wave.svg";
import Image from "./t.jpeg"

const Hero = () => {
    return(
        <div className="md:flex lg:flex relative">

        <div className="m-20 relative">
           <h1 className="font-bold absolute text-sm  items-center w-4/5 h-2/3 md:text-2xl m-20  lg:text-3xl m-20">Hello, I'm Taiwo. <br /> 
               Frontend Developer. <br /> 
               <span className="text-xs ml-10 flex justify-end md:block lg:block justify-start">Reactjs Tailwindcss Nextjs</span>
            </h1>
           <img src={Wave} alt="wave" className="rotate-0 w- md:rotate-90 lg:rotate-0 relative" />
        </div>

        <div className="">
            <motion.img 
               animate={{x: -80, }}
               transition={{ease: "easeOut", duration: 2}}
                src={Image} 
                alt="taiwo" 
                />
        </div>
        
        </div>
    )
}

export default Hero;