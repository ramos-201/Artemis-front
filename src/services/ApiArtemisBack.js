import axios from 'axios';
import envs from '../configs/config';


const API_BASE_URL = envs.URL_API_BACK;

export const connectionStatus = async () => {
    try {
        const URL = API_BASE_URL + 'conn/'
        const response = await axios.get(`${URL}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const loginConn = async (email, password) => {
    try {
        const URL = API_BASE_URL + 'login/'
        const response = await axios.post(URL, {email, password})
        return response.data;
    } catch (err) {
        throw err;
    }
}
