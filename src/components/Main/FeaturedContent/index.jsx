import React from "react";

const FeaturedContent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-center font-bold text-gray-600 text-2xl border-b-[2px] border-green-500 pb-1">
        Featured Content
      </h1>
      <p className="text-sm text-gray-500 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error autem
        consectetur recusandae unde quasi id inventore commodi quibusdam
        doloribus omnis enim corrupti, nemo tenetur, facilis, quae sunt amet
        laboriosam soluta. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Laborum, quasi!
      </p>

      <video
        controls
        loop
        autoplay
        src="https://videos.pexels.com/video-files/2547258/2547258-uhd_2560_1440_30fps.mp4"
      ></video>
      {/* <img
          src="https://media1.tenor.com/m/3T3xFPRtMK0AAAAd/the-sound-of-music-sound-of-music.gif"
          alt=""
        /> */}
    </div>
  );
};

export default FeaturedContent;
