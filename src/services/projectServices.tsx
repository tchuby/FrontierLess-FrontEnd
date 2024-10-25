import axios from "axios";

const API_URL = "http://localhost:3000";

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

export const getProjectsService = async () => {
    try {
        const response = await axios.get(API_URL + "/project/projects", {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        throw error;
    }
};

export const getProjectItemsService = async (projectID: number) => {
    try {
        const response = await axios.get(`${API_URL}/project-item/project-items/${projectID}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Etapas:", error);
        throw error;
    }
};

export const getProjectReviewService = async (projectID: number) => {
    try {
        const response = await axios.get(`http://localhost:3000/review/reviews/${projectID}`, {
            withCredentials: true
        });
        console.log("$$$: " + response.data)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Commentarios:", error);
        throw error;
    }
};