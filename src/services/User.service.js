const postLogin = (data) => {
    const options = {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(process.env.REACT_APP_API_BASE_URL + "/login", options).then(response => response.json());
}

const putUpdateOnline = (email) => {
    const data = {
        email
    };

    const options = {
        method: 'PUT', 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(process.env.REACT_APP_API_BASE_URL + "/update-online", options).then(response => response.json());
}

const getUser = (userId) => {
    return fetch(process.env.REACT_APP_API_BASE_URL + "/user?userId" + userId).then(response => response.json());
}

const getOnlineUsers = () => {
    return fetch(process.env.REACT_APP_API_BASE_URL + "/online").then(response => response.json());
}

const postLogout = (email) => {
    const data = {
        email
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(process.env.REACT_APP_API_BASE_URL + "/logout/", options).then(response => response.json());
}

export {
    postLogin,
    putUpdateOnline,
    getOnlineUsers,
    getUser,
    postLogout
};