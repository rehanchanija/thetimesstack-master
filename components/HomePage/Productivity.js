import React from "react";

const Productivity = () => {
  return (
    <div
      className="sm:py-[200px] py-20 h-full w-full  bg-cover bg-no-repeat  "
      style={{
        backgroundImage: `url(/productbg.png)`,
        width: "100",
        height: "100",
        backgroundSize: 1600,
        // backgroundPosition: "center",
      }}
    >
      <div className="sm:flex sm:max-w-6xl sm:m-auto">
        <div className="sm:w-3/5   mx-3 rounded-3xl bg-gradient-to-br from-[#513b3d] to-[#895245]">
          <div className="sm:text-4xl text-3xl  pl-5 font-bold  sm:pl-10 sm:space-y-5  sm:py-10 py-5">
            <h2 className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
              Productivity made
            </h2>
            <h2 className="bg-gradient-to-r from-orange-300  text-transparent bg-clip-text">
              more productive.
            </h2>
          </div>
          <div className="  p-3 rounded-3xl">
            <video
              autoPlay
              toop
              muted
              src="/ProductivityVideo.mp4 "
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="sm:w-2/5 mx-5 flex flex-col justify-end sm:px-10 space-y-5 sm:pl-20 sm:pb-5 py-5 ">
          <div className="sm:text-4xl  text-3xl font-bold  ">
            <h2 className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">
              Your tools. Buffed up and swole.
            </h2>
          </div>
          <div className="text-xl font-medium text-slate-400  ">
            <p>
              With Neverinstall, you can run Slack, Telegram, and Discord
              seamlessly, without halting a vital conversation, community
              outreach, or business meeting. Ever.
            </p>
          </div>
          <div className="text-xl font-medium bg-gradient-to-r from-orange-300 to-red-200 bg-clip-text text-transparent">
            <a>Boost your productivity now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
