import axios from "axios";

const url = import.meta.env.VITE_BASEURL;
const authtoken = import.meta.env.AUTHTOKEN;

export const apiRequest = axios.create({
  baseURL: `${url}api/`,
  headers: {
    Authorization: `Bearer ${authtoken}`,
  },
});
