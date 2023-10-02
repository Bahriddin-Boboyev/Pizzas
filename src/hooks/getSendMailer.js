import { axios } from "../apis";

export const getSendMailer = (axiosFetch) => {
  axiosFetch({
    axiosInstance: axios(),
    method: "GET",
    url: "/sendmail",
    requestConfig: {},
  });
};
