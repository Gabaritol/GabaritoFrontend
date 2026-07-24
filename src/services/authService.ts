import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            window.location.href = "/";
        }
        return Promise.reject(error);
    },
);

export const authService = {
    registerUser: async (email: string): Promise<void> => {
        await api.post("/register", { email });
    },

    loginWithCode: async (payload: {
        email: string;
        code: string;
    }): Promise<void> => {
        await api.post("/login/code", payload);
    },

    loginWithPassword: async (payload: {
        email: string;
        password: string;
    }): Promise<void> => {
        await api.post("/login/password", payload);
    },

    requestCodeMail: async (payload: { email: string }): Promise<void> => {
        await api.post("/login/request-code", payload);
    },
};
