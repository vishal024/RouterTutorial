import React, { useDebugValue } from "react"
import { useSearchParams } from "react-router-dom"

const Filter = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("name"), searchParams.get("age"));
    const name = searchParams.get("name")
    const age = searchParams.get("age")
    return(
        <div className="container">
            <h1>Filter the Employee</h1>
            <h2>
                Employee name is: {name}
            </h2>
            <h2>
               Employee Age is : {age}
            </h2>
            <input type="text" placeholder="Enter your name" onChange={(e)=>setSearchParams({name:e.target.value,age})}/>
            <input type="text" placeholder="Enter your age" onChange={(e)=>setSearchParams({name,age:e.target.value})} />
        </div>
    )
}
export default Filter;