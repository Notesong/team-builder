import React from 'react';

function TeamMembers(props) {
  return (
    <div className="team-member-list">
        {props.teamMembers.map(member => {
            <div className='teamMember' key={member.id}>
                <h2>{member.name}</h2>
                <p>{member.role}</p>
                <p>{member.email}</p>
            </div>
        })}
    </div>
  );
}

export default TeamMembers;