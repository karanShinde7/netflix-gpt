export const GET_API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_API_KEY
  },
};

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY;
