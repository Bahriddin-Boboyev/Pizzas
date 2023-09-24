import { axios } from "../apis";

export const getCategory = (axiosFetch) => {
  axiosFetch({
    axiosInstance: axios({
      page: { limit: 100, offset: 0 },
    }),
    method: "GET",
    url: "/category",
    requestConfig: {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZDM2MTAyMjg3MjUyZDBmNmQ2NjFkIiwiYWRtaW4iOnRydWV9LCJpYXQiOjE2OTU0ODc3MzYsImV4cCI6MTY5NTU3NDEzNn0.s3argiq3Wkc6_TP4Fsgqru1wpfQpdF0SSebVA9cQyEs",
      },
    },
  });
};
