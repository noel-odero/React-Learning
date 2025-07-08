// Dom manipulation - useRef hook
// In react we don't do dom manipulation directly: but sometinmes we wanna do it ourselves like focusing on a div
import { useRef, useEffect } from "react";



const Focus = () => {
    const inputElemRef = useRef();
    useEffect(()=>{
        inputElemRef.current.focus()
        // inputElemRef.current.style.backgroundColor = "red"
    }, [])
    return (
        <input type="text" ref={inputElemRef}/> 
    )
}

export default Focus