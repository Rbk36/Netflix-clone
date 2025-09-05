// import.meta.env.VITE_API_KEY
const API_KEY = import.meta.env.VITE_API_KEY
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
  fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
  fetchAction: `/genre/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/genre/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomance: `/genre/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchHorror: `/genre/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentary: `/genre/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTVShow: `/tv/popular?api_key=${API_KEY}&language-en-US&page=1`,
};
export default requests;
