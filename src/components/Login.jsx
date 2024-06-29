// Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons
import '../App.css'; // Import the custom CSS for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://login-and-registration-backend-kb5c.onrender.com/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      console.error('Login error', error);
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 login-bg ">
      <Row className="w-100">
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className="mx-auto">
          <div className="auth-card">
            <div className="text-center mb-4">
              <FaUserCircle className="avatar" />
            </div>
            <h3 className="text-center mb-4">SIGN IN</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
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

              <Button variant="primary" type="submit" className="mt-4 w-100">LOGIN</Button>
              <div className="d-flex justify-content-between mt-2">
                <Form.Check type="checkbox" label="Remember me" />
                <Link to="">Forgot your password?</Link>
              </div>
              <div className="text-center mt-3">
                <p className='f-bg'>Don't have an account? <Link to="/register">Sign up</Link></p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
