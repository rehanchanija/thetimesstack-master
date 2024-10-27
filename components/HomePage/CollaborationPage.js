import React from "react";

const CollaborationPage = () => {
  return (
    <div
      className="  py-20 sm:py-[200px] h-full w-full bg-cover "
      style={{
        backgroundImage: `url(/collabbg.png)`,
        width: "100",
        height: "100",
      }}
    >
      <div className="sm:max-w-6xl sm:m-auto mx-3">
        <div className="text-center sm:text-4xl  text-3xl font-bold space-y-5 bg-gradient-to-r from-green-300 to-blue-400 text-transparent bg-clip-text">
          <h2>Collaboration, like they are right here.</h2>
        </div>
        <div className="rounded-xl mt-10 p-3 bg-gradient-to-tr from-[#233962] to-[#2b7cb0]">
          <video
            autoPlay
            loop
            muted
            src="/collaborationVideo.mp4"
            type="video/mp4"
            className="rounded-xl "
          />
        </div>
        <div className="text-center text-4xl font-bold space-y-5 mt-10 bg-gradient-to-r from-green-300 to-blue-400 text-transparent bg-clip-text">
          <h2>Together equals real-time.</h2>
          <p className="text-lg text-gray-300 font-normal sm:px-56 ">Code together, create something, co-browse, or co-watch your favorite movies. Share your workspace and use applications with your team from anywhere, anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPage;
