import React, { useState, useEffect } from 'react';
import '../styles/UserForm.css';

export default function EditUserForm({ user, onUpdateUser, onDeleteUser, onCancelEdit }) {
  const [editedUser, setEditedUser] = useState({
    lastName: user.lastName,
    firstName: user.firstName,
    age: user.age,
    gender: user.gender,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isDeleteButton = e.nativeEvent.submitter.className === 'btn btnDelete';
    if (isDeleteButton) {
      onDeleteUser(user.id); 
    } else {
      onUpdateUser(editedUser);
    }
  };

  const handleCancelEdit = () => {
    onCancelEdit();
  };

  useEffect(() => {
    setEditedUser({
      lastName: user.lastName,
      firstName: user.firstName,
      age: user.age,
      gender: user.gender,
    });
  }, [user]);

  return (
    <div className='editContainer'>
      <div className='popin' onClick={(e) => e.stopPropagation()}>
        <form className='formAddUser' onSubmit={handleFormSubmit}>
          <h2>Edit user</h2>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={editedUser.lastName}
            onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })}
          />
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={editedUser.firstName}
            onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })}
          />
          <label>Age</label>
          <input
            type="number"
            placeholder="Âge"
            value={editedUser.age}
            onChange={(e) => setEditedUser({ ...editedUser, age: e.target.value })}
          />
          <label>Genre :</label>
          <select
            value={editedUser.gender}
            onChange={(e) => setEditedUser({ ...editedUser, gender: e.target.value })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit" className='btn btnDelete'>
            Delete user
          </button>
          <button type="submit" className='btn btnAddUser'>
            Save Change
          </button>
          <button type="button" className='btn btnCancel' onClick={handleCancelEdit}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
