import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
const User = () => {
  const { user } = useAuth();
  return (
    <Container className="w-75 mx-auto">
      <div className="text-center mt-5 pt-5">
      <h4>Welcome {user.displayName}</h4>
      <img
        class="
        mt-3
        rounded-circle
        border border-5 border-white
        shadow-lg
        frame"
        src={user.photoURL}
        alt=""
      />
      </div>
    </Container>
  );
};

export default User;
