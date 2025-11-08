// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import API from '../services/api';

// function ComplaintForm() {
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post('/complaints', { category, description });
//       setSuccess('Complaint submitted successfully!');
//       setCategory('');
//       setDescription('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="card p-4 shadow">
//       <h4>Submit a Complaint</h4>
//       {success && <Alert variant="success">{success}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Category</Form.Label>
//           <Form.Select value={category} onChange={e => setCategory(e.target.value)} required>
//             <option value="">Select</option>
//             <option value="Water">Water</option>
//             <option value="Electricity">Electricity</option>
//             <option value="Road">Road</option>
//           </Form.Select>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Description</Form.Label>
//           <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} required />
//         </Form.Group>
//         <Button type="submit" variant="primary">Submit</Button>
//       </Form>
//     </div>
//   );
// }

// export default ComplaintForm;


import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function ComplaintForm() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You have to register/login first!');
      navigate('/register'); // Redirect to register page
      return;
    }

    try {
      const res = await API.post(
        '/complaints',
        { category, description },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send JWT token
          },
        }
      );
      setSuccess('Complaint submitted successfully!');
      setCategory('');
      setDescription('');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to submit complaint. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="card p-4 shadow">
      <h4>Submit a Complaint</h4>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Water">Water</option>
            <option value="Electricity">Electricity</option>
            <option value="Road">Road</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ComplaintForm;
