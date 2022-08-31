import {
  ADD_TO_CART,
  DELETE_PRODUCT_CART,
  GET_LIST_PRODUCT_API,
} from "../contants/contants";

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
  cart: [],
  total: 0,
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
    case ADD_TO_CART:
      state.cart = JSON.parse(localStorage.getItem("cart"));

      let index = state.cart.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.cart[index].amount += 1;
      } else {
        state.cart = [...state.cart, { ...payload, ["amount"]: 1 }];
      }
      state.total = state.cart.reduce((a, b) => (a += b.amount), 0);
      console.log("total", state.total);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", state.total);

      return { ...state };
    case DELETE_PRODUCT_CART:
      state.cart = JSON.parse(localStorage.getItem("cart"));
      console.log("statecart", state.cart);
      let i = JSON.parse(localStorage.getItem("cart")).findIndex(
        (item) => item.id === payload.id
      );
      if (i !== -1) {
        state.cart.splice(i, 1);
      }
      state.total = state.cart.reduce((a, b) => (a += b.amount), 0);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", state.total);

      return { ...state };
    default:
      return state;
  }
};
export default ProductReducer;
