import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Container className="mt-5 pt-5 w-25">
      <p className="text-secondary fs-1">Sign In</p>
      <Form>
        {/* Email Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            //   onBlur={}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>

        {/* Password Field */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            //   onBlur={}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <span>Don't have an account?</span> 

        &nbsp;
        &nbsp;

        <Link to="/registration">Click here...</Link>

        {/* Display Error */}
        <p className="text-danger"></p>

        {/* Register Button */}
        <Button variant="secondary" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
    
  );
};

export default SignIn;
