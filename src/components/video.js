import React from "react";

const Video = ({ref, vid, className, loop, controls}) => {
  return (
    <video
      className={className}
      loop={loop}
      controls={controls}
      ref={ref}
    >
      <source src={vid} type="video/mp4" />
      Your browser does not support the audio tag.
    </video>
  );
};

export default Video;
