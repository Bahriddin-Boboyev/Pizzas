import { useState, useEffect } from "react";
import { toast } from "react-toastify";
const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [controller, setController] = useState(0);

  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;
    try {
      setLoading(true);
      if (requestConfig?.data) {
        const res = await axiosInstance[method.toLowerCase()](
          url,
          {
            ...requestConfig?.data,
          },
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
      toast.update(2, {
        render: "done",
        type: "success",
        hideProgressBar: true,
        autoClose: 1500,
        isLoading: false,
      });
    } catch (error) {
      const error_msg = error?.response?.data?.error;
      setError(error_msg ? error_msg : error.message);

      // toast error
      toast.update(2, {
        render: error_msg ? error_msg : error,
        type: "error",
        hideProgressBar: true,
        autoClose: 1500,
        isLoading: false,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxiosFunction;
