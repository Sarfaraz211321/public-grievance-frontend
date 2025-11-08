import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import API from '../services/api';

function ComplaintList() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const res = await API.get('/complaints');
      setComplaints(res.data);
    };
    fetchComplaints();
  }, []);

  return (
    <div className="card p-3 shadow mt-4">
      <h4>My Complaints</h4>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c, index) => (
            <tr key={c._id}>
              <td>{index + 1}</td>
              <td>{c.category}</td>
              <td>{c.description}</td>
              <td>{c.status}</td>
              <td>{new Date(c.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ComplaintList;

