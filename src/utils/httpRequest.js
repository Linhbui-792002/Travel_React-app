import axios from 'axios';

const request = axios.create({
  baseURL: "https://dev-game.sotalabs.io/api/",
});

export const get = async (path, req) => {
    const response = await request.get(path, req);
    return response;
};

export const post = async (path, req, headers) => {
    const response = await request.post(path, req, headers);
    return response;
};

export const put = async (path, req, headers) => {
    const response = await request.put(path, req, headers);
    return response;
};

export const del = async (path) => {
    const response = await request.delete(path);
    return response;
};

export default request;
