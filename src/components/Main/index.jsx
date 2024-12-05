import React from "react";
import GetStarted from "./GetStarted";
import SimplyFeatures from "./SimplyFeatures";
import FeaturedContent from "./FeaturedContent";

const Main = () => {
  return (
    <div>
      <GetStarted />
      <div className="p-[3.5rem] flex justify-between items-center">
        <SimplyFeatures
          imgSrc={
            "https://i.pinimg.com/236x/ba/76/62/ba76626b54d8c469ece8307259460a31.jpg"
          }
          title={"EASY TO EDIT"}
        />
        <SimplyFeatures
          imgSrc={
            "https://i.pinimg.com/236x/22/28/6e/22286e8d8fb18acb2f5f67f584d275b3.jpg"
          }
          title={"LAYERED PSD"}
        />
        <SimplyFeatures
          imgSrc={
            "https://i.pinimg.com/474x/d0/fd/79/d0fd793a98a1b1ac77d010726af68db5.jpg"
          }
          title={"READY TO GO"}
        />
      </div>
      <FeaturedContent />
    </div>
  );
};

export default Main;
