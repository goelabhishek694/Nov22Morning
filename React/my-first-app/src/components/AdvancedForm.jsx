import React, { useState } from 'react'

function AdvancedForm() {
    const [formData,setFormData] = useState({name:"", email:""});

    const handleData = (e) => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        setFormData(prevData => ({...prevData, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm()

        //make an api call to check the crednetials 
        console.log(formData.name);
        console.log(formData.email);

        //reset the values
        setFormData({name:"", email:""})
        
    }

    const validateForm = () => {
        if(!formData.name || !formData.email){
            alert("please fill all details")
            return false
        }
        //additional validational logic
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                id="name"
                name="name"
                value={formData.name}
                onChange={handleData}
            />
        </div>

        <div>
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                id="email"
                name="email"
                value={formData.email}
                onChange={handleData}
            />
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default AdvancedForm