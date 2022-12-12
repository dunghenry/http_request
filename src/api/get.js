import axios from 'axios';
export const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 2000,
});
export const getUsers = () => {
    return instance.get('todos');
};

export const getUser = (id) => {
    return instance.get(`todos/${id}`);
};

export const getUserById = (id) => {
    return instance.get(`todos/${id}`);
};
