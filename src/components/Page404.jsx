import React from "react"
import { Link } from "react-router-dom";
 const Page404 = () =>{
     return(
         <div className="container">
             <h1>Page 404 </h1>
             <p>This page is not found</p>
             <Link to="/">Go to Home page</Link>
         </div>
     )
 }
  export default Page404;