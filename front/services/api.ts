import axios from "axios";

const api = axios.create({
  baseURL: "https://api-imoveis-yrvf.onrender.com",
  timeout: 8000,
});

export default api;
