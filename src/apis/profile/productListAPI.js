//GET /product/:accountname
import { api } from '../baseURL';

export const readProductList = async (accountname) => {
  const { data } = await api.get('/product/' + accountname);
  return data;
};
