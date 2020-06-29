import axios from "axios"
const domain = require('./net')

const userDomain = domain + "/user"

export default function login(form, onSussess, onFaill) {
    let formData = new FormData();
    for(let k in form){
        console.log(form[k]);
        formData.append(k,form[k]);
    }
    axios.post(domain + "/login", formData)
        .then((res) => {
            if (res.data.code == 200) {
                console.log("login sussess");
                axios.defaults.headers.common['Authorization'] = res.data.data.token;
                console.log("TOKEN"+res.data.data.token);
                onSussess(res.data);
            } else {
                console.log(res.data);
                console.log("fail");
                onFaill(res.data.msg);
            }
        }).catch(err => console.log("network error"))
}

export function loginout(onSuccess) {
    //axios.get(userDomain + "/loginout").then(data => onSuccess()).catch(err => console.log("network error"))
    axios.defaults.headers.common['Authorization'] = '';
    onSuccess();
}

export function search(key, limit, offset) {
    return axios.get(domain + "/searchDoc/" + key + "/" + offset + "/" + limit + "/false");
}

export function searchPhone(key) {
    return axios.get(domain + "/searchPhone/" + key);
}

export function searchPhoneByid(pid) {
    return axios.get(domain + "/searchPhone/byId/" + pid);
}

export function searchComputer(key) {
    return axios.get(domain + "/searchComputer/" + key);
}


export function favor(favorId,classify) {
    console.log(favorId+" "+classify);
    return axios.post(domain + "/collections/" + favorId+"/"+classify);
}

export function delfavor(favorId,classify) {
    console.log(favorId+" "+classify);
    return axios.delete(domain + "/collections/" + favorId + "/"+classify);
}

export function getfavor() {
    return axios.get(domain + "/collections/");
}
