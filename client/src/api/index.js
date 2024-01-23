import axios from "axios";

const BASE_URL = "http://localhost:4000";

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

        // console.log(response);

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
