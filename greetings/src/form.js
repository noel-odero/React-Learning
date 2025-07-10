// creating the form
// using state to store field data
// handling form submissiion
// displaying form data
// resseting the form
// interview

import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [technology, setTechnology] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, technology);
        setName("");
        setTechnology("");
    }
    return (
        <>
            <h1>Handling Forms in React</h1>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" onChange={(e) => {setName(e.target.value)}} value={name} placeholder='Enter your name' /> <br />
                Technology: <select onChange={(e) => {setTechnology(e.target.value)}}value={technology} >
                    <option >Select Option</option>
                    <option >React</option>
                    <option >HTML</option>
                    <option >CSS</option>
                </select> <br /> <br />
                <button >Submit</button>
            </form>
        </>
    )
}

export default Form
