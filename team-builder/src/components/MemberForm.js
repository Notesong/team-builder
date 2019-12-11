import React, { useEffect, useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function MemberForm({ addNewMember, member, setMember, isEditing, setIsEditing }) {
    const [submitButtonText, setSubmitButtonText] = useState('Add Member');

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        addNewMember(member);

        resetForm();
    };

    const resetForm = () => {
        setMember({ name: '', role: '', email: '' });
        if(isEditing === true) {
            setIsEditing(false);
        }
    };

    useEffect(() => {
        if(isEditing === false) {
            setSubmitButtonText('Add Member');
        } else {
            setSubmitButtonText('Edit Member');
        }
    },[isEditing]);

    return (
        <Form onSubmit={submitForm} autoComplete="on">
            <FormGroup row>
                <Label htmlFor='name' sm={2}>Name:</Label>
                <Col sm={10}>
                   <Input
                    id='name'
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    value={member.name}
                    maxLength='15'
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
                        maxLength='25'
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
                <Button type='submit' className="form-button" id="submit">{submitButtonText}</Button>
                <Button type='reset' className="form-button" onClick={resetForm}>Reset</Button>
            </div>
        </Form>
    );
}

export default MemberForm;