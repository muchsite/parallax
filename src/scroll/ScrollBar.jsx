import React, { useEffect, useState, useRef } from "react";
import "./scrollbar.scss";

const ScrollBar = ({ homeRef }) => {
  const [top, setTop] = useState(0);

  const handleScroll = () => {
    if (homeRef.current) {
      const container = homeRef.current;
      const scrollTop = window.scrollY;
      const scrollHeight = container.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      if (scrollPercentage > 95) {
        setTop(`96`);
      } else {
        setTop(scrollPercentage);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="scroll_cont" style={{ top: `${top}%` }}></div>;
};

export default ScrollBar;
