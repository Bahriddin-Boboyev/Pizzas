import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosFunc = (params) => {
  if (params) {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      params,
    });
  } else {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
};

export default axiosFunc;
