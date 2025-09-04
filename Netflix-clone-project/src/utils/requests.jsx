const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
  fetchAction:`/genre/movie?api_key=${API_KEY}&with_genres=28`
};

















