import React from "react";
import { Parallax } from "react-parallax";

const ParallaxContainer = ({ bgImage, strength, content }) => {
  return (
    <Parallax bgImage={bgImage} strength={strength}>
      <div className="item">{content}</div>
    </Parallax>
  );
};

export default ParallaxContainer;
