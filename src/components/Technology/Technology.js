import React from "react";
import Reactjs from "./react.png";
import Tailwind from "./tailwind-css.png";
import Next from "./next.png";
import Styled from "./styled.png";
import Github from "./github.png";

const Technology = () => {
    return (
        <div>
            <div>
            <h1 className="flex justify-center">TECHNOLOGIES</h1>
            </div>
           
           
           <div className="flex justify-center">
           <div className="m-10 animate-bounce">
               <h1>React.js</h1>
               <img src={Reactjs} alt="react-logo" className="h-10 w-20"/>
           </div>

           <div className="m-10 animate-bounce">
               <h1>Tailwindcss</h1>
               <img src={Tailwind} alt="react-logo" className="h-10 w-20"/>
           </div>

           <div className="m-10 animate-bounce">
               <h1>Next.js</h1>
               <img src={Next} alt="react-logo" className="h-10 w-20"/>
           </div>

           <div className="m-10 animate-bounce">
               <h1>Styled-Component</h1>
               <img src={Styled} alt="react-logo" className="h-10 w-20"/>
           </div>

           <div className="m-10 animate-bounce">
               <h1>Github</h1>
               <img src={Github} alt="react-logo" className="h-10 w-20"/>
           </div>
           </div>


        </div>
    )
}

export default Technology;