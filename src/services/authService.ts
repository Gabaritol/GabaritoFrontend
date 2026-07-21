import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export interface LoginPasswordPayload {
    email: string;
    password: string;
}

export interface LoginUserCodePayload {
    email: string;
    code: string;
}

export interface RequestCodeMailPayload {
    email: string;
}

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export const authService = {
    registerUser: async (email: string): Promise<void> => {
        await api.post("/register", { email });
    },

    loginWithCode: async (payload: LoginUserCodePayload): Promise<void> => {
        await api.post("/login/code", payload);
    },

    loginWithPassword: async (payload: LoginPasswordPayload): Promise<void> => {
        await api.post("/login/password", payload);
    },

    requestCodeMail: async (payload: RequestCodeMailPayload): Promise<void> => {
        await api.post("/login/request-code", payload);
    },
};
