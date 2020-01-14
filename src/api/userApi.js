import axios from 'axios';

const UserApi = {};

UserApi.login = data => {
    return axios({
        method: 'post',
        url: 'api/demo/user/login',
        data
    })
}

export default UserApi