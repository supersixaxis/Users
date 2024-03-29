import React, { useState } from 'react';
import User from './User';
import AddUserForm from './AddUserForm';
import { v4 as uuidv4 } from 'uuid';

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: '1',
      photos: 'https://picsum.photos/200',
      lastName: 'Doe',
      firstName: 'John',
      age: '20',
      gender: 'Male',
    },
    {
      id: '2',
      photos: 'https://picsum.photos/200',
      lastName: 'Smith',
      firstName: 'Jane',
      age: '20',
      gender: 'Male',
    },
  ]);

  const addUser = (lastName, firstName, age, gender) => {
    const newUser = {
      id: uuidv4(),
      photos: 'https://picsum.photos/200',
      lastName: lastName,
      firstName: firstName,
      age: age,
      gender: gender,
    };
    setUsers((prevUserList) => [...prevUserList, newUser]);
  };

  const updateUser = (userId, editedUser) => {
    setUsers((prevUserList) =>
      prevUserList.map((user) => (user.id === userId ? { ...user, ...editedUser } : user))
    );
  };
  const deleteUser = (userId) => {
    setUsers((prevUserList) => prevUserList.filter((user) => user.id !== userId));
  };

  return (
    <div className='container'>
      <AddUserForm onAddUser={addUser} />
      <h1>Liste des utilisateurs</h1>
      <div className='usersContainer'>
        {users.map((user, index) => (
          <User key={index} 
          user={user} 
          onUpdateUser={updateUser} 
          onDeleteUser={deleteUser}  />
        ))}
      </div>
    </div>
  );
}
