import React, { useState} from 'react';
import Form from './components/Form';
import TeamMembers from './components/TeamMembers';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: '', 
      role: '',
      email: '', 
    }]);

  const addNewMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      role: teamMember.role,
      email: teamMember.email,
    };

    const newTeamMemberList = [...teamMembers, newTeamMember];
    setTeamMembers(newTeamMemberList);
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
