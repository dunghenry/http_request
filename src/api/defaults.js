import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/';
axios.defaults.headers.common['Authorization'] = 'Bearer token';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//custom instance
const instance = axios.create({
    baseURL: 'http://localhost:4000/',
});

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.timeout = 2000;
// Override timeout
instance.get('todos', {
    timeout: 5000,
});
