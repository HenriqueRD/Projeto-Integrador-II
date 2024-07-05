import Cookies  from "js-cookie";
import axios from "axios";

const token = Cookies.get("tokenJWT")
export const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Authorization': token && `Bearer ${token}`
    }
})