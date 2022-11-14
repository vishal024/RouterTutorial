import React from "react"
import { useParams, useLocation } from "react-router-dom";

const User = () => {
    const params = useParams();
    console.log(params);
    const {name,id} = params;

    const location = useLocation();
    console.log(location)
    return (
        <div className="container">
            <h1>
                This is a {name} Page.
            </h1>
        </div>
    )
}

export default User;