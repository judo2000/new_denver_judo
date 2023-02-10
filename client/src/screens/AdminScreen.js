import React from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import AdminHome from '../components/admin/AdminHome';
import Content from '../components/admin/Content';

const AdminScreen = () => {
  return (
    <>
      <Container className="pt-3">
        <h1>Admin</h1>
        <Routes>
          <Route index element={<AdminHome />} />
          <Route path=":id" element={<Content />} />
        </Routes>
      </Container>
    </>
  );
};

export default AdminScreen;
