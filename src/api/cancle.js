import axios from 'axios';
const controller = new AbortController();
axios
    .get('/', {
        signal: controller.signal,
    })
    .then((response) => console.log(response));

// React

import React from 'react';

const Cancle = () => {
    const ourRequest = axios.CancelToken.source();
    React.useEffect(() => {
        (async () => {
            await axios.get('/', {
                cancelToken: ourRequest.token,
            });
        })();
        return () => ourRequest.cancel();
    }, []);
    return <div>cancle</div>;
};

export default Cancle;
