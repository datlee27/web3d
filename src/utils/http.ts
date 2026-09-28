import type { AxiosInstance } from "axios";
import axios from "axios";
import Cookies from "js-cookie"
class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:8080",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // ✅ Thêm interceptor để tự gắn token
    this.instance.interceptors.request.use((config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
      return config;
    });

    // ✅ Xử lý lỗi 403
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 403) {
          // Xóa token nếu muốn
          Cookies.remove("token");

          // Điều hướng về trang đăng nhập
          setTimeout(() => {
            window.location.href = "/sign-in"; // hoặc "/login"
          }, 2000);
        }

        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
