import { axios } from "../apis";
export const postLogin = (axiosFetch, data) => {
  axiosFetch({
    axiosInstance: axios(),
    method: "POST",
    url: "/login",
    requestConfig: {
      data,
    },
  });
};
