import React, { useState } from "react";
import LinkedlnIcon from "../assets/linkedInIcon.png";
import InternetIcon from "../assets/internetIcon.png";
import GithubIcon from "../assets/githubIcon.png";

import TypeWriter from "../components/TypeWriter";

export default function Home() {
  const [text, setText] = useState(
    "Howdy. I'm Jason a computer science student at Texas A&M I enjoy programming and designing, but I also have a big passion for Math. This application invovles math subjects I have taken in College.MAF is a terminal-based application to acccess resources. The purpose of MAF is to assist in the learning process of student taking math courses at a college level. The goal is to give student answers to check their work and provide an steps or algorthm on how the answer was reached."
  );
  return (
    <div>
      <div className="grid grid-cols-4 h-screen bg-bg0 text-fg0">
        <div className="col-start-2 col-span-2 m-[7%]">
          <div className="inline-flex flex-col place-items-center w-full h-1/2  border-dashed border-4 border-bg2">
            <button className="flex justify-center items-center h-16 w-16 mt-6 bg-black rounded-2xl border-2 border-white text-white text-2xl">
              {">_"}
            </button>
            <div className="justify-center flex-row items-center h-1/2 p-[2%] mx-[5%] mt-[2%] space-y-4 text-center text-lg">
              <TypeWriter text={text} />
            </div>
            <div className="flex justify-center items-center h-1/4 p-[2%] text-red-color0 text-xl">
              CLICK THE TERMINAL ABOVE TO START
            </div>
          </div>
          <div className="inline-flex flex-row space-x-5">
            <a
              href="https://www.linkedin.com/in/vjasonle/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedlnIcon}
                alt="LinkedLn Logo"
                className="object-scale-down h-8 w-8 mt-2"
              />
            </a>

            <a
              href="http://people.tamu.edu/~jasonisazn/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={InternetIcon}
                alt="Personal Site Logo"
                className="object-scale-down rounded-full h-8 w-8 mt-2"
              />
            </a>

            <a
              href="https://github.com/JasonIsAzn"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GithubIcon}
                alt="Personal Github Logo"
                className="object-scale-down rounded-full h-8 w-8 mt-2"
              />
            </a>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
