// // import { useEffect, useState } from "react";
// // import "./banner.css";
// // import requests from "../../utils/requests";
// // import axios from "../../utils/axios";
// // import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
// // import InfoOutlineSharpIcon from "@mui/icons-material/InfoOutlineSharp";
// // import YouTube from "react-youtube";
// // import movieTrailer from "movie-trailer";

// // const Banner = () => {
// //   const [movie, setMovie] = useState({});
// //   const [trailerUrl, setTrailerUrl] = useState("");

// //   useEffect(() => {
// //     (async () => {
// //       try {
// //         const request = await axios.get(requests.fetchTopRated);
// //         console.log(request);
// //         setMovie(
// //           request.data.results[
// //             Math.floor(Math.random() * request.data.results.length)
// //           ]
// //         );
// //       } catch (error) {
// //         console.log("error", error);
// //       }
// //     })();
// //   }, []);

// //   const handleClick = (movie) => {
// //     if (trailerUrl) {
// //       setTrailerUrl("");
// //     } else {
// //       movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
// //         (url) => {
// //           const urlParams = new URLSearchParams(new URL(url).search);
// //           setTrailerUrl(urlParams.get("v"));
// //         }
// //       );
// //     }
// //   };
// //   const opts = {
// //     width: "100%",
// //     height: "390",
// //     playerVars: {
// //       autoplay: 1,
// //     },
// //   };
// //     const moreInfo = (movie) => {
// //       {movie?.overview ? setTrailerUrl("") : movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
// //         (url) => {
// //           const urlParams = new URLSearchParams(new URL(url).search);
// //           setTrailerUrl(urlParams.get("v"));
// //         }
// //       )
// //   };}
// //   return (
// //     <>
// //       <div
// //         className="banner"
// //         style={{
// //           backgroundSize: "cover",
// //           backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
// //           backgroundPosition: "center",
// //           backgroundRepeat: "no-repeat",
// //         }}
// //       >
// //         <div className="banner_contents">
// //           <h1 className="banner_title">
// //             {movie?.title || movie?.name || movie?.original_name}
// //           </h1>
// //           <div className="banner_buttons ">
// //             <button
// //               onClick={() => handleClick(movie)}
// //               className="banner_button_play center"
// //             >
// //               <PlayArrowSharpIcon />
// //               <p>Play</p>
// //             </button>
// //             <button 
// //             onClick={() => moreInfo(movie)}
// //             className="banner_button center">
// //               <InfoOutlineSharpIcon />
// //               <p>More Info</p>
// //             </button>
// //           </div>
// //           <h1 className="banner_description">
// //             {movie?.overview?.length > 150
// //               ? `${movie.overview.slice(0, 150)}...`
// //               : movie?.overview}
// //           </h1>
// //         </div>
// //         <div className="banner_fadeBottom"></div>
    
// //       <div style={{ padding: "40px" }}>
// //         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
// //       </div>
// //     </div>
// //     </>
// //   );
// // }}
// // export default Banner;
// import { useEffect, useState } from "react";
// import "./banner.css";
// import requests from "../../utils/requests";
// import axios from "../../utils/axios.js";
// import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
// import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
// const Banner = () => {
//   const [movie, setMovie] = useState(null);
//  const [trailerUrl, setTrailerUrl] = useState("");
//    const [description, setDescription] = useState('');


//   useEffect(() => {
//     (async () => {
//       try {
//         const request = await axios.get(requests.fetchTopRated);
//         console.log(request);
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );
//       } catch (error) {
//         console.log("error", error);
//       }
//     })();
//   }, []);

//     const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
//         (url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         }
//       );
//     }
//   };

//   //   const moreInfo = (movie) => {
//   //     console.log(movie.overview);
//   //     {movie?.overview ? setTrailerUrl("") : movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
//   //       (url) => {
//   //         const urlParams = new URLSearchParams(new URL(url).search);
//   //         setTrailerUrl(urlParams.get("v"));
//   //       }
//   //     )
//   // };}



//   const moreInfo = (movie) => {
//     if (movie?.overview) {
//       setDescription(movie.overview);
//       setTrailerUrl('');
//     } else {
//       // Optional: fetch trailer if no overview
//       movieTrailer(movie?.title || movie?.name || movie?.original_name).then((url) => {
//         const urlParams = new URLSearchParams(new URL(url).search);
//         setTrailerUrl(urlParams.get('v'));
//       });
//     }
//   };

  

//    const opts = {
//     width: "100%",
//     height: "390",
//     playerVars: {
//       autoplay: 1,
//     },
//   };


//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons card-header">
//           <button 
//            onClick={() => handleClick(movie)}
//           className="banner_button_play">
//             <PlayArrowSharpIcon className="play" /> Play
//           </button>
          
  
//           <button 
//             onClick={() => moreInfo(movie)}
//           className="banner_button btn btn-primary"><InfoOutlineIcon/>More Info</button>
//         </div>
// {description && (
//         <div className="card-body">
//           <p>{description}</p>
//         </div>
//       )}
//         <h1 className="banner_description">
//           {movie?.overview.length > 150
//             ? `${movie?.overview.slice(0, 150)}...`
//             : movie?.overview}
//         </h1>
//       </div>
//       <div className="banner_fadeBottom"></div>
//        <div style={{ padding: "40px" }}>
// //         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
// //       </div>
//     </div>
//   );
// };

// export default Banner;

// import { useEffect, useState } from "react";
// import "./banner.css";
// import requests from "../../utils/requests";
// import axios from "../../utils/axios.js";
// import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
// import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

// const Banner = () => {
//   const [movie, setMovie] = useState(null);
//   const [trailerUrl, setTrailerUrl] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     (async () => {
//       try {
//         const request = await axios.get(requests.fetchTopRated);
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );
//       } catch (error) {
//         console.error("Error fetching top-rated movies:", error);
//       }
//     })();
//   }, []);

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name)
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.error("Trailer not found:", error));
//     }
//   };

//   const moreInfo = (movie) => {
//     if (movie?.overview) {
//       setDescription(movie.overview);
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name)
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.error("Trailer not found:", error));
//     }
//   };

//   const opts = {
//     width: "100%",
//     height: "390",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//   <>
//     <div
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>

//         <div className="banner_buttons card-header">
//           <button onClick={() => handleClick(movie)} className="banner_button_play">
//             <PlayArrowSharpIcon className="play" /> Play
//           </button>

//           <button onClick={() => moreInfo(movie)} className="banner_button">
//             <InfoOutlineIcon /> More Info
//           </button>
//         </div> */}

//         <h1 className="banner_description">
//           {movie?.overview?.length > 150
//             ? `${movie.overview.slice(0, 150)}...`
//             : movie?.overview}
//         </h1>
//       </div>

//       <div className="banner_fadeBottom"></div>

//       <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </div>

//     {/* 👇 Card Template Below Banner */}
//     {description && (
//       <div className="card m-4 shadow">
//         <div className="card-body">
//           <h5 className="card-title">Movie Description</h5>
//           <p className="card-text">{description}</p>
//         </div>
//       </div>
//     )}
//   </>
// );

// };

// export default Banner;

import { useEffect, useState } from "react";
import "./banner.css";
import requests from "../../utils/requests";
import axios from "../../utils/axios.js";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchTopRated);
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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error("Trailer not found:", error));
    }
  };

  const moreInfo = (movie) => {
    if (movie?.overview) {
      setDescription(movie.overview);
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error("Trailer not found:", error));
    }
  };

  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };

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

        <div className="banner_buttons_wrapper">
          <div className="banner_buttons">
            <button onClick={() => handleClick(movie)} className="banner_button_play">
              <PlayArrowSharpIcon className="play" /> Play
            </button>

            <div className="info_button_container">
              <button onClick={() => moreInfo(movie)} className="banner_button btn btn-primary">
                <InfoOutlineIcon /> More Info
              </button>

              {description && (
                <div className="info_card">
                  <h5 className="card-title">Movie Description</h5>
                  <p className="card-text">{description}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {trailerUrl && (
          <div className="trailer_embed">
            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
        )}

        <h1 className="banner_description">
          {movie?.overview?.length > 150
            ? `${movie.overview.slice(0, 150)}...`
            : movie?.overview}
        </h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
