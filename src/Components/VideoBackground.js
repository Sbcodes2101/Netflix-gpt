import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  //   fetch trailer video and updating the store with the trailer video
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="bg-black">
      <iframe
        className="w-[120vw] h-[120vh]"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
