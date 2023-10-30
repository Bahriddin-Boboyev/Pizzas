import { axios } from "../../apis";

export const getProducts = (axiosFetch, category) => {
  axiosFetch({
    axiosInstance: axios({
      page: { limit: 100, offset: 0 },
      filters: { category },
    }),
    method: "GET",
    url: "/product",
    requestConfig: {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZmQxNTcyMWZiNmFmZDk0OWY2NzI3IiwiYWRtaW4iOnRydWV9LCJpYXQiOjE2OTE1MDE2MTIsImV4cCI6MTY5MTU4ODAxMn0.X2RsUeAkbIc1ug0N3ZXMU8eDC9DAxt6HMtkc_fBHtc4",
      },
    },
  });
};