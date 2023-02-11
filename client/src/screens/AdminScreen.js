import React from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import AdminHome from '../components/admin/AdminHome';
import UpdateContent from '../components/admin/UpdateContent';

const AdminScreen = () => {
  return (
    <>
      <Container className="pt-3">
        <h1>Admin</h1>
        <Routes>
          <Route index element={<AdminHome />} />
          <Route path="/updateContent/:id" element={<UpdateContent />} />
        </Routes>
      </Container>
    </>
  );
};

export default AdminScreen;
