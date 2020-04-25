import axios from "axios"
const domain = require('./net')

const userDomain = domain + "/user"

export default function login(form,onSussess,onFaill) {
    axios.post(userDomain+"/login",form).then((res)=>{
        if (res.data.code == 200) {
            console.log("login sussess");
            onSussess(res.data);
        }else{
            console.log("faill");
            onFaill(res.data.desc);
        }
    }).catch(err=>console.log("network error"))
}

export function loginout(onSuccess) {
    axios.get(userDomain+"/loginout").then(data => onSuccess()).catch(err=>console.log("network error"))
}