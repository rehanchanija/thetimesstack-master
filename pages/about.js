import Image from "next/image";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import "react-awesome-slider/dist/styles.css";

const about = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="bg-white ">
      <div className="md:flex pt-20 bg-white max-w-[1200px] mx-auto px-5   ">
        <div className="md:w-1/2 space-y-5 md:space-y-12 pr-12 text-lg text-gray-600 ">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-700">
            About Us
          </h1>
          <p>
            <span className="text-slate-700 font-medium">The Time Stack</span>{" "}
            is a platform where you get fastest loading web templates and ready
            to deploy web applications which are fully functional and built woh
            complete features
          </p>
          <p>
            We have built this templates with team of expert UI designers and
            developers , product managers and has been successfully usedby
            different Startup and Enterprises
          </p>
          <p>
            As we are more focused in User experience and page speed we use best
            front end web framework Nextjs which use javascript programming
            language and JS library react this technology is built by facebook
            and instagram team do better user experience
          </p>
          <p>
            Nextjs is used by top brands like Netflix ,Marvel ,wallmart ,Nike ,
            discovery ,vodafone etc it gives user best in class experienceand
            many other top brands
          </p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 ">
          <Image
            src="/appsDark.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="pt-10 px-5 md:px-0">
        <div className="text-center space-y-5 py-10">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-700">
            Our Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl m-auto">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
      </div>
      <div className=" pb-14 ">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={5000}
          className="  h-[160px] md:h-[400px] xl:h-[600px]"
        >
          <div>
            <Image
              src="/showguru.png"
              alt="Picture of the author"
              width={2000}
              height={3000}
            />
          </div>
          <div>
            <Image
              src="/kyks.png"
              alt="Picture of the author"
              width={2000}
              height={3000}
            />
          </div>
          <div>
            <Image
              src="/chikupos.png"
              alt="Picture of the author"
              width={2000}
              height={3000}
            />
          </div>
          <div>
            <Image
              src="/loadin.png"
              alt="Picture of the author"
              width={2000}
              height={3000}
            />
          </div>
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default about;
