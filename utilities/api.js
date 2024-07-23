import axios from "axios";
// GET base URL from .env file
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const api = axios.create({ baseURL: `${BASE_URL}`, });
api.interceptors.request.use((req) => {
  let Data = localStorage.getItem("tokenChatBoat")
  if (Data) {
    req.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "Authorization": "Bearer " + Data,
    };
    return req;
  }
});
export const apiWithFormData = axios.create({ baseURL: `${BASE_URL}` });
apiWithFormData.interceptors.request.use((req) => {
  let token = localStorage.getItem("tokenChatBoat")
  if (token) {
    req.headers = {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      // "Authorization": "Bearer " + token,
    };
  }
  return req;
});

export default api;
