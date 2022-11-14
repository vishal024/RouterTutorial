import React,{useEffect} from "react"
import { useNavigate } from "react-router-dom";

const Login = () =>{
     const navigate = useNavigate();
    const LoggedIn = () =>{
        localStorage.setItem('login',true);
        navigate('/');
    }

    useEffect(()=>{
        const login = localStorage.getItem('login');
        if(login){
            navigate('/login')
        }
    })
    return(
        <div className="container" style={{margin: "68px 0px 0px 210px"}}>
            <h1>Login</h1>
            <input type="text" /><br/>
            <input type="text" /><br/>
            <button onClick={()=>LoggedIn()}>Login</button>
        </div>
    )
}
export default Login;