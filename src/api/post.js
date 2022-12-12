import { instance } from './get';
export const addTodo = ({ userId, id, title, complete }) => {
    return instance.post('todos', {
        userId,
        id,
        title,
        complete,
    });
};
