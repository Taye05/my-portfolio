import React from "react";

const Project = () => {
    return (
        <div>
            <div className="">
                <h1 className="flex justify-center text-lg font-black">PROJECT<span className="text-unsealed-mahogany ml-1">S</span></h1>
                <p className="flex justify-center"> I've worked with various technologies, which has helped broaden my web development knowledge</p>
            </div>
           
           <div className="grid grid-cols-4 gap-4 ml-32">
              <div className="bg-red-100 h-20 shadow-2xl hover:shadow-red-300">1</div>
              <div className="bg-red-100 shadow-2xl hover:shadow-red-300">2</div>
              <div className="bg-red-100 shadow-2xl hover:shadow-red-300">3</div>
           </div>
          
        </div>
    )
}

export default  Project;