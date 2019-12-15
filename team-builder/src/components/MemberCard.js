import React, { useState } from 'react';
import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

export default function NewComponent({ setMember, member, setIsEditing }) {

    const [cardMember, setCardMember] = useState(member)

    function editMemberCard() {
        // boolean change will prompt the submit button to change its text
        setIsEditing(true);
        setMember(cardMember);
    }

    return(
        <Card className="text-center card">
            <CardHeader>{member.name}</CardHeader>
            <CardBody>
                <CardTitle>Role: {member.role}</CardTitle>
                <CardText>Email: {member.email}</CardText>
                <Button size='sm' outline onClick={editMemberCard}>Edit</Button>
            </CardBody>
        </Card>
    )
}