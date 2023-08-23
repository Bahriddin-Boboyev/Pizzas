import axios from "axios";
const BASE_URL = "https://pizza-v1ci.onrender.com/";

const axiosFunc = (params) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    params,
  });
};

export default axiosFunc;
