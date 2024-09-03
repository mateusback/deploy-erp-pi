import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getFunction() {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
}

export async function postFunction() {
    const response = await axios.post(`${API_URL}/cadastro`, data);
    return response.data;
}