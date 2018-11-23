const envConfig = require('../config/index');
const qs = require('querystring');
const axios = require('axios');


let getServerAdress = type => {
    if (type in envConfig.proxy) {
        return envConfig.proxy[type].target;
    }
    for (let key in envConfig.proxy) {
        return envConfig.proxy[key].target;
    }
};

exports.get = function (url, params, type) {
    return new Promise(function (resolve, reject) {
        axios.get(getServerAdress(type) + url, {
            params: params
        }).then(function (res) {
            resolve(res.data);
        }).catch(e => {
            reject(e);
            console.error(e);
        });
    });
};

exports.post = function (url, params, type) {
    return new Promise(function (resolve, reject) {
        params.headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        };
        axios.post(getServerAdress(type) + url, params)
            .then(function (res) {
                resolve(res.data);
            }).catch(e => {
                reject(e);
                console.error(e);
            });
    });
};