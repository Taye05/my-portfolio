import React from "react";
import './About.css';

const About = () => {
    return (
        <div>
           <div>
               <h1 className="flex justify-center text-lg font-black">ABOUT <span className="text-unsealed-mahogany ml-1">ME</span></h1>
           </div>
           <div className="marquee m-10">
               {/* <h1 className="content">well, you can just sayyyyyyyyy</h1> */}
               <h1 className="text-xs">I am an enthusiastic person. I get really curious about things. I love to collaborate and network. <br />
                    with positive people. I have worked with different technologies ranging from <br />
                    reactjs, nextjs, tailwindcss, styled components, git. <br />
                    When I am not coding, I love spending time with people <br />
                    I love and Like learning new hobbies.</h1>
           </div>
        </div>
    )
}

export default About;