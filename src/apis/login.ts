import request, { authURL } from '@/plugins/request';
import { removeToken } from '@/plugins/local-storage';
export function login(email: string, password: string) {
    return request({
        url: `${authURL}Account/Login`,
        method: 'POST',
        data: {
            email,
            password,
        },
    });
}

export function forgot(email: string) {
    return request({
        url: `${authURL}Account/ForgotPassword`,
        method: 'POST',
        data: {
            email,
        },
    });
}


export function register(email: string, password: string, username: string) {
    return request({
        url: `${authURL}Account/Register`,
        method: 'POST',
        data: {
            email,
            password,
            username,
        },
    });
}

export function logout() {
    removeToken();
}

export function refreshToken(token: string) {
    return request({
        url: `${authURL}Account/Refresh`,
        method: 'GET',
    });
}

export function changePassword(username: string, oldpwd: string, newpwd: string) {
    // return request({
    //     url: `${baseURL}api/changePassword`,
    //     method: 'POST',
    //     data: {
    //         username,
    //         oldpwd,
    //         newpwd
    //     },
    // });
}
