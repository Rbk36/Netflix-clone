import React, { useEffect, useState } from "react";
import requests from "../../utils/requests";
import axios from "../../utils/axios.js";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import "./banner.css";
const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchTopRated);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button_play">
            <PlayArrowSharpIcon className="play" /> Play
          </button>
          <button className="banner_button"><InfoOutlineIcon/> My List</button>
        </div>

        <h1 className="banner_description">
          {movie?.overview.length > 150
            ? `${movie?.overview.slice(0, 150)}...`
            : movie?.overview}
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
