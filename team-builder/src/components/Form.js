import React, {useState} from 'react';

function Form({ addNewMember }) {
    const [member, setMember] = useState([{ name: '', role: '', email: '' }]);

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        addNewMember(member);

        setMember({ name: '', role: '', email: '' });
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name:</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                value={member.name}
            />
            <label htmlFor='role'>Role:</label>
            <input
                id='role'
                type='text'
                name='role'
                onChange={handleChanges}
                value={member.role}
            />
            <label htmlFor='email'>Email:</label>
            <input
                id='email'
                type='text'
                name='email'
                onChange={handleChanges}
                value={member.email}
            />
            <button type='submit'>Add Member</button>
        </form>
    );
}

export default Form;