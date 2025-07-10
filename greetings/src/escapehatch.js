// When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref:
// you can use refs to store timeoutIDs, dom elements

// manipulating the DOM with refs

// sometimes you need access to the dom elements managed by react, like foccus a node, scroll it, or measure it's size- need red to the DOM node

import {useRef} from 'react';

const Form =() => {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }
    return(
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Click Me!</button>
        </>
    )

}

// synchronozing with Effects

