import { useState, useEffect } from "react";

const Demo = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        // the code we want to run
        console.log('The count is:', count)

        return () => {
            console.log('I am being cleaned up')
        }
        //optional return function
    }, [
        // what should it listen to to run the function
        count
    ])

    return(
        <div className="tutorial">
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Demo