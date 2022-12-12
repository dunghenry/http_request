import axios from 'axios';

export const addTodo = ({ userId, id, title, complete }) => {
    return axios({
        method: 'POST',
        url: '/todos',
        data: {
            userId,
            id,
            title,
            complete,
        },
    });
};
