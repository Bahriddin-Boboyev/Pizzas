import { axios } from '@/apis';

export const getCategory = (axiosFetch) => {
  axiosFetch({
    axiosInstance: axios({
      page: { limit: 100, offset: 0 },
    }),
    method: 'GET',
    url: '/category',
  });
};
