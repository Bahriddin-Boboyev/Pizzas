import { axios } from "../apis";

export const getPing = (axiosFetch) => {
  axiosFetch({
    axiosInstance: axios(),
    method: "GET",
    url: "/ping",
    requestConfig: {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZDM2MTAyMjg3MjUyZDBmNmQ2NjFkIiwiYWRtaW4iOnRydWV9LCJpYXQiOjE2OTU0ODc3MzYsImV4cCI6MTY5NTU3NDEzNn0.s3argiq3Wkc6_TP4Fsgqru1wpfQpdF0SSebVA9cQyEs",
      },
    },
  });
};
