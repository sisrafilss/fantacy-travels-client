import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { user, signInWithGoogle } = useAuth();

  console.log(user);

  return (
    <div>
      <button onClick={signInWithGoogle} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
