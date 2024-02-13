import { axios } from '@/apis';

export const postOrder = (axiosFetch, data) => {
  axiosFetch({
    axiosInstance: axios(),
    method: 'POST',
    url: '/order',
    requestConfig: {
      data,
    },
  });
};
