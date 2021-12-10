import axios from "axios";

const apiAxios = axios.create({
  baseURL: "http://localhost:1337/",
});

export default apiAxios;
