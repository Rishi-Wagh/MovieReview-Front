import axios from "axios";

//https://five-satr-movie-review-back.onrender.com
const client = axios.create({
  baseURL: "https://five-satr-movie-review-back.onrender.com/api",
});

export default client;
