import { all } from "redux-saga/effects";
import { followLoginSaga } from "./userSaga";
function* rootSaga() {
  yield all([followLoginSaga()]);
}
export default rootSaga;
