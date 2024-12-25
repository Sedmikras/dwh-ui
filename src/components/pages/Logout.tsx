import {setAuth} from "../../App.tsx";
import {reRoute} from "../services/Navigator.ts";

export function logout(){
    setAuth(null);
    reRoute("/");
}