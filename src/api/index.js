const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
const apiKey = process.env.NEXT_PUBLIC_APIKEY;

export const getMovieApi = async (pref) => {
  const movieApi = await fetch(`${baseUrl}/${pref}?api_key=${apiKey}`);
  const data = await movieApi.json();
  return data;
};

export const getSearchMovieApi = async (query) => {
  const movieApi = await fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
  );
  const data = await movieApi.json();
  return data;
};

export const getPopularMovie = async (query) => {
  const movieApi = await fetch(
    `${baseUrl}/movie/popular?api_key=${apiKey}&page=${query}`
  );
  const data = await movieApi.json();
  return data;
};

export const getUpcomingMovie = async (query) => {
  const movieApi = await fetch(
    `${baseUrl}/movie/upcoming?api_key=${apiKey}&page=${query}`
  );
  const data = await movieApi.json();
  return data;
};
