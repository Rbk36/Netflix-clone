import { useEffect } from "react";
import "./row.css";
import { useState } from "react";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import Slider from "react-slick";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "http://image.tmdb.org/t/p/w500";
  console.log(fetchUrl);
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10, // Number of cards visible
    slidesToScroll: 10,
  
    responsive: [
      {
        breakpoint: 690,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
    <div className="row">
      <h1>{title}</h1>
      <Slider {...settings} className="row_posters slider-container">
        {movies?.map((movie, index) => (
           <div key={index}>
          <img
            onClick={() => handleClick(movie)}
           
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
          />
          </div>
        ))}
      </Slider>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
    </>
  );
};
export default Row;
