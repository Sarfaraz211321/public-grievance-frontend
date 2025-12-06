import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) setUser(userData);
  }, []);

  if (!user) {
    return (
      <div
        style={{
          height: "100vh",
          background: "linear-gradient(135deg, #d53369 0%, #daae51 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card className="p-4 shadow" style={{ width: "25rem", textAlign: "center" }}>
          <h3>Profile Page</h3>
          <p>Please login or register to view profile info.</p>
        </Card>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom, #d53369, #6e54f7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "26rem",
          padding: "30px",
          borderRadius: "12px",
          border: "none",
        }}
        className="shadow text-center"
      >
        {/* Profile Image */}
        <img
          src={user.photo || "https://via.placeholder.com/120"}
          alt="Profile"
          className="rounded-circle mb-3"
          width="120"
          height="120"
          style={{ objectFit: "cover", border: "3px solid #eee" }}
        />

        {/* Name + Email */}
        <h3 className="fw-bold">{user.name}</h3>
        <p style={{ fontSize: "15px", color: "#555" }}>{user.email}</p>

        {/* Button */}
        <Button
          style={{
            background: "linear-gradient(90deg, #d53369, #6e54f7)",
            border: "none",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Edit Profile
        </Button>
      </Card>
    </div>
  );
}

export default Profile;


// import React, { useEffect, useState } from 'react';
// import { Card, Button } from 'react-bootstrap';

// function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
   
//     const userData = JSON.parse(localStorage.getItem('user'));
//     if (userData) setUser(userData);
//   }, []);

//   if (!user) {
//     return (
//       <div className="card p-4 shadow">
//         <h4>Profile Page</h4>
//         <p>Please login or register to view profile info.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-4 d-flex justify-content-center">
//       <Card style={{ width: '22rem' }} className="p-3 shadow text-center">
//         {/* Profile Photo */}
//         <img
//           //src={user.photo || 'https://via.placeholder.com/150'}
//           alt="Profile"
//           className="rounded-circle mb-3"
//           width="120"
//           height="120"
//         />
//         <h4>{user.name}</h4>
//         <p>{user.email}</p>
//         {/* Edit profile button for future */}
//         <Button variant="primary">Edit Profile</Button>
//       </Card>
//     </div>
//   );
// }

// export default Profile;

