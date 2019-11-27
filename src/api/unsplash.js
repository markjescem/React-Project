import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 50b71d65442bff1ef5e506c27e4cce6b3d902c3c5b74c2367640fcea39982d51'
    }
});