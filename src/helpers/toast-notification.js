import { toast } from "react-toastify";

export const toastNotification = (id, type, msg) => {
  return toast.update(id, {
    render: msg,
    type,
    hideProgressBar: true,
    autoClose: 1500,
    isLoading: false,
  });
};
