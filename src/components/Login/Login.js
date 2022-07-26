import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    <div className='container mt-5' id='login'>
      <div className="row">
        <div className="col-sm-12 col-lg-2 blog">
          <h5 className='globet'>GloBeTECH</h5>
          <h5 className='companylimi'>Company LimiTED</h5>
          <h6 className='make'>Make Your digitalized & more effecient</h6>
        </div>
        <div className="col-sm-12 col-lg-8 loginform">
          <div className="card m-auto w-50 p-5 mt-5 mb-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;