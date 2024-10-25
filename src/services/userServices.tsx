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
