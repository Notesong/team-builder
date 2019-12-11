import React, { useState} from 'react';
import MemberForm from './components/MemberForm';
import TeamMembers from './components/TeamMembers';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Jane Dixon', 
      role: 'UI', 
      email: 'jane@gmail.com'
    },
    {
      name: 'John Douglas', 
      role: 'Frontend', 
      email: 'john@gmail.com'
    },
    {
      name: 'Jasper Daniels', 
      role: 'Backend', 
      email: 'Jasper@gmail.com'
    }
  ]);

  const addNewMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      role: teamMember.role,
      email: teamMember.email,
    };

    const newTeamMemberList = [...teamMembers, newTeamMember];
    setTeamMembers(newTeamMemberList);
  };

  return (
    <div className="App">
      <h1 className="center">Team Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
