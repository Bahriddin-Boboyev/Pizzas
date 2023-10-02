import { axios } from "../apis";

export const getMe = (axiosFetch) => {
  axiosFetch({
    axiosInstance: axios(),
    method: "GET",
    url: "/users/me",
  });
};
