import { useQuery } from '@apollo/client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { GET_CONTENTS } from '../../utils/queries';

const AdminHome = () => {
  const { loading, data } = useQuery(GET_CONTENTS);
  const contents = data?.contents || {};
  console.log(contents);
  return (
    <>
      <h2>Page Content</h2>
      {loading
        ? 'LOADING...'
        : contents.map((content) => (
            <div key={content._id}>
              <Link to={content._id}>{content.contentHead}</Link>
            </div>
          ))}
    </>
  );
};

export default AdminHome;
