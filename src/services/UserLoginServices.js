import axios from "axios";
import { DOMAIN_USER } from "../util/contants/contantsAll";
const UserServices = {
  loginSagaApi: (dataUser) => {
    return axios.post(
      `${DOMAIN_USER}/signin
    `,
      dataUser
    );
  },
};
export default UserServices;
