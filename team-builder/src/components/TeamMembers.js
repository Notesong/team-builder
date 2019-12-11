import React from 'react';
import { Row, Col } from 'reactstrap';
import MemberCard from './MemberCard'

const TeamMembers = props => {
  return (
    <div className="team-member-list">
        <Row>
            {props.teamMembers.map(member => (
                <Col sm="6" md="3" className='teamMember' key={member.id}>                        
                    <MemberCard member={member} setMember={props.setMember}/>                                          
                </Col>
            ))}            
        </Row>
    </div>
  );
};

export default TeamMembers;