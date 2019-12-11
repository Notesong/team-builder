import React from 'react';
import { Card, Button, CardHeader, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

const TeamMembers = props => {
    console.log(props.teamMembers);
  return (
    <div className="team-member-list">
        <Row>
            {props.teamMembers.map(member => (
                <Col sm="6" className='teamMember' key={member.id}>
                    <Card className="text-center card">
                        <CardHeader>{member.name}</CardHeader>
                        <CardBody>
                            <CardTitle>Role: {member.role}</CardTitle>
                            <CardText>Email: {member.email}</CardText>
                            <Button size='sm' outline>Edit</Button>
                        </CardBody>
                    </Card>                        
                </Col>
            ))}            
        </Row>
    </div>
  );
};

export default TeamMembers;