import React, {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function MemberForm({ addNewMember }) {
    const [member, setMember] = useState([{ name: '', role: '', email: '' }]);

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        addNewMember(member);

        resetForm();
    }

    const resetForm = () => {
        setMember({ name: '', role: '', email: '' });
    }

    return (
        <Form onSubmit={submitForm}>
            <FormGroup row>
                <Label htmlFor='name' sm={2}>Name:</Label>
                <Col sm={10}>
                   <Input
                    id='name'
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    value={member.name}
                    /> 
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='role' sm={2}>Role:</Label>
                <Col sm={10}>
                    <Input
                        id='role'
                        type='text'
                        name='role'
                        onChange={handleChanges}
                        value={member.role}
                    /> 
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor='email' sm={2}>E-mail:</Label>
                <Col sm={10}>
                    <Input
                        id='email'
                        type='email'
                        name='email'
                        onChange={handleChanges}
                        value={member.email}
                    /> 
                </Col>
            </FormGroup>
            <div className="center">
                <Button type='submit' className="submit-button">Add Member</Button>
                <Button type='reset' className="submit-button" onClick={resetForm}>Reset</Button>
            </div>
        </Form>
    );
}

export default MemberForm;