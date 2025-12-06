import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import API from '../services/api';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/forgot-password', { email });
      setMessage(res.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setMessage('');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #d60087, #4b00ff)",
      }}
    >
      <Card className="p-4 shadow-lg border-0" style={{ width: '400px' }}>
        <h3 className="text-center fw-bold mb-3">Forgot Password</h3>

        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 py-2 fw-bold"
            style={{ background: "#d60087", border: "none" }}
          >
            Send Reset Link
          </Button>
        </Form>

        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none fw-semibold" style={{ color: "#d60087" }}>
            Back to Login
          </a>
        </div>
      </Card>
    </div>
  );
}

export default ForgotPassword;



// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import API from '../services/api';

// function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post('/auth/forgot-password', { email });
//       setMessage(res.data.message);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Something went wrong');
//       setMessage('');
//     }
//   };

//   return (
//     <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px' }}>
//       <h4 className="mb-3">Forgot Password</h4>
//       {message && <Alert variant="success">{message}</Alert>}
//       {error && <Alert variant="danger">{error}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Button type="submit" variant="primary" className="w-100">Send Reset Link</Button>
//       </Form>
//     </div>
//   );
// }

// export default ForgotPassword;
