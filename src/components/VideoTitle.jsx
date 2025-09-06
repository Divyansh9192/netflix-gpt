const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-square md:aspect-video pt-[65%] right-20 md:right-0 md:pt-[20%] px-24 absolute md:bg-gradient-to-r from-black">
      <h1 className="text-xl w-fit pt-[5%] md:pt-0 md:text-5xl text-white font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg text-white w-4/12 ">{overview}</p>
      <div className="my-4">
        <button className="hidden md:inline-block border  bg-white text-black mx-1 p-4 px-12 cursor-pointer font-bold rounded-lg hover:opacity-80  ">
          Play
        </button>
        <button className="hidden md:inline-block border bg-gray-400 mx-1 p-4 px-8 text-white cursor-pointer rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
