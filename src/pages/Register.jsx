import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.endsWith('@gmail.com')) {
      setError('Enter correct Gmail!');
      return;
    }

    try {
      const res = await API.post('/auth/register', {
        name, email, password, area
      });

      localStorage.setItem('user', JSON.stringify({
        name: res.data.name || name,
        email,
        area,
        photo: '',
      }));

      setSuccess('Registered successfully! Redirecting to login...');
      setError('');
      setName(''); setEmail(''); setPassword(''); setArea('');

      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <>
      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />

      {/* Gradient Background */}
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          background: "linear-gradient(135deg, #d6249f, #285AEB)",
        }}
      >
        <Card style={{ width: "450px" }} className="shadow p-4">
          <h3 className="text-center mb-4 fw-bold">REGISTER</h3>

          {/* Alerts */}
          {success && <Alert variant="success">{success}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>

            {/* Name */}
            <Form.Group className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-person"></i>
                </span>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-envelope"></i>
                </span>
                <Form.Control
                  type="email"
                  placeholder="Email (Gmail only)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-lock"></i>
                </span>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            {/* Area */}
            <Form.Group className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <Form.Control
                  type="text"
                  placeholder="Area / Location"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-100 fw-bold text-white"
              style={{ background: "#d6249f", border: "none" }}
            >
              REGISTER
            </Button>
          </Form>

          {/* Already have an account */}
          <div className="text-center mt-3">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none text-primary">
                Login here
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Register;




// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import API from '../services/api';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [area, setArea] = useState('');
//   const [success, setSuccess] = useState('');
//   const [error, setError] = useState(''); // for error messages
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Gmail-only restriction
//     if (!email.endsWith('@gmail.com')) {
//       setError(' Enter Correct Gmail!');
//       return;
//     }

//     try {
//       const res = await API.post('/auth/register', { name, email, password, area });

//       // Optional: save user info
//       localStorage.setItem('user', JSON.stringify({
//         name: res.data.name || name,
//         email,
//         area,
//         photo: '',
//       }));

//       setSuccess('Registered successfully! Redirecting to login...');
//       setError('');
//       setName(''); setEmail(''); setPassword(''); setArea('');

//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       console.error(err);
//       setError('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px' }}>
//       <h4 className="mb-3">Register</h4>

//       {/* ✅ Success / Error Messages */}
//       {success && <Alert variant="success">{success}</Alert>}
//       {error && <Alert variant="danger">{error}</Alert>}

//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control 
//             value={name} 
//             onChange={e => setName(e.target.value)} 
//             required 
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control 
//             type="email" 
//             value={email} 
//             onChange={e => setEmail(e.target.value)} 
//             required 
//           />
//           <Form.Text className="text-muted">
//             Enter Correct Gmail.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control 
//             type="password" 
//             value={password} 
//             onChange={e => setPassword(e.target.value)} 
//             required 
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Area</Form.Label>
//           <Form.Control 
//             value={area} 
//             onChange={e => setArea(e.target.value)} 
//             required 
//           />
//         </Form.Group>

//         <Button type="submit" variant="primary" className="w-100">
//           Register
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default Register;
