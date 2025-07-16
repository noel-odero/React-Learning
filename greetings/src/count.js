import { useState, useRef, useEffect } from "react";
const Counter = () => {
    const countRef = useRef(0);
    const [SearchTerm, setSearchTerm] = useState("")

    useEffect(()=> {
        countRef.current = countRef.current + 1
    });

    return (
        <>
            <input type="text" value={SearchTerm} onChange={ e => setSearchTerm(e.target.value)} />
            {countRef.current}
        </>
    )
}

