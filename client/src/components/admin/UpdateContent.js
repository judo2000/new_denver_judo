import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_CONTENT_BY_ID } from '../../utils/queries';
import { UPDATE_CONTENT } from '../../utils/mutations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import MessageBox from '../MessageBox';
import Loader from '../Loader';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { getError } from '../../utils/getError';

const UpdateContent = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_CONTENT_BY_ID, {
    variables: { id: id },
  });

  const [contentHead, setContentHead] = useState('');
  const [contentText, setContentText] = useState('');

  useEffect(() => {
    const content = data?.contentById || {};
    setContentHead(content.contentHead);
    setContentText(content.contentText);
  }, [data, setContentHead]);

  const [updateContent, { error }] = useMutation(UPDATE_CONTENT);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateContent({
        variables: {
          id,
          contentHead,
          contentText,
        },
      });
      toast.success('Your content was updated successfully.');
      navigate('/_admin');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div>
      <Helmet>
        <title>Update Content</title>
      </Helmet>
      <h1 className="my-3">Update Content</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="contentHead">
            <Form.Label>Section Heading</Form.Label>
            <Form.Control
              value={contentHead || ''}
              onChange={(e) => setContentHead(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contentText">
            <Form.Label>Text</Form.Label>
            <ReactQuill
              name="contentText"
              value={contentText || ''}
              theme="snow"
              onChange={setContentText}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </div>
  );
};

export default UpdateContent;
