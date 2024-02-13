import { axios } from '@/apis';

export const getProducts = (axiosFetch, category) => {
  axiosFetch({
    axiosInstance: axios({
      page: { limit: 100, offset: 0 },
      filters: { category },
    }),
    method: 'GET',
    url: '/product',
  });
};
