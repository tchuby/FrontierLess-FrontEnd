import axios from "axios";

export const getMyProjects = async () => {
    try {
        const response = await axios.get("https://mock-4dda0bd4a6c04cea89ac430119f71477.mock.insomnia.rest/myProjects");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        throw error;
    }
};