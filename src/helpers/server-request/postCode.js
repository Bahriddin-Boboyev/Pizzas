import { axios } from "../../apis";

export const postCode = (axiosFetch, data) => {
  axiosFetch({
    axiosInstance: axios(),
    method: "POST",
    url: "/check-code",
    requestConfig: {
      data,
    },
  });
};
