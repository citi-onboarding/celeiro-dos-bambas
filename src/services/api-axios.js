import axios from "axios";

const apiAxios = axios.create({
  baseURL: "https://celeiro-bambas-server.herokuapp.com/",
});

export default apiAxios;
