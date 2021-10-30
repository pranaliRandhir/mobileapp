import axios from "axios";

import AppConstant from "../app-constant";

const instance = axios.create({
  baseURL: AppConstant.BASE_URL,
  timeout: AppConstant.API_TIMEOUT,
  headers: { "Content-Type": "application/json" },
});

export default instance;
