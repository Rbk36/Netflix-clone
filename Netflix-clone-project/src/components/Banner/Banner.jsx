import { useEffect, useState } from "react";
import "./banner.css";
import requests from "../../utils/requests";
import axios from "../../utils/axios";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "./banner.css";
const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOrignals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
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
          <button className="banner_button_play">Play
            
            {/* <PlayCircleFilledWhiteIcon /> */}
          </button>
          <button className="banner_button">My List</button>
        </div>
        {/* <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1> */}
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
