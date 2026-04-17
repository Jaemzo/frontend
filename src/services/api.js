const API_KEY = "762c2b2f2666c860440d3105f744134f";
const BASE_URL = "http://localhost:3000/game";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query,
    )}`,
  );
  const data = await response.json();
  return data.results;
};
