import React from "react";
import { useState, useEffect } from "react";
const Users = () => {
    const [users, setUsers] = useState([]);
    const [fetching, setFetching] = useState(false)
    
    
    // fetchUsers()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( res => res.json())
            .then( data => {
                console.log(data)
                setUsers(data)
                // setUsers update state variable and rerender the entire component, when component is rerendered, fetcUsers is gonn a be called again, and state changes
            })
            .catch(err => console.err(err))  
    }, [fetching])
    // we are only gonna perfom this effect when the users updates
    return (
    <div>
        <h1>Users</h1>
        {users.map((user) => (
            <div key={user.id}>
                <p>Title:{user.title} </p>
            </div>
            )
        )}
        <button onClick={() => setFetching(!fetching)}>fetch</button>
    </div>
    )
}

export default Users