// states are the building blocks of react
// a variable that you can create and change its value. And when it's value is changes it will automatically trigger a rerender. 

import { useState } from "react";


const StateExample = () => {
    const [count, setCount] = useState(0);

    const IncreaseCount = () => {
        setCount((prev) => prev + 1)

        console.log(count)
    }


    return <div>
        <p>Count: {count} </p>
        <button onClick={IncreaseCount}>Increase counter</button>
    </div>
}

export default StateExample;