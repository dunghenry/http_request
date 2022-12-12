import axios from 'axios';

axios.get('/').catch((error) => console.log(error.toJSON()));

// use validateStatus
axios.get('/', {
    validateStatus: function (status) {
        return status < 500;
    },
});
