import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user info from localStorage (stored at login)
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) setUser(userData);
  }, []);

  if (!user) {
    return (
      <div className="card p-4 shadow">
        <h4>Profile Page</h4>
        <p>Please login or register to view profile info.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <Card style={{ width: '22rem' }} className="p-3 shadow text-center">
        {/* Profile Photo */}
        <img
          src={user.photo || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="rounded-circle mb-3"
          width="120"
          height="120"
        />
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        {/* Edit profile button for future */}
        <Button variant="primary">Edit Profile</Button>
      </Card>
    </div>
  );
}

export default Profile;

