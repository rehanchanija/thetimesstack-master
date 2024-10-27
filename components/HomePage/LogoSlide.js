import Image from "next/image";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import "react-awesome-slider/dist/styles.css";

const LogoSlide = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="pt-20 ">
      <AutoplaySlider
        play={true}
        bullets={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        className=" h-[80px] md:h-[400px] xl:h-[80px] bg-[#192645]"
      >
        <div className="flex  w-full justify-evenly bg-[#192645] h-20">
          <Image
            src="/showlogo.webp"
            alt="Picture of the author"
            width={200}
            height={300}
            className=""
          />
          <Image
            src="/kyks.webp"
            alt="Picture of the author"
            width={200}
            height={300}
            className=" hidden sm:flex"
            // className=" h-20 w-28 md:h-[400px] xl:h-[100px]"
          />
        </div>
        <div className="flex  w-full justify-evenly bg-[#192645] h-20">
          <Image
            src="/kyks.webp"
            alt="Picture of the author"
            width={200}
            height={300}
            // className=" h-20 w-28 md:h-[400px] xl:h-[100px]"
          />
          <Image
            src="/chiku-logo.png"
            alt="Picture of the author"
            width={200}
            height={300}
            className=" hidden sm:flex"
            // className=" h-20 w-28 md:h-[400px] xl:h-[100px]"
          />
        </div>
        <div className="flex  w-full justify-evenly bg-[#192645]">
          <Image
            src="/chiku-logo.png"
            alt="Picture of the author"
            width={200}
            height={300}
            // className=" h-20 w-28 md:h-[400px] xl:h-[100px]"
          />
          <Image
            src="/showlogo.webp"
            alt="Picture of the author"
            width={200}
            height={300}
            className=" hidden sm:flex"
            // className=" h-20 w-28 md:h-[400px] xl:h-[100px]"
          />
        </div>
        <div className="flex  w-full justify-evenly bg-[#192645]">
          <Image
            src="/cased.png"
            alt="Picture of the author"
            width={100}
            height={100}
            // className=" h-20 w-28 md:h-[400px] xl:h-[100px]"
          />
          <Image
            src="/logo-no-background.png"
            alt="Picture of the author"
            width={300}
            height={20}
            className=" hidden sm:flex"
            // className=" h-20 w-28 md:h-[400px] xl:h-[100px]"
          />
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default LogoSlide;
