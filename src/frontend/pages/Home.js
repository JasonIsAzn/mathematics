import React, { useEffect, useState } from "react";

import LinkedlnIcon from "../assets/linkedInIcon.png";
import InternetIcon from "../assets/internetIcon.png";
import GithubIcon from "../assets/githubIcon.png";

import CloseImg from "../assets/close.png";
import MaximizeImg from "../assets/maximize.png";
import MinimizeImg from "../assets/minimize.png";
import HideImg from "../assets/hide.png";

import TypeWriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
// import TypeWriter from "../components/TypeWriter";

import { Rnd } from "react-rnd";

export default function Home() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  // Terminal
  const [RND, SetRND] = useState({ width: 750, height: 350, x: 10, y: 10 });
  const [prevRND, SetPrevRND] = useState(RND);

  const changePosition = (e, d) => {
    SetRND({
      width: RND.width,
      height: RND.height,
      x: d.x,
      y: d.y,
    });
  };

  const changeSize = (e, direction, ref, delta, position) => {
    console.log("ref", ref);
    console.log("position", position);
    SetRND({
      width: ref.style.width,
      height: ref.style.height,
      ...position,
    });
  };

  const maximizeSize = (ref) => {
    const { innerWidth: width, innerHeight: height } = window;
    SetRND({
      width: width,
      height: height,
      x: 0,
      y: 0,
    });

    const object = document.getElementById("mini/max");
    const object_type = object.src;

    if (object_type === MinimizeImg) {
      console.log("test");
      object.src = MaximizeImg;
      SetRND(prevRND);
    } else {
      SetPrevRND(RND);
      object.src = MinimizeImg;
    }
  };

  const terminalToggle = () => {
    const terminal_object = document.getElementById("terminal");

    const terminal_hidden = terminal_object.className.includes("invisible");
    console.log("toggle terminal", terminal_hidden);

    if (terminal_hidden) {
      terminal_object.setAttribute(
        "class",
        "absolute bg-bg3 z-40 border border-white"
      );
    } else {
      terminal_object.setAttribute(
        "class",
        "absolute bg-bg3 z-40 border border-white invisible"
      );
    }

    // TEMP WAY TO UPDATE SCROLLING
    let objDiv = document.getElementById("terminal-box");
    objDiv.scrollTop = objDiv.scrollHeight;
  };

  const closeTerminal = () => {
    terminalToggle();
  };

  // on-render
  useEffect(() => {
    terminalToggle();
  }, []);

  const Box = () => (
    <div
      className="box h-[95%] overflow-y-auto flex flex-col"
      id="terminal-box"
    >
      <span id="terminal-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At magni quos
        dolor reprehenderit omnis natus nemo laboriosam distinctio, voluptatum,
        facere magnam repellendus minus, ipsum corrupti non nobis expedita in
        enim nihil nisi. Soluta, assumenda eum? Sint illo esse officia obcaecati
        maxime sapiente nesciunt! Eum, veniam aliquam facere sequi est dolorum?
      </span>
      <span id="terminal-input" className="flex inline-flex space-x-1">
        <label>$</label>
        <input
          type="text"
          className="text-fg0 bg-bg3 w-full border-none focus:ring-0 focus:outline-none"
        ></input>
      </span>
    </div>
  );

  return (
    <div className="Home overflow-hidden">
      <div className="grid grid-cols-4 h-screen bg-bg0 text-fg0 ">
        {/* terminal */}
        <Rnd
          disableDragging={false}
          onDragStop={changePosition}
          onResizeStop={changeSize}
          enableResizing={{ bottomRight: true }}
          bounds="body"
          dragHandleClassName={"handle"}
          resizeHandleClasses={["bottomRight"]}
          id="terminal"
          className="absolute bg-bg3 z-40 border border-white overflow-hidden"
          size={{ width: RND.width, height: RND.height }}
          position={{ x: RND.x, y: RND.y }}
        >
          {/* Control Window */}
          <div className="flex justify-end handle text-black bg-bg1 space-x-1 ">
            <span className="mr-auto ml-2">
              <label>MAF</label>
            </span>
            <span
              className="cursor-pointer hover:bg-bg2"
              onClick={terminalToggle}
            >
              <div className="absolute "></div>
              <img
                src={HideImg}
                alt="Minimize Button"
                className="object-scale-down h-5 w-5 mt-1"
              />
            </span>
            <span
              className="cursor-pointer hover:bg-bg2"
              onClick={maximizeSize}
            >
              <div className="absolute "></div>
              <img
                src={MaximizeImg}
                id="mini/max"
                alt="Minimize Button"
                className="object-scale-down h-5 w-5 mt-1"
              />
            </span>

            <span
              className="cursor-pointer hover:bg-bg2"
              onClick={closeTerminal}
            >
              <img
                src={CloseImg}
                alt="Close Button"
                className="object-scale-down h-5 w-6 mt-1"
              />
            </span>
          </div>

          {/* Terminal Body */}
          <Box />
        </Rnd>
        <div className="col-start-2 col-span-2 m-[7%]">
          <div className="inline-flex flex-col place-items-center w-full h-1/2  border-dashed border-4 border-bg2">
            {/* terminal button */}
            <button
              className="flex justify-center items-center h-16 w-16 mt-6 p-6 bg-black rounded-2xl border-2 border-white text-white text-2xl"
              onClick={terminalToggle}
            >
              {">_"}
            </button>

            {/* body */}
            <div className="justify-center flex-row items-center h-1/2 mx-[5%] mt-[2%] space-y-4 text-center text-lg">
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

            <div className="justify-center flex-row items-center h-1/2 p-[2%] mx-[5%] mt-[2%] space-y-4 text-red-color0 text-center text-lg">
              <TypeWriter
                options={{
                  cursor: "",
                  loop: true,
                  delay: 70,
                  stringSplitter,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("CLICK THE TERMINAL ABOVE TO START")
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
