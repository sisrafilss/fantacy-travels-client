import React from "react";
import useFirebase from "../../../hooks/useFirebase";

const Login = () => {
  const { user, signInWithGoogle } = useFirebase();

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
