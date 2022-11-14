import React from "react"
import { Link , useLocation} from "react-router-dom"

const About = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div className="container">
            <h1>About Page</h1>
            <p>This is our Abous Us page</p>
            <Link to="/">Go to Home page</Link>

            <ul>
                <li>
                    <Link to="/user/anil" state={{fname:"Vishal", age:23}}>Anil</Link>
                </li>
                <li>
                    <Link to="/user/Vijesh">Vijesh</Link>
                </li>
            </ul>
        </div>
    )
}
export default About