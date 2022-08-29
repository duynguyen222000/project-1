import axios from "axios";
import { DOMAIN_PRODUCT } from "../util/contants/contantsAll";

const productServices = {
  getAllProduct: () => {
    return axios.get(`${DOMAIN_PRODUCT}/GetAll`);
  },
  addProduct: (productData) => {
    return axios.post(`${DOMAIN_PRODUCT}/CreateProduct`, productData);
  },
  deleteProduct: (id) => {
    return axios.delete(`${DOMAIN_PRODUCT}/DeleteProduct/${id}`);
  },
  updateProduct: (id, data) => {
    return axios.put(`${DOMAIN_PRODUCT}/UpdateProduct/${id}`, data);
  },
};
export default productServices;
