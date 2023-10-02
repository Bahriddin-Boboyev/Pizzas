import axios from "axios";
import { toast } from "react-toastify";

export const getRefreshToken = async () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  try {
    const { data } = await axios.get(`${BASE_URL}/refresh`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: true,
    });
    if (data?.data?.token) {
      const token = data.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      // window.location.replace("/error");
    }
  } catch (error) {
    toast.error(error?.response?.data.error);
    localStorage.removeItem("token");
  }
};
