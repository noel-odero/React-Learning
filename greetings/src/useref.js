import { useState, useRef, useEffect } from 'react';

export default function Stopwatch() {
    const [startTime, setStartTime] = useState(null);// used for rendering
    const [now, setNow] = useState(null)// used for rendering
    const interval = useRef(null); // not used for rendering

    function handleStart() {
        if (interval.current !== null) return;

        const currentTime = Date.now();
        setStartTime(currentTime);
        setNow(currentTime);

        interval.current = setInterval(() => {
        setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(interval.current);
        interval.current = null;
    }

    useEffect(() => {
        return () => clearInterval(interval.current);
    }, []);

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
        <h1>Time passed: {secondsPassed.toFixed(2)}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        </>
    );
}
