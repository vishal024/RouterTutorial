import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Protected = (props) =>{
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        const login = localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    })
    return(
        <div className="container">
            <Component/>
        </div>
    )
}

export default Protected;