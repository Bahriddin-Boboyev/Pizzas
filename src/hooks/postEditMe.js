import { axios } from "../apis";

export const postEditMe = (axiosFetch, data) => {
  axiosFetch({
    axiosInstance: axios(),
    method: "PATCH",
    url: "/users/me",
    requestConfig: {
      data,
    },
  });
};
