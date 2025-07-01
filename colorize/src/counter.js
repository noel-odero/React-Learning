import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));

    const incBy3 = () => {
        console.log('incrBy3')
        setCounter((prev) => prev + 3)
    }

    return(
        <div className="counter-box">
            <span>{counter}</span>
            <button onClick={incBy3}>+3</button>
        </div>
    )
}

export default Counter