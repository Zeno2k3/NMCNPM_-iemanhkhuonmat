import axios from "axios";
import queryString from 'query-string'
import { appInfos } from "../constants/appInfos";

const axiosClient = axios.create({
    baseURL: appInfos.BASE_URL,
    paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config: any) => {
    config.headers = {
        Authorization: '',
        Accepet: 'application/json',
        ...config.headers
    }
    return config
})

axiosClient.interceptors.response.use(
    res => {
        if(res.data) {
            return res.data;
        }
        return res;
    },
    error => {
        console.log('Error details:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
            config: error.config
        });
        throw error;
    }
);

export default axiosClient