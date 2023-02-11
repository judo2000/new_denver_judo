import { useQuery } from '@apollo/client';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { GET_CONTENTS, GET_INSTRUCTORS } from '../../utils/queries';
import Loader from '../Loader';
const AdminHome = () => {
  const { loading: contentLoading, data: contentData } = useQuery(GET_CONTENTS);
  const contents = contentData?.contents || {};

  const { loading: instructorLoading, data: instructorData } =
    useQuery(GET_INSTRUCTORS);
  const instructors = instructorData?.instructors || {};

  const navigate = useNavigate();

  return (
    <>
      <h2>Page Content</h2>
      {contentLoading || instructorLoading ? (
        <Loader />
      ) : (
        <>
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

          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th colspan="5" className="text-center">
                  Our Instructors
                </th>
              </tr>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Rank</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor) => (
                <tr key={instructor._id}>
                  <td style={{ width: '20%' }}>{instructor._id}</td>
                  <td style={{ width: '20%' }}>{instructor.instructorName}</td>
                  <td style={{ width: '20%' }}>{instructor.instructorYype}</td>
                  <td style={{ width: '20%' }}>{instructor.instructorRank}</td>
                  <td style={{ width: '20%' }}>
                    <Button
                      type="button"
                      className="updateBtn"
                      onClick={() =>
                        navigate(`updateInstructor/${instructor._id}`)
                      }
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default AdminHome;
