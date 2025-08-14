// useEffect lets you run code after the component renders depending on circumstances
// mostly used when fetching data from an API
// takes a function and a dependency array -
// subscribing to events

import { useEffect, useState } from "react";


const EffectExample = () => {
    const [data, setData] = useState([])
    const[showNoel, setShowNoel] = useState(false)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        console.log("Pedro")
    }, [showNoel])

    


    return (
        <>
        <button onClick={() => setShowNoel((prev) => !prev)}>Toggle</button>
        <h1>Posts</h1>
        <ul>
            {data.map((item) =>( <li key={item.id}>{item.title}</li>)
            )}
        </ul>
        </>
    );
};

export default EffectExample;
