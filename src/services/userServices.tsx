import axios from "axios";

const API_URL = "http://localhost:3000/user";

export const createUser = async (formData: any) => {
    try {
        const response = await axios.post(API_URL, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserById = async (UserId: number) => {
    try {
        const response = await axios.get(`${API_URL}/${UserId}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
