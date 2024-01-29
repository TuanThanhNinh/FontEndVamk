import axios from "axios";

const BASE_URL = "http://localhost:4000";
const authToken = sessionStorage.getItem("userToken");

export const fetchToken = async ({ inputEmail, inputPassword }) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email: inputEmail,
            password: inputPassword,
        });

        return response.data.access_token;
    } catch (err) {
        throw err;
    }
};

export const fetchPetsData = async ({ Token }) => {
    try {
        const response = await axios.get(`${BASE_URL}/pets`, {
            headers: { Authorization: "Bearer " + Token },
        });

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const fetchPetData = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/pets/${id}`, {
            headers: { Authorization: "Bearer " + authToken },
        });

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const fetchVisitsData = async ({ Token }) => {
    try {
        const response = await axios.get(`${BASE_URL}/visits`, {
            headers: { Authorization: "Bearer " + Token },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createNewVisit = async (newVisit) => {
    try {
        const response = await axios.post(`${BASE_URL}/visits`, newVisit, {
            headers: { Authorization: "Bearer " + authToken },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updatePetData = async ({ id, updateData }) => {
    try {
        const response = await axios.put(`${BASE_URL}/pets/${id}`, updateData, {
            headers: { Authorization: "Bearer " + authToken },
        });

        
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
