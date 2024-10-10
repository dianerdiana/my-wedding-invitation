import axios, { AxiosInstance } from "axios";

const axis: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor untuk request
axis.interceptors.request.use(
  (config) => {
    // Tambahkan logic sebelum request dikirim, seperti menambahkan token
    const token = localStorage.getItem("authToken"); // Sesuaikan jika Anda menggunakan token dari localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Tangani error request
    return Promise.reject(error);
  }
);

export default axis;
