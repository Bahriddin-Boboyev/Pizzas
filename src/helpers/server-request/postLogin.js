import { axios } from "../../apis";
export const postLogin = (axiosFetch, data) => {
  const withCredentials = true;
  axiosFetch({
    axiosInstance: axios(null, withCredentials),
    method: "POST",
    url: "/login",
    requestConfig: {
      data,
    },
  });
};
