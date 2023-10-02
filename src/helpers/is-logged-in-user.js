import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../context";
import { getMe, useAxiosFunction } from "../hooks";

export const IsLoggedInUser = () => {
  const { getSendTypes } = useContext(DataContext);
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  useEffect(() => {
    getMe(axiosFetch);
  }, []);

  useEffect(() => {
    if (response?.data) {
      getSendTypes({ isLoggedIn: true, meInfo: response.data });
    } else {
      getSendTypes({ isLoggedIn: false });
    }
  }, [response]);
};
