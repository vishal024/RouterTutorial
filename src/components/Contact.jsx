import React from "react"
import { Link, NavLink, Outlet } from "react-router-dom";

 const Contact = () =>{
     return(
         <div className="container">
             <h1>
                 This is Contact US page
             </h1>
             <p>Here you can contact us.</p>
             <NavLink style={({isActive})=>{ return {color: isActive ? "skyblue" : ""}}} to="company">Company</NavLink><br/>
             <NavLink style={({isActive})=>{ return {color : isActive ? "skyblue" : ""}}} to="channel">Channel</NavLink><br/>
             <NavLink style={({isActive})=>{ return {color : isActive ? "skyblue" : ""}}} to="other">Other</NavLink><br/>
             <Outlet/>
         </div>
     )
 }
 export default Contact;