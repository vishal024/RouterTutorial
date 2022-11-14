import React from "react"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <ul className="nav-bar-ul">
                <li>
                    <NavLink style={({isActive})=>{ return { color: isActive ? "skyblue": ""}}}  to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{ return {color: isActive ? "skyblue": ""}}} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{ return {color: isActive ? "skyblue": ""}}} to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{ return {color: isActive ? "skyblue": ""}}} to="/user/anil">Anil</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{ return {color: isActive ? "skyblue": ""}}} to="/user/Vijesh">Vijesh</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{return { color : isActive ? "skyblue" : ""}}} to="/filter">filter</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{return { color : isActive ? "skyblue" : ""}}} to="/login">Login</NavLink>
                </li>
                {/* <li>
                    <NavLink  to="/user/anil/1">Anil</NavLink>
                </li>
                <li>
                    <Link  to="/user/Vijesh/2">Vijesh</Link>
                </li> */}
            </ul>



        </div>
    )
}
export default NavBar;