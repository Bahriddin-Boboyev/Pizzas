import { axios } from "../apis";

export const getPing = (axiosFetch) => {
  axiosFetch({
    axiosInstance: axios(),
    method: "GET",
    url: "/ping",
  });
};
