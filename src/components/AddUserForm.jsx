import React, { useState } from 'react';
import '../styles/UserForm.css';

export default function AddUserForm({ onAddUser }) {
    const [isPopinVisible, setPopinVisible] = useState(false);
    const [newUser, setNewUser] = useState({
        lastName: '',
        firstName: '', 
        age: '',
        gender: 'Male',
    });

    const handleButtonClick = () => {
        setPopinVisible(!isPopinVisible);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddUser(newUser.lastName, newUser.firstName, newUser.age, newUser.gender);
        setNewUser({
          lastName: '',
          firstName: '',
          age: '',
          gender: 'Male',
        });
        setPopinVisible(false);
      };
      const handleCancelClick = () => {
        setNewUser({
          lastName: '',
          firstName: '',
          age: '',
          gender: 'Male',
        });
        setPopinVisible(false);
      };
    return (
        <div className='formAddUserContainer'>
            <button className='btnAddUser btnPopAddUser' onClick={handleButtonClick}>Add user</button>
            {isPopinVisible && (
                <>
                <div className="overlay active"></div>
                <div className="popin">
                    <form className="formAddUser"onSubmit={handleFormSubmit}>
                        <h1>Add user</h1>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={newUser.lastName}
                            required
                            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                        />
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={newUser.firstName}
                            required
                            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                        />
                         <label>Last Name</label>
                        <input
                            type="number"
                            placeholder="Âge"
                            required
                            value={newUser.age}
                            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
                        />
                        <label>Genre</label>
                        <select
                            value={newUser.gender}
                            onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <button className="btn btnAddUser"type="submit">Add</button>
                        <button className="btn btnCancel"type="button" onClick={handleCancelClick}>Cancel</button>
                    </form>
                </div>
                </>
            )}
        </div>
       
    );
}
