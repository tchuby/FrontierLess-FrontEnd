import axios from "axios";

const API_URL = "http://localhost:3000/project-item";

export const getItemsService = async (projectID: number) => {
    try {
        const response = await axios.get(`${API_URL}/project-items/${projectID}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Etapas:", error);
        throw error;
    }
};
