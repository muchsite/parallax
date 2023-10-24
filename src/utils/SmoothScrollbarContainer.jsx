import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
const SmoothScrollbarContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scrollbar = Scrollbar.init(containerRef.current);

      // Optional: Customize smooth-scrollbar behavior here
      scrollbar.track.xAxis.element.remove(); // Remove horizontal scrollbar
    }

    return () => {
      if (containerRef.current) {
        Scrollbar.destroy(containerRef.current);
      }
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default SmoothScrollbarContainer;
