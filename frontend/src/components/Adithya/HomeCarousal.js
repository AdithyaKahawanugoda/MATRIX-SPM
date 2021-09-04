import React from "react";
import { Carousel } from "3d-react-carousal";

const HomeCarousal = () => {
  const slides = [
    <img
      src="https://i.ibb.co/CPj0sp3/788e1231394987-565223964b48b-1.jpg"
      alt="1"
    />,
    <img src="https://i.ibb.co/GVWBjmX/Post-2-1.jpg" alt="2" />,
    <img src="https://i.ibb.co/PDQdVmC/Nanda-new-tiles-1.jpg" alt="3" />,
    <img src="https://i.ibb.co/0rJpLPQ/Twenty-chickens3-1.jpg" alt="4" />,
    <img
      src="https://i.ibb.co/HnGnJfC/0a2c5791114015-5e2914b05db02-1-1.jpg"
      alt="5"
    />,
  ];

  return (
    <>
      <Carousel slides={slides} autoplay={false} arrows={false} />
      <div className="text-center text-2xl my-8">
        <button className="border border-2 px-3 py-1 font-boldTallFont rounded bg-gamboge">
          Explore
        </button>
      </div>
    </>
  );
};

export default HomeCarousal;
