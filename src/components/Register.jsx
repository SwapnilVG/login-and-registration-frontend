import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUserCircle, FaUser, FaCalendar, FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons
import '../App.css'; // Import the custom CSS for styling

function Register() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://login-and-registration-backend-kb5c.onrender.com/api/register', { name, dob, email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      toast.success('Registration successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className="mx-auto">
          <div className="auth-card">
            <div className="text-center mb-4">
              <FaUserCircle className="avatar" />
            </div>
            <h3 className="text-center mb-4">SIGN UP</h3>
            <Form onSubmit={handleRegister}>
              <Form.Group controlId="formBasicName">
                <InputGroup>
                  <InputGroup.Text><FaUser /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicDob" className="mt-3">
                <InputGroup>
                  <InputGroup.Text><FaCalendar /></InputGroup.Text>
                  <Form.Control type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mt-3">
                <InputGroup>
                  <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                  <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <InputGroup>
                  <InputGroup.Text><FaLock /></InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputGroup>
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4 w-100">REGISTER</Button>
              <div className="text-center mt-3">
                <p>Already have an account? <Link to="/">Login</Link></p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
