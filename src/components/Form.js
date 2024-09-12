import React, {useState} from 'react';

function Form(props){
    const [person, setPerson] = useState({name: "", email: "", role: ""});
    const {setPeople} = props;
    function handleChange(event){
        setPerson({...person, [event.target.name]: event.target.value});
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(person);
        setPeople([...setPeople, person]);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="name"
                name="name"
                value={person.name}
                onChange={handleChange}
            />

            <input 
            placeholder="email"
            value={person.email}
            name="email"
            onChange={handleChange}
            />

            <input
            placeholder="role"
            value={person.role}
            name="role"
            onChange={handleChange}
            />
            <button type="submit">Add Person</button>
        </form>
    )
}

export default Form;