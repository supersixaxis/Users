import React, { useState, useEffect } from 'react';
import '../styles/User.css';
import EditUserForm from './EditUserForm';
import '../styles/UserForm.css';
export default function User({ user, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };
  const cancelEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className='cardUserContainer' onClick={startEditing}>
      <img src={user.photos} alt="" />
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.age}</p>
      <p>{user.gender}</p>
      {isEditing && (
        <>
         <div className="overlay active"></div>
        <EditUserForm
          user={user}
          onUpdateUser={(editedUser) => {
            onUpdateUser(user.id, editedUser);
            cancelEditing();
          }}
          onCancelEdit={cancelEditing}
        />
        </>
      )}
    </div>
  );
}
