import React from "react";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 h-screen bg-bg0 text-fg0">
        <div className="col-start-2 col-span-2 m-[7%]">
          <div className="inline-flex flex-col place-items-center w-full h-1/2  border-dashed border-4 border-bg2">
            <button className="flex justify-center items-center h-16 w-16 mt-6 bg-black rounded-2xl border-2 border-white text-white text-2xl">
              {">_"}
            </button>
            <div className="justify-center flex-row items-center h-1/2 p-[2%] mx-[5%] mt-[2%] space-y-4 text-center text-lg">
              <p>
                &emsp; Howdy. I’m Jason a computer science student at Texas A&M
                I enjoy programming and designing, but I also have a big passion
                for Math. This application involves math course I have in
                college.
              </p>
              <p>
                &emsp;MAF is a terminal-based application to access resources to
                assist in the learning process of student taking math courses at
                a college level.
              </p>
            </div>
            <div className="flex justify-center items-center h-1/4 p-[2%] text-red-color0 text-xl">
              CLICK THE TERMINAL ABOVE TO START
            </div>
          </div>
 
        </div>
        <div className="col-span-1"></div>
        
      </div>
      
    </div>
  );
}
