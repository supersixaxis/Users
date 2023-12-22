import React from 'react';
import '../styles/User.css'
export default function User({ user }) {
    return (
      <div className='cardUserContainer'>
        <img src={user.photos} alt="" />
        <h2>{user.firstName} {user.lastName}</h2>
        <p>{user.age}</p>
        <p>{user.gender}</p>
      </div>
    );
  }
