//GET /product/:accountname
import { api } from '../baseURL';

export const readProductList = async (accountname) => {
  const { data } = await api.get('/product/' + accountname);
  return data;
};

// 상품 삭제
export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/product/${id}`);
  return data;
};
