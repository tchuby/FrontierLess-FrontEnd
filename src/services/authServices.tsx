import { useUser } from "@/contexts/userContext";
import axios from "axios";

const API_URL = "http://localhost:3000/login";

export const login = async (formData: any) => {
    const { setEmail } = useUser();
    try {
        const response = await axios.post(API_URL, formData, {
            withCredentials: true
        });
        const parsedData = JSON.parse(response.config.data);
        const email = parsedData.email;
        setEmail(email);

        return response.data;
    } catch (error) {
        throw error;
    }
};