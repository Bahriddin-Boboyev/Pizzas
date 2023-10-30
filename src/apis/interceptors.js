import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
let token = localStorage.getItem("token");

if (token) token = JSON.parse(token);

export const axiosFunc = (params, withCredentials) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    params: params && params,
    withCredentials: withCredentials && true,
  });
};
