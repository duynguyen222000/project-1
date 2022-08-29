import { GET_LIST_PRODUCT_API } from "../contants/contants";

const initialState = {
  listProduct: [
    {
      // id: "123",
      // name: "IPHONE 13 PRO MAX",
      // price: "11000",
      // img: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1051159192.jpeg",
      // description: "dien thoai",
      // type: "mobile",
    },
  ],
  productUpdate: {},
};

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_PRODUCT_API:
      state.listProduct = payload;
      return { ...state };
    case "test_update":
      console.log("payload", payload);
      const product = state.listProduct.filter((item) => item.id === payload);
      state.productUpdate = product[0];
      console.log("test_update", state.productUpdate);
      return { ...state };
    default:
      return state;
  }
};
export default ProductReducer;
