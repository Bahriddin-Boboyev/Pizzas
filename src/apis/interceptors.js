import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
let token = localStorage.getItem("token");

if (token) token = JSON.parse(token);

const axiosFunc = (params) => {
  if (params) {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
      params,
      withCredentials: true,
    });
  } else {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
      withCredentials: true,
    });
  }
};

export default axiosFunc;
