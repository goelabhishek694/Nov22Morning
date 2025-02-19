import React, { useState } from 'react'

function Form() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleName = () => {

    }

    const handleEmail = () => {

    }
  return (
    <form>
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
    </form>
  )
}

export default Form
