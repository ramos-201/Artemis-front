import axios from 'axios';
import envs from '../configs/config';


const API_BASE_URL = envs.URL_API_BACK;

export const connectionStatus = async () => {
    const URL = API_BASE_URL + 'conn/'
    try {
        const response = await axios.get(`${URL}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}
