import { useEffect } from 'react';
import { useContext } from 'react';
import { DataContext } from '@/context';
import { useAxiosFunction } from '@/hooks';
import { getMe } from './';

export const IsLoggedInUser = () => {
  const { getSendTypes } = useContext(DataContext);
  // eslint-disable-next-line
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
