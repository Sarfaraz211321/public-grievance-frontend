import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import API from '../services/api';

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const res = await API.get('/admin/complaints');
    setComplaints(res.data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const updateStatus = async (id, status) => {
    await API.patch(`/admin/complaints/${id}`, { status });
    fetchComplaints();
  };

  return (
    <div className="card p-3 shadow">
      <h4>Admin Dashboard</h4>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c, index) => (
            <tr key={c._id}>
              <td>{index + 1}</td>
              <td>{c.user.name}</td>
              <td>{c.category}</td>
              <td>{c.description}</td>
              <td>{c.status}</td>
              <td>
                {c.status !== 'Resolved' && (
                  <Button variant="success" size="sm" onClick={() => updateStatus(c._id, 'Resolved')}>
                    Mark Resolved
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminDashboard;
