import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const URL_CONTROLLER = "v1/forgot-password/"

export async function getFunction() {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

export async function verifyMail(data) {
    try {
        const response = await axios.post(`${API_URL}/${URL_CONTROLLER}verify-mail/${data}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function changePassword(data) {
    try {
        const response = await axios.post(`${API_URL}/${URL_CONTROLLER}change-password`, data);
        return response.data;
    } catch (error) {   
        throw error;
    }
}
