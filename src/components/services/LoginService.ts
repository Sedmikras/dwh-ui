import {UserForRegistration} from "./Utils.ts";
import {setAuth} from "../../App.tsx";

export function login(user : UserForRegistration) {
    return new Promise((resolve) => {
        console.log(user)
        setAuth(user);
        resolve(true);
    })
}