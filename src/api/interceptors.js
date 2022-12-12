import axios from 'axios';

//Add a request interceptor

export const customRequest = () => {
    const instance = axios.create();
    instance.interceptors.request.use(
        function (config) {
            return config;
        },
        function (err) {
            return Promise.reject(err);
        },
    );
    return instance;
};

//Add a response interceptor
export const customResponse = () => {
    const instance = axios.create();
    instance.interceptors.response.use(
        function (config) {
            return config;
        },
        function (err) {
            return Promise.reject(err);
        },
    );
};

// Config refreshtoken axios use cookies

export const refreshToken = async () => {
    try {
        const response = await axios.post('/', {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
