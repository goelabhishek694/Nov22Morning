import React, { useState } from 'react'

function Form() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //make an api call to check the crednetials 
        console.log(name);
        console.log(email);

        //reset the values
        setName("");
        setEmail("")
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                id="name"
                value={name}
                onChange={handleName}
            />
        </div>

        <div>
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                id="email"
                value={email}
                onChange={handleEmail}
            />
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form
