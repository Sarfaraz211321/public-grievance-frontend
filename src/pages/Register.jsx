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
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/auth/register', { name, email, password, area });
//       setSuccess('Registered successfully! You can login now.');
//       setName(''); setEmail(''); setPassword(''); setArea('');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px' }}>
//       <h4 className="mb-3">Register</h4>
//       {success && <Alert variant="success">{success}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control value={name} onChange={e => setName(e.target.value)} required />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Area</Form.Label>
//           <Form.Control value={area} onChange={e => setArea(e.target.value)} required />
//         </Form.Group>
//         <Button type="submit" variant="primary">Register</Button>
//       </Form>
//     </div>
//   );
// }

// export default Register;



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
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post('/auth/register', { name, email, password, area });

//       // Automatically save user info in localStorage (optional)
//       localStorage.setItem('user', JSON.stringify({
//         name: res.data.name || name,
//         email,
//         area,
//         photo: '', // default empty
//       }));

//       setSuccess('Registered successfully! Redirecting to login...');
//       setName(''); setEmail(''); setPassword(''); setArea('');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px' }}>
//       <h4 className="mb-3">Register</h4>
//       {success && <Alert variant="success">{success}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control value={name} onChange={e => setName(e.target.value)} required />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Area</Form.Label>
//           <Form.Control value={area} onChange={e => setArea(e.target.value)} required />
//         </Form.Group>
//         <Button type="submit" variant="primary">Register</Button>
//       </Form>
//     </div>
//   );
// }

// export default Register;



import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState(''); // for error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Gmail-only restriction
    if (!email.endsWith('@gmail.com')) {
      setError(' Enter Correct Gmail!');
      return;
    }

    try {
      const res = await API.post('/auth/register', { name, email, password, area });

      // Optional: save user info
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
      console.error(err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px' }}>
      <h4 className="mb-3">Register</h4>

      {/* ✅ Success / Error Messages */}
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <Form.Text className="text-muted">
            Enter Correct Gmail.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Area</Form.Label>
          <Form.Control 
            value={area} 
            onChange={e => setArea(e.target.value)} 
            required 
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
