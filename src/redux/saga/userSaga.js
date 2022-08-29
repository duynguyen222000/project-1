import { takeLatest } from "redux-saga/effects";
import { LOGIN_SAGA } from "../contants/contants";
import { call } from "redux-saga/effects";
import UserServices from "../../services/UserLoginServices";
import { STATUS_CODE } from "../../util/contants/contantsAll";
function* loginSaga({ dataUser, navigate }) {
  try {
    let { data, status } = yield call(() => {
      return UserServices.loginSagaApi(dataUser);
    });
    if (STATUS_CODE.SUCCESS === status) {
      localStorage.setItem("access_token", data.content.accessToken);
      localStorage.setItem("avatar", data.content.avatar);
      console.log(data.content.avatar);
      navigate("/");
    }
  } catch (error) {
    console.log(error.message);
  }
}
function* followLoginSaga() {
  yield takeLatest(LOGIN_SAGA, loginSaga);
}

export { followLoginSaga };
