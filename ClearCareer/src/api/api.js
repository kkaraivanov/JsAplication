const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(sessionStorage.getItem('user'));
    
    if (userData != null) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function get(url) {
    return request('get', url);
}

function post(url, data) {
    return request('post', url, data);
}

function put(url, data) {
    return request('put', url, data);
}

function del(url) {
    return request('delete', url);
}

const api = {
    get, post, put, del
}

export default api