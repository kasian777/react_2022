import axios from 'axios';


let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
});
const getUsers = () => {
    return axiosInstance.get('/users')
};
const getUser = (id) => {
    return axiosInstance.get('/users/' + id)
};

const getPosts = (id) => {
    return axiosInstance.get('/posts/'   )
};
const getPost = (id) => {
    return axiosInstance.get('user/' + id +'/posts'  )
};
export {
    getUsers, getUser, getPost, getPosts
}