import React from "react";

const CodePage = () => {
  return (
    <div
      className="  py-12 sm:py-0  xl:py-[200px] h-full w-full bg-cover "
      style={{
        backgroundImage: `url(/codebg.png)`,
        width: "100",
        height: "100",
      }}
    >
      <div className="sm:flex sm:max-w-6xl sm:m-auto">
        <div className="sm:w-3/5  rounded-3xl bg-gradient-to-br from-[#292a69] mx-3  to-[#392f7d]">
          <div className="text-4xl font-bold pl-5 sm:pl-10 sm:space-y-5 py-5 sm:py-10">
            <h2 className="bg-gradient-to-r from-blue-300 to-pink-400 text-transparent bg-clip-text">
              Custom software
            </h2>
            <h2 className="bg-gradient-to-r from-blue-300  text-transparent bg-clip-text">
              development
            </h2>
          </div>
          <div className="  p-3 rounded-3xl">
            <video
              autoPlay
              toop
              muted
              src="/code.mp4 "
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="sm:w-2/5 flex flex-col justify-end sm:px-10 sm:space-y-5 pl-5 sm:pl-20 sm:pb-5">
          <div className="text-4xl font-bold py-6 sm:py-0  sm:px-0 ">
            <h2 className="bg-gradient-to-r from-slate-400 to-pink-200 text-transparent bg-clip-text"></h2>
          </div>
          <div className="sm:text-xl text-lg  font-medium text-slate-400  ">
            <p>
              THETIMESTACK build software tailored to your specific needs, using
              the latest technologies and best practices.
            </p>
          </div>
          <div className="text-xl font-medium bg-gradient-to-r from-slate-400 to-pink-200 bg-clip-text text-transparent  py-5 sm:py-5">
            <a></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
