import React from 'react';

export default function User({ user }) {
    return (
      <div>
        <img src={user.photos} alt="" />
        <h2>{user.firstName} {user.lastName}</h2>
        <p>{user.age}</p>
        <p>{user.gender}</p>
      </div>
    );
  }
