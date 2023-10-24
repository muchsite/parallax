import React from "react";
import "./hero.scss";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg4v from "../images/bg4v.mp4";
import hero from "../images/hero.mp4";
import hero2 from "../images/hero2.mp4";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";
import obj1 from "../images/obj1.png";
import obj2 from "../images/obj2.png";

import { useParallax } from "react-scroll-parallax";
const Hero = ({ parallaxRef }) => {
  const { ref: refVideo2 } = useParallax({ speed: -20 });
  const { ref: skull_bg1 } = useParallax({ speed: -20 });
  const { ref: skull_bg2 } = useParallax({ speed: -20 });
  const { ref: warRef } = useParallax({ speed: -20 });

  return (
    <>
      <div>
        <section className="rz2 intro_cont" ref={refVideo2}>
          <div className="intro_header">
            <h3>LINEAGE</h3>
            <h2>
              A legend in online gaming: <br /> Lineage
            </h2>
            <p>
              Released in 1998, Lineage, an MMORPG set in a medieval fantasy
              world, was the first Internet-based online game in Korea. The
              first single game to achieve KRW 1 trillion in cumulative sales by
              2008, it laid the groundwork for future MMORPGs with elements such
              as guilds and Castle Siege. Twenty years later, it is still an
              influential phenomenon in the world of online cultural content
              representative of Korea.
            </p>
          </div>
          <div className="video2_cont">
            <video className="video2" autoPlay loop muted>
              <source src={hero2} />
            </video>
          </div>
        </section>
        <section className="rz2 skull_cont">
          <div className="skull_back_cont">
            <div className="skull_back_inner" ref={skull_bg1}>
              <div className="skull_back"></div>
            </div>
          </div>
          <div className="skull_img_cont" ref={skull_bg2}>
            <div className="skull_img_inner">
              <img src={obj1} alt="" />
            </div>
          </div>
        </section>
        <section className="rz2 war_cont">
          <div className="war_back_cont">
            <div className="war_back_inner" ref={warRef}>
              <div className="war_back"></div>
            </div>
          </div>
        </section>
        <section className="rz2 skull_cont">
          <div className="skull_back_cont">
            <div className="skull_back_inner" ref={skull_bg1}>
              <div className="crown_back"></div>
            </div>
          </div>
          <div className="crown_img_cont" ref={skull_bg2}>
            <img src={obj2} alt="" />
          </div>
        </section>
        <section className="rz2 war_cont">
          <div className="war_back_cont">
            <div className="war_back_inner" ref={warRef}>
              <div className="s_skull_back"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
