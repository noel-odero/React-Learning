import { useState } from "react";

const Button = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        return(setCount((prev => prev + 1)))
    }

    
    return(
        <>
            <p>Button has been clicked: {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default Button;