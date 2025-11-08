import React from 'react';
import ComplaintForm from '../components/ComplaintForm';
import ComplaintList from '../components/ComplaintList';

function Home() {
  return (
    <>
      <h2 className="text-center mb-4">Welcome to Public Grievance Portal</h2>
      <ComplaintForm />
      <ComplaintList />
    </>
  );
}

export default Home;
