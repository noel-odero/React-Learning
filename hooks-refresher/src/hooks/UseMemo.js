import React from 'react'
import { useState, useMemo} from 'react';

import { initialItems } from './utils';


const Demo = () => {

    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = useMemo(() =>items.find((item) => item.id === count), [items, count]);

    return (
        <div className='tutorial'>
            <h1>Count: {count}</h1>
            <h1>Selected item: {selectedItem?.id}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            
        </div>
    )
}

export default Demo
