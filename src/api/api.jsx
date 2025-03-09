import axios from "axios";

const BASE_URL = "http://localhost:8080/public/greet"; // Change this to your backend URL

const apiCall = async (endpoint, method = "GET", data = null) => {
    try {
        const response = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            headers: { "Content-Type": "application/json" },
            
        });
        return response.data;
    } catch (error) {
        console.error("API call failed:", error);
        return { error: error.response ? error.response.data : error.message };
    }
};

export default apiCall;
