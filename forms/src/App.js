import { useState } from 'react';


import './App.css';

function App() {
  const [contact, setContact] = useState({
    'fname': "",
    'email': "",
    'password': "",
    "address": "",
    "color": "",
    "city": "",
    'state': "",
    "zip": "",
    "agree": false
  })

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;
    
    if(event.target.type === 'checkbox') {
      value = event.target.checked
    }

    setContact({
      ...contact,
      [name]: value
    })

  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" name='fname' id='fname' placeholder='Enter full name' onChange={handleChange} value={contact.fname} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' placeholder='Enter Email' onChange={handleChange} value={contact.email} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' placeholder='Enter Password' onChange={handleChange} value={contact.password} required />
        </div>
        <div>
          <label htmlFor="color">Your Favourite color</label>
          <input type="color" name='color' id='color' placeholder='Enter Color' onChange={handleChange} value={contact.color} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea name="address" id="adress" placeholder='Where can we find you' required onChange={handleChange} value={contact.address} ></textarea>
        </div>
        <div>
          <label htmlFor="city">city</label>
          <input type="text" name='city' id='city' placeholder='Enter your city'  required onChange={handleChange} value={contact.city} />
        </div>
        <div>
          <label htmlFor="state">state</label>
          <select name="state" id="state" required onChange={handleChange} value={contact.state} >
            <option value="">Choose...</option>
            <option value="Solid">Solid</option>
            <option value="Liquid">Liquid</option>
            <option value="Gas">Gas</option>
          </select>
        </div>
        <div>
          <label htmlFor="zip">Pin/zip</label>
          <input type="number" name='zip' id='zip' placeholder='Enter Zip/Pin Code' onChange={handleChange} value={contact.zip} required />
        </div>
        <div>
          <input type="checkbox" name='agree' id='agree' onChange={handleChange} checked={contact.agree} required />
          <label htmlFor="agree">Say, You Agree</label>
        </div>
      </form>
      
      <div className="bg-gray-200 p-2 rounded w-1/2 flex flex-col justify-center items-center">
        {
          contact.fname && (
            <p> Hey, <strong>{contact.fname}</strong>, Welcome!!!</p>
          )
        }

        { 
          contact.email && (
            <p> Thanks for giving us your email, <u>{contact.email}</u>!!!</p>
          )
        }

        {
          contact.password && (
          <p>
            Your password is of <strong>{contact.password.length}</strong>{" "}
            characters.
          </p>
        )}

        {
          contact.color && (
          <p>
            Do you know, the Hexacode of your{" "}
            <span style={{ color: contact.color }}>
              Favorite Color is: {contact.color}
            </span>
          </p>
        )}

        {
          contact.address && (
          <p>
            You stay at, {contact.address}, {contact.city}, {contact.state},{" "}
            {contact.zip}
          </p>
        )}

        {
          contact.agree ? (
          <p>You Agree, That's Great!</p>
        ) : (
          <p>You DO NOT agree with us yet!</p>
        )}
      </div>
    </>
  );
}

export default App;
