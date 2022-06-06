import React from "react";

const Project = () => {
    return (
        <div>
            <div className="">
                <h1 className="flex justify-center text-lg font-black">PROJECT<span className="text-unsealed-mahogany ml-1">S</span></h1>
                <p className="sm:m-10 p-10 md:m-10 p-10 lg:flex justify-center text-sm"> I've worked with various technologies, which has helped broaden my web development knowledge</p>
            </div>
           
           <div className="grid sm:grid-rows-3 gap-3  lg:grid-cols-4 gap-4 ">
              <div className="bg-red-100 h-20 shadow-2xl hover:shadow-red-300">1</div>
              <div className="bg-red-100 h-20 shadow-2xl hover:shadow-red-300">2</div>
              <div className="bg-red-100 h-20 shadow-2xl hover:shadow-red-300">3</div>
           </div>
          
        </div>
    )
}

export default  Project;