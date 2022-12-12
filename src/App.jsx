import React from 'react';
import { getUsers, getUser, getUserById } from './api/get';
import { addTodo } from './api/post';
const App = () => {
    React.useEffect(() => {
        (async () => {
            //Get users
            const { data: users } = await getUsers();
            //Get user by id
            const { data: user } = await getUser(1);
            //Post todo
            const { data } = await addTodo({
                userId: 1,
                id: 201,
                title: 'Xin chao',
                completed: false,
            });
            console.log(users, user, data);
        })();

        //get user by id
        getUserById(1).then((res) => console.log(res.data));

        //Performing multiple concurrent requests

        Promise.all([getUser(1), getUsers()]).then((rs) => console.log(rs[0].data, rs[1].data));
    }, []);
    return <div>App</div>;
};

export default App;
