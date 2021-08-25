import React from "react";

const HomeTopBanner = () => {
  return (
    <div
      className="bg-blue-200 bg-cover bg-fixed bg-center bg-no-repeat rounded-xl"
      style={{
        backgroundImage: `url("https://i.ibb.co/KWyrQLQ/bc625798239927-5ed7bc86159b6-1.jpg")`,
        height: "50vh",
      }}
    >
      <div className="container flex justify-between">
        <div className=" lg:py-64 md:py-32 sm:py-32 lg:pl-7">
          <div className=" lg:text-8xl md:text-5xl sm:text-4xl font-fatKidFont">
            Seize Your <em className=" text-halloweenOrange">Vacation</em>
          </div>
          <div className="lg:text-2xl md:text-md sm:text-md font-semibold">
            Discover books to guide you on the road to self-care.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBanner;
