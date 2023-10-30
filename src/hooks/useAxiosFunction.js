import { useState } from "react";
import { toastNotification, getRefreshToken } from "../helpers";
import { useNavigate } from "react-router-dom";

const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const axiosFetch = async (configObj) => {
    if (configObj === "clear") {
      setResponse([]);
      setError();
      setLoading(false);
      return;
    }

    const { axiosInstance, method, url, requestConfig = {} } = configObj;
    try {
      setLoading(true);
      if (requestConfig?.data) {
        const res = await axiosInstance[method.toLowerCase()](
          url,
          { ...requestConfig?.data },
          { ...requestConfig },
        );
        setResponse(res.data);
      } else {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
        });
        setResponse(res.data);
      }
      // toast success
      toastNotification(2, "success", "You have successfully registered!");

      setError(null);
    } catch (error) {
      const error_msg = error?.response?.data?.error;
      setError(error_msg ? error_msg : error.message);

      console.log(error);

      if (error?.code === "ERR_NETWORK") {
        navigate("/network-error");
      }
      // get refresh token
      if (error?.response?.data?.error === "jwt expired") {
        await getRefreshToken();
      }

      // toast error
      toastNotification(2, "error", `error: ${error_msg}`);
    } finally {
      setLoading(false);
    }
  };

  return [response, error, loading, axiosFetch];
};

export default useAxiosFunction;
