import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Stats = () => {
  return (
    <div>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        download=""
        className="button bt"
        target="_blank"
      >
        Introduction Video {""}
        <span className="button__icon">
          <FaArrowRight />
        </span>
      </a>
      <a
        href="https://drive.google.com/file/d/1qUzNS1F6HBAmjneSGo2uI7YGVBZYKQdj/view?usp=sharing"
        target="blank"
        className="button bt"
      >
        View CV {""}
        <span className="button__icon">
          <FaArrowRight />
        </span>
      </a>
    </div>
  );
};

export default Stats;
