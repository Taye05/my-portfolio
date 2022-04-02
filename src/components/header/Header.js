import React from 'react';
import { motion } from "framer-motion";
import Image from './girl2.svg';

const variants = {
    hidden: {rotate: -180},
    visible: {
        rotate: 0,
        transition: {duration: 1}
    }
}

const pathVariants ={
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

const Header = () => {
    return(
        <div className="m- flex bg-black text-white">
            <motion.img src={Image} 
            variants={variants}
            initial="hidden"
            animate="visible"
             alt="logo"
             className="w-14 ml-10" />

             
           <motion.h1 variants={pathVariants} 
            initial="hidden"
            animate="visible"
            className="m-5 w-2/4">
                ADEBAMOWO TAIWO
            </motion.h1>
            <ul className="hidden md:hidden lg:flex flex w-2/4 justify-around items-center">
                 <li className="flex block absolute"><i class="fa fa-bars"></i></li>
                <li>about</li>
                <li>project</li>
                <li>contact</li>
            </ul>
        </div>
    )
}

export default Header;