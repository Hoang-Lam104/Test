import AxiosClient from './AxiosClient';
import { API } from '../api.contants';

const getGalleries = (config?: any) => {
  const url = API.GALLERIES;
  return AxiosClient.get(url, {
    ...config,
  });
};

export { getGalleries };