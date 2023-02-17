import axios from 'axios';

const userApi = '/api/user/';
const historyApi = '/api/history/';
const statsApi = '/api/stats/';

const login = (address) => {
    return axios.post(userApi+'login', { address })
};

const logout = () => {
    localStorage.removeItem('auth');
};

export default {
    login,
    logout
}