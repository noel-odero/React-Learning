import { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    console.log('Parent Rendering');
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div className="parent">
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>
                Click me
            </button>
            
            <Child header={`I am a child`} />
        </div>
    );
}

export default Parent;