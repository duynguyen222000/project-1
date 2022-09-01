import { call, takeLatest, put } from "redux-saga/effects";
import productServices from "../../services/productServices";
import { getListProductAction } from "../actions/productAction";
import {
  ADD_PRODUCT_API,
  DELETE_PRODUCT_API,
  GET_ALL_PRODUCT_API,
} from "../contants/contants";

function* getAllProductSaga() {
  const { data, status } = yield call(productServices.getAllProduct);
  yield put(getListProductAction(data));
}
function* followGetAllProductSaga() {
  yield takeLatest(GET_ALL_PRODUCT_API, getAllProductSaga);
}
//add product saga
function* addProductSaga({ payload }) {
  console.log(payload);
  const { data, status } = yield call(() => {
    return productServices.addProduct(payload);
  });
  yield put({
    type: GET_ALL_PRODUCT_API,
  });
}
function* followAddProductSaga() {
  yield takeLatest(ADD_PRODUCT_API, addProductSaga);
}
// delete product saga
function* deleteProductSaga({ payload }) {
  const { data, status } = yield call(() =>
    productServices.deleteProduct(payload)
  );
  yield put({
    type: GET_ALL_PRODUCT_API,
  });
}
function* followDeleteProductSaga() {
  yield takeLatest(DELETE_PRODUCT_API, deleteProductSaga);
}
function* updateProductSaga(payload) {
  console.log("payload", payload);
  const { data, status } = yield call(() => {
    return productServices.updateProduct(payload.id, payload.data);
  });
  yield put({
    type: GET_ALL_PRODUCT_API,
  });
}
function* followUpdate() {
  yield takeLatest("test_api_update", updateProductSaga);
}
export {
  followGetAllProductSaga,
  followAddProductSaga,
  followDeleteProductSaga,
  followUpdate,
};
