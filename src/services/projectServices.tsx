import axios from "axios";

const API_URL = "http://localhost:3000/project";

export const addProjectService = async (newProject: any) => {
    try {
        const response = await axios.post(API_URL, newProject, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao criar projetos:", error);
        throw error;
    }
};

export const deleteProjectService = async (projectID: number) => {
    try {
        const response = await axios.delete(`${API_URL}/${projectID}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar projetos:", error);
        throw error;
    }
};

export const getAllProjectsService = async () => {
    try {
        const response = await axios.get(API_URL + "/projects", {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        throw error;
    }
};



