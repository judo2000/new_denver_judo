import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_INSTRUCTOR_BY_ID } from '../../utils/queries';
import Loader from '../Loader';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UPDATE_INSTRUCTOR } from '../../utils/mutations';
import { toast } from 'react-toastify';
import { getError } from '../../utils/getError';
import MessageBox from '../MessageBox';

const UpdateInstructor = () => {
  const { id } = useParams();
  const [instructorName, setInstructorName] = useState('');
  const [instructorType, setInstructorType] = useState('');
  const [instructorRank, setInstructorRank] = useState('');
  const [instructorImage, setInstructorImage] = useState('');
  const [instructorBio, setInstructorBio] = useState('');

  const { loading, data } = useQuery(GET_INSTRUCTOR_BY_ID, {
    variables: { id: id },
  });

  useEffect(() => {
    const instructor = data?.instructorById || {};
    setInstructorName(instructor.instructorName);
    setInstructorType(instructor.instructorType);
    setInstructorRank(instructor.instructorRank);
    setInstructorImage(instructor.instructorImage);
    setInstructorBio(instructor.instructorBio);
  }, [
    data,
    setInstructorName,
    setInstructorType,
    setInstructorRank,
    setInstructorImage,
    setInstructorBio,
  ]);

  const [updateInstructor, { error }] = useMutation(UPDATE_INSTRUCTOR);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log(instructorImage);
      await updateInstructor({
        variables: {
          id,
          instructorName,
          instructorType,
          instructorRank,
          instructorImage,
          instructorBio,
        },
      });
      toast.success('The Instructor has been updated successfully');
      navigate('/_admin');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div>
      <Helmet>
        <title>Update Instructor</title>
      </Helmet>
      <h1 className="my-3">UpdateInstructor</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="instructorName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={instructorName || ''}
              onChange={(e) => setInstructorName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="instructorType">
            <Form.Label>Instructor Type</Form.Label>
            <Form.Control
              as="select"
              name="instructorType"
              value={instructorType}
              aria-label="Default select example"
              onChange={(e) => setInstructorType(e.target.value)}
              required
            >
              <option value="">Select Instructor Type</option>
              <option value="headInstructor">Head Instructor</option>
              <option value="assistantInstructor">Assistant Instructor</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="instructorRank">
            <Form.Label>Instructor Rank</Form.Label>
            <Form.Control
              required
              as="select"
              type="select"
              name="instructorRank"
              value={instructorRank}
              aria-label="Default select example"
              onChange={(e) => setInstructorRank(e.target.value)}
            >
              <option value="">Select Instructor Rank</option>
              <option value="1st degree black belt">
                1st degree black balet
              </option>
              <option value="2nd degree black belt">
                2nd degree black balet
              </option>

              <option value="3rd degree black belt">
                3rd degree black balet
              </option>

              <option value="4th degree black belt">
                4th degree black balet
              </option>
              <option value="5th degree black belt">
                5th degree black balet
              </option>
              <option value="6th degree black belt">
                6th degree black belt
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="instructorImage">
            <Form.Label>Instructor Image</Form.Label>
            <Form.Control
              value={instructorImage || ''}
              onChange={(e) => setInstructorImage(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="instructorBio">
            <Form.Label>Instructor Bio</Form.Label>
            <ReactQuill
              name="contentText"
              value={instructorBio || ''}
              theme="snow"
              onChange={setInstructorBio}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </div>
  );
};

export default UpdateInstructor;
