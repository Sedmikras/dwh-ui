import React, {useState} from "react";
import {UserForRegistration} from "../services/Utils.ts";
import {login} from "../services/LoginService.ts";
import {setAuth} from "../../App.tsx";
import {useNavigate} from "react-router-dom";
import Logo from "../../assets/Logo.tsx";

const LoginForm: React.FC = () => {
    const [user, setUser] = useState<UserForRegistration>({name: "", alias: "", password: ""});
    const [error, setError] = useState("");
    const navigation = useNavigate();

    const handleLogin = (event:React.FormEvent) => {
        event.preventDefault();
        console.log(user);
        setError("");

        // Basic validation
        if (!user.name || !user.password || !user.alias) {
            setError("Fields are required.");
            return;
        }

        login(user).then(r => {
                console.log(r)
                setAuth(user);
                /*reRoute("/");*/
                navigation("/");
            }
        )
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    }

    return (
        <>
            <form onSubmit={handleLogin}
                  className={'flex container flex-col items-center justify-center rounded-lg shadow-md w-4/12'}
            >
                <div className={'flex items-center h-15 m-3 border-gray-300 border-b-2 w-full justify-center'}>
                    <Logo size={5}/>
                    <div className={'flex-col text-2xl font-bold'}>ETL UI</div>
                </div>
                <div className={'flex-col mt-4'}>
                <div className={'flex justify-around mb-3'}>
                    <label
                        htmlFor="username"
                        className={'basis-1/5 text-start flex-shrink-0 flex-grow-0 text-2xl'}>Username</label>
                    <input type={'text'}
                           placeholder={'Username'}
                           onChange={handleInputChange}
                           className={'basis-3/5 bg-white border border-gray-300 text-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400'}
                           name={'name'}

                    />
                </div>
                <div className={'flex justify-around mb-3'}>
                    <label htmlFor="password" className={'basis-1/5 text-start flex-shrink-0 flex-grow-0 text-2xl'}>Password</label>
                    <input
                        onChange={handleInputChange}
                        name={'password'}
                        className="basis-3/5 w-full h-full bg-white border border-gray-300 text-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        type="password"
                        placeholder="Password"/>
                </div>
                <div className={'flex justify-around mb-3'}>
                    <label htmlFor="alias" className={'basis-1/5 text-start flex-shrink-0 flex-grow-0 text-2xl'}>Alias</label>
                    <input type={'text'}
                           name={'alias'}
                           placeholder={'Alias'}
                           onChange={handleInputChange}
                           className={'basis-3/5 w-full h-full bg-white border border-gray-300 text-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-400'}
                    />
                </div>
                {error && <p className="text-red-500 text-center text-lg font-bold self-start justify-self-start m-3">{error}</p>}
                <div className={'flex justify-around mb-3'}>
                    <button type={'submit'} autoFocus={true}
                    className={'bg-gray-100 text-black w-3/4 h-10 bq-blue font-bold rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150'}>login</button>
                </div>
                </div>
            </form>
        </>
    )
}
export default LoginForm