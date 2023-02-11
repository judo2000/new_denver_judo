import { useQuery } from '@apollo/client';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { GET_CONTENTS } from '../../utils/queries';
import Loader from '../Loader';
const AdminHome = () => {
  const { loading, data } = useQuery(GET_CONTENTS);
  const contents = data?.contents || {};

  const navigate = useNavigate();

  return (
    <>
      <h2>Page Content</h2>
      {loading ? (
        <Loader />
      ) : (
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th colspan="5" className="text-center">
                Page Content
              </th>
            </tr>
            <tr>
              <th>ID</th>
              <th>Page</th>
              <th>Section</th>
              <th>Heading</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr key={content._id}>
                <td style={{ width: '20%' }}>{content._id}</td>
                <td style={{ width: '20%' }}>{content.page}</td>
                <td style={{ width: '20%' }}>{content.section}</td>
                <td style={{ width: '20%' }}>{content.contentHead}</td>
                <td style={{ width: '20%' }}>
                  <Button
                    type="button"
                    className="updateBtn"
                    onClick={() => navigate(`updateContent/${content._id}`)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default AdminHome;
