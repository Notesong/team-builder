import React from 'react';

const TeamMembers = props => {
    console.log(props.teamMembers);
  return (
    <div className="team-member-list">
        {props.teamMembers.map(member => (
            <div className='teamMember' key={member.id}>
                <h2>{member.name}</h2>
                <p>Role: {member.role}</p>
                <p>Email: {member.email}</p>
            </div>
        ))}
    </div>
  );
};

export default TeamMembers;