import React, { useState, useEffect, useRef } from "react";
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
import l from "../images/lineage.png";
import Loading from "./Loading"; // import the loading component

const Hero2 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  const isEnteringFromTop = entry?.boundingClientRect.top < 0;

  const [isLoading, setIsLoading] = useState(true); // loading state
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const handleLoadedData = () => setIsLoading(false);

    if (video) {
      video.addEventListener("loadeddata", handleLoadedData);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (video) {
        video.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, [videoRef.current]);

  return (
    <div>
      {isLoading && <Loading />}
      <div className={`hero-container ${isLoading ? "hidden" : ""}`}>
        <div className="sec">
          <ParallaxBanner
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          >
            <ParallaxBannerLayer speed={-50} expanded={false}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                src={hero}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              ></video>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-20} expanded={false}>
              <img src={l} alt="" />
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
                first single game to achieve KRW 1 trillion in cumulative sales
                by 2008, it laid the groundwork for future MMORPGs with elements
                such as guilds and Castle Siege. Twenty years later, it is still
                an influential phenomenon in the world of online cultural
                content representative of Korea.
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
            <ParallaxBannerLayer image={bg1} speed={-60} />
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
          <ParallaxBannerLayer>
            <div className="sec_text">
              <h2>A groundbreaking standard in Korean MMORPGs</h2>
              <p>
                Leading the growth and development of Korean online games,
                Lineage introduced new authentic systems and content, including
                guilds led by a monarch, a large scale battle called Castle
                Siege and the Weapon Reinforcement System, which became the
                standard for numerous later MMORPGs.
              </p>
            </div>
          </ParallaxBannerLayer>
        </div>
        <div className="sec">
          <ParallaxBanner style={{ width: "100%", height: "120vh" }}>
            <ParallaxBannerLayer image={bg2} speed={-20} />
          </ParallaxBanner>
          <ParallaxBannerLayer>
            <div className="sec_text_r">
              <h2>First ever large-scale RvR Castle Siege</h2>
              <p>
                Lineage was the first to introduce World Siege, RvR content
                where guilds engage in large scale battles for control over
                castles. Castle Siege, where players enjoy the process of
                achieving a common goal by cooperating and overcoming
                opposition, became the hallmark of Korean online MMORPGs.
              </p>
            </div>
          </ParallaxBannerLayer>
        </div>
        <div className="sec">
          <ParallaxBanner style={{ width: "100%", height: "120vh" }}>
            <ParallaxBannerLayer image={bg3} speed={-60} expanded={false} />
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
            <ParallaxBannerLayer>
              <div className="sec_text">
                <h2>The Sweeping Spread of the Lineage Syndrome</h2>
                <p>
                  Gaining public attention immediately after its release in
                  1998, Lineage attracted 1 million players within the first 15
                  months of service and reached record-braking 3 trillion won in
                  cumulative sales by 2016. The new, mind-blowing cultural
                  experience of players discovering their new identities in the
                  virtual world of Aden Kingdom and writing their own stories of
                  camaraderie, became gave birth to the unique Lineage
                  phenomenon - that of socialization beyond online and offline
                  boundaries.
                </p>
              </div>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </div>
        <div className="sec">
          <ParallaxBanner
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          >
            <ParallaxBannerLayer image={bg4} speed={-20} expanded={false} />
          </ParallaxBanner>
          <ParallaxBannerLayer>
            <div className="sec_text_r">
              <h2>The evolution of Lineage Remaster</h2>
              <p>
                Marking its 20th anniversary, Lineage, which has dominated
                Korean game culture since its release, decided to reach out to
                the next generation. After the remaster, which has been thus far
                its biggest update ever, Lineage was presented to the audience
                with a much more refined, modern look. Remastered, Lineage is
                now writing a new history, constantly changing to keep up with
                the times.
              </p>
            </div>
          </ParallaxBannerLayer>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
