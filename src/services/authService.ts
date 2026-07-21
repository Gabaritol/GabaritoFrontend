import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export interface UserProfile {
    id?: string;
    email: string;
    name?: string;
    avatarUrl?: string;
}

export interface VerifyCodePayload {
    email: string;
    code: string;
}

export interface UpdateUserPayload {
    name?: string;
    email?: string;
    avatarUrl?: string;
}

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export const authService = {
    requestCode: async (email: string): Promise<void> => {
        await api.post("/ainda vou adicionar", { email });
    },

    verifyCode: async (payload: VerifyCodePayload): Promise<UserProfile> => {
        const response = await api.post<UserProfile>(
            "/ainda vou adicionar",
            payload,
        );
        return response.data;
    },

    getProfile: async (): Promise<UserProfile> => {
        const response = await api.get<UserProfile>("/ainda vou adicionar");
        return response.data;
    },

    updateProfile: async (payload: UpdateUserPayload): Promise<UserProfile> => {
        const response = await api.put<UserProfile>(
            "/ainda vou adicionar",
            payload,
        );
        return response.data;
    },

    logout: async (): Promise<void> => {
        await api.post("/ainda vou adicionar");
    },
};
