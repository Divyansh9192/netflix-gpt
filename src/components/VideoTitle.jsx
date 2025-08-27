const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl text-white font-bold">{title}</h1>
      <p className="py-6 text-lg text-white w-4/12 ">{overview}</p>
      <div className="my-4">
        <button className="border  bg-white text-black mx-1 p-4 px-12 cursor-pointer font-bold rounded-lg hover:opacity-80  ">
          Play
        </button>
        <button className="border bg-gray-400 mx-1 p-4 px-12 text-white cursor-pointer rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
