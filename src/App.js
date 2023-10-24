import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

import "./App.scss";
import Hero from "./hero/Hero";
import Lenis from "@studio-freight/lenis";
import { ParallaxProvider } from "react-scroll-parallax";
import Hero2 from "./hero2/Hero2";
const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <ParallaxProvider>
        <Hero2 />
      </ParallaxProvider>
    </div>
  );
};

export default App;
