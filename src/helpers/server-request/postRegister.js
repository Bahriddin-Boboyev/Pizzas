import { axios } from "../../apis";

export const postRegister = (axiosFetch, data) => {
  const withCredentials = true;
  axiosFetch({
    axiosInstance: axios(null, withCredentials),
    method: "POST",
    url: "/users",
    requestConfig: {
      data,
    },
  });
};
