import axios from "axios";

const API_URL = "http://localhost:3000/project/projects";

export const getProjects = async () => {
    try {
        const response = await axios.get(API_URL, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        throw error;
    }
};
