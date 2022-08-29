import { all } from "redux-saga/effects";
import {
  followAddProductSaga,
  followDeleteProductSaga,
  followGetAllProductSaga,
  followUpdate,
} from "./productSaga";
import { followLoginSaga } from "./userSaga";
function* rootSaga() {
  yield all([
    followLoginSaga(),
    followGetAllProductSaga(),
    followAddProductSaga(),
    followDeleteProductSaga(),
    followUpdate(),
  ]);
}
export default rootSaga;
