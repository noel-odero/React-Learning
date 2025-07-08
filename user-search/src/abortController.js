import { useEffect } from "react";
// Abortcontroller - global class in js used to abort

// Once you create a controller you get two things, signal property and abort() method

const controller = new AbortController();
controller.signal
controller.abort()

// The signal property - instance of AbortSignal, a pluggable part you can provide to any API to react to an abort event and implement it accordingly.
// the .abort() methid that wehn called triggers the abort event on the signal. Also updates the signal to be marked as aborted


// You can provide an abort signal when adding an event listener for it to be automatically removed once the abort happens.

// eventListeners
useEffect(()=>{
    const controller = new AbortController();

    window.addEventListener('resize', handleResize, {
        signal: controller.signal
    })
    window.addEventListener('hashchange', handleHashChange, {
        signal: controller.signal
    })
    window.addEventListener('storage', handleStrorage, {
        signal: controller.signal
    })

    return() => {
        controller.abort()
    }
}, [])

// preventing race condition with abortcontoller
useEffect(() => {
    const controller = new AbortController();

    fetch(`/search?q=${searchTerm}`, {
        signal: controller.signal
    })
        .then(response => response.json())
        .then(data => {
        setResults(data); // This only runs if the request wasn't aborted
        })
        .catch(error => {
        if (error.name === 'AbortError') {
            // expected, do nothing
        } else {
            console.error("Fetch error:", error);
        }
        });

    return () => {
        controller.abort(); // abort previous request if searchTerm changes
    };
}, [searchTerm]);




