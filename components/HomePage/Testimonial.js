import Image from "next/image";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import "react-awesome-slider/dist/styles.css";

const Testimonial = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="items-center flex justify-center  ">
      <AutoplaySlider
        play={true}
        bullets={false}
        fillParent={false}
        organicArrows	={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
        className="  h-[180px] md:h-[300px] xl:h-[300px] text-center "
      >
        <div className="text-center bg-green-300 w-full">
          <figure className=" text-center  bg-[#192645] w-full">
            <svg
              aria-hidden="true"
              className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium  text-yellow-200 dark:text-white">
                &quot; TheTimeStack is just awesome. It contains tons of
                predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS
                application. &quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <Image
            src="/showlogo.webp"
            alt="Picture of the author"
            width={200}
            height={300}
            // className=" h-20 w-20 md:h-[400px] xl:h-[100px]"
          />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-white dark:text-white">
                  Micheal Gough
                </cite>
                              </div>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="text-center  bg-[#192645] w-full">
            <svg
              aria-hidden="true"
              className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-yellow-200 dark:text-white">
                &quot; TheTimeStack is just awesome. It contains tons of
                predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS
                application. &quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-white dark:text-white">
                  Micheal Gough
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="text-center  bg-[#192645] w-full">
            <svg
              aria-hidden="true"
              className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-yellow-200 dark:text-white">
                &quot; TheTimeStack is just awesome. It contains tons of
                predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS
                application. &quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-white dark:text-white">
                  Micheal Gough
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="text-center  bg-[#192645] w-full">
            <svg
              aria-hidden="true"
              className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-yellow-200 dark:text-white">
                &quot; TheTimeStack is just awesome. It contains tons of
                predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS
                application. &quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-white dark:text-white">
                  Micheal Gough
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Testimonial;
