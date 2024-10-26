import axios from "axios";

const API_URL = "http://localhost:3000";

export const addProjectService = async (newProject: any) => {
    try {
        const response = await axios.post(API_URL + "/project", newProject, {
            withCredentials: true
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Erro ao criar projetos:", error);
        throw error;
    }
};

export const getAllProjectsService = async () => {
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

export const getItemsService = async (projectID: number) => {
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

export const addReviewService = async (newReview: any) => {
    try {
        const response = await axios.post(`http://localhost:3000/review`, newReview, {
            withCredentials: true
        });
        console.log("$$$: " + response.data)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Commentarios:", error);
        throw error;
    }
};

export const getReviewService = async (projectID: number) => {
    try {
        const response = await axios.get(`${API_URL}/review/reviews/${projectID}`, {
            withCredentials: true
        });
        console.log("$$$: " + response.data)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Commentarios:", error);
        throw error;
    }
};

