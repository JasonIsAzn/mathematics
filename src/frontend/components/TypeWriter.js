import React, { useState, useEffect, useRef } from "react";

const TypeWriter = ({ text }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  }, [text]);

  useEffect(() => {
    if (index.current < text.length) {
      const timeoutId = setTimeout(() => {
        let thisText = currentText;
        thisText += text.charAt(index.current);
        setCurrentText(thisText);
        console.log(text.charAt(index.current));
        index.current += 1;
      }, 80);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [currentText, text]);

  return <p>{currentText}</p>;
};

export default TypeWriter;
