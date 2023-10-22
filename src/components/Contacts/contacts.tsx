import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001', // Replace with your server's URL
  });
const Contacts = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    suggestion: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send the data to the server using the 'api' instance of Axios
    api.post('/Contacts', formData).then((response) => {
      // Handle the response if needed
    });
  };
  

  return (
    <Container fluid="md">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="johndoe@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Label>Suggestion</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
          />
        </Form.Group>
        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </Form>
    </Container>
  );
};

export default Contacts;
