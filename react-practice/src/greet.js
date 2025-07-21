import { useState } from "react";

const Greetings = () => {
    const [name, setName] = useState({
        'firstname': "",
        "lastname": ""
    })

    const handleChange =(e) => {
        let {name, value} = e.target

        setName((prevName) => ({
        ...prevName,
        [name]: value
    }));
    }

    return(
        <form>
            <input type="text" name="firstname" placeholder="First name" onChange={handleChange} value={name.firstname} />
            <input type="text" name="lastname" placeholder="Last name" onChange={handleChange} value={name.lastname} />

            <div className="bg-gray-200 p-2 rounded w-1/2 flex flex-col justify-center items-center">
                {
                name.firstname && name.firstname && (
                    <p> Hey, <strong>{name.firstname} {name.lastname}</strong>, Welcome!!!</p>
                )
                }
            </div>
            <button onClick={() => alert(`Hey ${name.firstname} ${name.lastname}`)}>Click me</button>

        </form>
    )
}


export default Greetings;