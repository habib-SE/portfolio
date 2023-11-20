import React from "react";
import { HiArrowNarrowRight } from "../../node_modules/react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen  bg-[#0a192f]  ">
      <div className="max-w-[1000px] h-full px-8 flex flex-col mx-auto justify-center">
        <p className=" text-yellow-700">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Habib Ur Rahman
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          {" "}
          I'm a Front end Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {" "}
          I’m a Front end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive Front end web applications.
        </p>
        <div>
          <button className="border-2 group hover:border-yellow-700 hover:bg-yellow-700 flex items-center  border-white p-3 text-white">
            View Work
            <span className="group group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
