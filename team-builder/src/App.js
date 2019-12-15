import React, { useState } from 'react';
import MemberForm from './components/MemberForm';
import TeamMembers from './components/TeamMembers';
import './App.css';

function App() {
  const [member, setMember] = useState([{ id: '', name: '', role: '', email: '' }]);
  const [isEditing, setIsEditing] = useState(false);

  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Jane Dixon', role: 'UI', email: 'jane@gmail.com' },
    { id: 2, name: 'John Douglas', role: 'Frontend', email: 'john@gmail.com' },
    { id: 3, name: 'Jasper Daniels', role: 'Backend', email: 'Jasper@gmail.com' }
  ]);

  const addNewMember = member => {
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div className="App">
      <h1 className="center">Team Members</h1>
      <MemberForm addNewMember={addNewMember} member={member} setMember={setMember} isEditing={isEditing} setIsEditing={setIsEditing} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <TeamMembers teamMembers={teamMembers} setMember={setMember} setIsEditing={setIsEditing} />
    </div>
  );
}

export default App;
