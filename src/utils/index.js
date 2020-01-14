import {Message} from 'element-ui';
import Cookies from "js-cookie";

export const checkResult = (res) => {
    if(res.data.code ==='20000'){
        Message.error(res.data.msg);
        return false;
    }
    return true;
}

export const setCookie = (name, value, options) => {
    Cookies.set(name, value, options);
}

export const getCookie = (name) => {
    return Cookies.get(name);
}