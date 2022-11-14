import React from "react"
import { Link} from "react-router-dom";
const Home =()=>{
    return(
       <div className="container">
           <h1>home Page </h1>
           <p>This is our home page of our app</p>
           <Link to="/about">Go to About page</Link>
       </div>
    )
}
export default Home;