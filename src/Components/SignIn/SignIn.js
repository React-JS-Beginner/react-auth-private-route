import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FirebaseAuth from "../../Hooks/FirebaseAuth";

const SignIn = () => {
  const {signInWithGoogle} = FirebaseAuth();
  return (
    <Container className="mt-4 pt-4 w-25">
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
        &nbsp; &nbsp;
        <Link to="/registration">Create One</Link>
        {/* Display Error */}
        <p className="text-danger"></p>
        {/* Register Button */}
        <Button variant="secondary" type="submit">
          Sign In
        </Button>
      </Form>

      <div className="mt-5">
        <p className="text-secondary">Or, you can also sign in with</p>

        <Button variant="primary w-25 me-3" size="sm">
          Facebook
        </Button>
        <Button onClick={signInWithGoogle} variant="danger w-25 me-3" size="sm">
          Google
        </Button>
        <Button variant="success w-25 me-3" size="sm">
          Github
        </Button>
      </div>
    </Container>
  );
};

export default SignIn;
