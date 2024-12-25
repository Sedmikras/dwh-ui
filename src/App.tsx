import './App.css'
import './components/Navbar.tsx'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/pages/Login.tsx";
import Navbar from "./components/Navbar.tsx";
import {useState} from "react";
import {UserForRegistration} from "./components/services/Utils.ts";
import DashboardForm from "./components/pages/Dashboard/Dashboard.tsx";

let setAuth: (auth: UserForRegistration | null) => void;

function App() {
    const [isAuthenticated, setAutenticated] = useState<UserForRegistration | null>() ;
    setAuth = setAutenticated;


    return (
        <>
            <BrowserRouter>
                {isAuthenticated != null && <Navbar/>}
                <Routes>
                    <Route path="/" element={isAuthenticated != null ? <DashboardForm/> : <Navigate to={"/login"}/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export {setAuth}
export default App
