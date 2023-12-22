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

    return (
        <div className='formAddUserContainer'>
            <button onClick={handleButtonClick}>Add user</button>
            {isPopinVisible && (
                <div className="popin">
                    <form onSubmit={handleFormSubmit}>
                        <label>Nouveau Utilisateur :</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={newUser.lastName}
                            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="First Name"
                            value={newUser.firstName}
                            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Âge"
                            value={newUser.age}
                            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
                        />
                        <label>Genre :</label>
                        <select
                            value={newUser.gender}
                            onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <button type="submit">Ajouter</button>
                    </form>
                </div>
            )}
        </div>
    );
}
