import axios from "axios";

const apiAxios = axios.create({
  baseURL: "https://http://localhost:1337/",
});

export default apiAxios;
