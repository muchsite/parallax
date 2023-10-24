import React from "react";
import "./hero2.scss";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg4v from "../images/bg4v.mp4";
import hero from "../images/hero.mp4";
import hero2 from "../images/hero2.mp4";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";
import obj1 from "../images/obj1.png";
import obj2 from "../images/obj2.png";
import { useInView } from "react-intersection-observer";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
const Hero2 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  const isEnteringFromTop = entry?.boundingClientRect.top < 0;
  // const background
  return (
    <div>
      <div className="sec">
        <ParallaxBanner
          style={{ width: "100%", height: "120vh", objectFit: "cover" }}
        >
          <ParallaxBannerLayer speed={-20}>
            <video
              src={hero}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            ></video>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
      <div className="sec_video">
        <div className="box_shadow"></div>
        <div className="video_content">
          <div className="video_flex">
            <h3>LINEAGE</h3>
            <div className="line"></div>
            <h2>
              A legend in online gaming: <br />
              Lineage
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
        </div>
        <div
          className={`sec_video_back ${
            (isEnteringFromTop || inView) && "sec_video_back_scale"
          }`}
          ref={ref}
        >
          <div className="video2_cont">
            <video className="video2" autoPlay loop muted>
              <source src={hero2} />
            </video>
          </div>
        </div>
      </div>
      <div className="sec">
        <ParallaxBanner
          style={{ width: "100%", height: "120vh", objectFit: "cover" }}
        >
          <ParallaxBannerLayer image={bg1} speed={-20} />
        </ParallaxBanner>
        <ParallaxBanner
          style={{
            aspectRatio: "2 / 1",
            overflow: "visible",
            top: "5rem",
            position: "absolute",
            top: "-3rem",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <ParallaxBannerLayer image={obj1} speed={-20} />
        </ParallaxBanner>
      </div>
      <div className="sec">
        <ParallaxBanner style={{ width: "100%", height: "120vh" }}>
          <ParallaxBannerLayer image={bg2} speed={-20} />
        </ParallaxBanner>
      </div>
      <div className="sec">
        <ParallaxBanner style={{ width: "100%", height: "120vh" }}>
          <ParallaxBannerLayer image={bg3} speed={-20} />
        </ParallaxBanner>
        <ParallaxBanner
          style={{
            aspectRatio: "2 / 1",
            overflow: "visible",
            top: "-3rem",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <ParallaxBannerLayer image={obj2} speed={-20} />
        </ParallaxBanner>
      </div>
      <div className="sec" style={{ height: "100vh" }}>
        <ParallaxBanner
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        >
          <ParallaxBannerLayer image={bg4} speed={-20} />
        </ParallaxBanner>
      </div>
    </div>
  );
};

export default Hero2;
