import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

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
