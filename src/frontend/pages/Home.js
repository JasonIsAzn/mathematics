import React, { useState } from "react";
import { render } from "react-dom";

import LinkedlnIcon from "../assets/linkedInIcon.png";
import InternetIcon from "../assets/internetIcon.png";
import GithubIcon from "../assets/githubIcon.png";

import TypeWriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
// import TypeWriter from "../components/TypeWriter";

import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

export default function Home() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const [RND, SetRND] = useState({ width: 0, height: 0, x: 0, y: 0 });

  const changePosition = (e, d) => {
    SetRND({
      width: RND.width,
      height: RND.height,
      x: d.x,
      y: d.y,
    });
  };

  const changeSize = (e, direction, ref, delta, position) => {
    SetRND({
      width: ref.style.width,
      height: ref.style.height,
      ...position,
    });
  };

  const resizeTerminal = () => {
    let mySize = { width: 300, height: 300, x: 0, y: 0 };
    SetRND(mySize);
  };

  return (
    <div className="Home">
      <div className="grid grid-cols-4 h-screen bg-bg0 text-fg0">
        <div className="col-start-2 col-span-2 m-[7%]">
          <div className="inline-flex flex-col place-items-center w-full h-1/2  border-dashed border-4 border-bg2">
            {/* terminal button */}
            <button
              className="flex justify-center items-center h-16 w-16 mt-6 bg-black rounded-2xl border-2 border-white text-white text-2xl"
              onClick={resizeTerminal}
            >
              {">_"}
            </button>

            {/* terminal */}
            <Rnd
              disableDragging={false}
              onDragStop={changePosition}
              onResizeStop={changeSize}
              enableResizing={{ bottomRight: true }}
              bounds="body"
              dragHandleClassName={"handle"}
              resizeHandleClasses={["bottomRight"]}
              className="absolute bg-bg0 z-40 border border-white"
              size={{ width: RND.width, height: RND.height }}
              position={{ x: RND.x, y: RND.y }}
            >
              <div className="handle bg-bg1">X</div>

              <div className="flex inline-flex space-x-1">
                <label>$</label>
                <input
                  type="text"
                  className="text-fg0 bg-bg0 w-full border-none focus:ring-0 focus:outline-none"
                ></input>
              </div>
            </Rnd>

            {/* paragraph typewriter */}
            <div className="justify-center flex-row items-center h-1/2 p-[2%] mx-[5%] mt-[2%] space-y-4 text-center text-lg">
              <TypeWriter
                options={{
                  delay: 70,
                  stringSplitter,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Howdy. I'm Jason a computer science student at Texas A&M 👍. I enjoy programming and designing, but I also have a big passion for Math.<br><br>"
                    )
                    .typeString(
                      "MAF is a terminal-based application to acccess resources I have created. The purpose of MAF is to assist in the learning process of student taking math courses at a college level.<br><br>"
                    )
                    .typeString(
                      '<span style="color: red">CLICK THE TERMINAL ABOVE TO START</span>'
                    )
                    .start();
                }}
              />
            </div>
          </div>

          {/* logo links */}
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
        <div className="col-span-1">test</div>
      </div>
    </div>
  );
}
