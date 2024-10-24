import axios from "axios";

const API_URL = "http://localhost:3000/login";

export const login = async (formData: any) => {
    try {
        const response = await axios.post(API_URL, formData, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};