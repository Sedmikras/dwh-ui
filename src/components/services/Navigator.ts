import {useState} from "react";
import {useNavigate} from "react-router-dom";

let reRoute:(path:string)=>void;

export function Navigator() {
    const [navigation, setNavigate] = useState("");
    const navigate = useNavigate();
    if(navigation !== "") {
        setTimeout(() => navigate(navigation), 0);
        console.log("navigating to" + navigation);
        setNavigate("");
    }
    reRoute = setNavigate;
    return(() => {
        console.log("Navigating to" + navigation);
    });
}

export {reRoute};