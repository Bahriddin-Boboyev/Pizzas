import { axios } from "../apis";

export const postRegister = (axiosFetch, data) => {
  axiosFetch({
    axiosInstance: axios(),
    method: "POST",
    url: "/users",
    requestConfig: {
      data,
    },
  });
};
