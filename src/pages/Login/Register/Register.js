import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { user, registerUser, authError, setAuthError } = useAuth();
  const navigate = useNavigate();

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    // Check password matching
    if (data.password === data.password2) {
      const fullName = `${data.firstName} ${data.lastName}`;

      registerUser(fullName, data.email, data.password, navigate);
    } else if (data.password !== data.password2) {
      setAuthError("Password Did not Matched");
    }
  };

  return (
    <div className="login-container my-2">
      <div className="mb-2">
        {/* <img src={logo} style={{ width: "60px", height: "60px" }} alt="" /> */}
      </div>
      <div>
        <h2 className="h3 mb-4">Please Register</h2>
      </div>
      <div className="login-form border rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-warning">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-warning">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password2", { required: true })}
            />
            {errors.password2 && (
              <span className="text-warning">This field is required</span>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-primary fw-bold"
            value="Register"
          />
        </form>
        {authError && (
          <div className="alert alert-danger mt-4" role="alert">
            {authError}
          </div>
        )}
      </div>
      <div
        className="border mt-4"
        style={{ backgroundColor: "#f6f8fa", padding: "10px 74px" }}
      >
        <span>
          Already Registered? <Link to="/login">Login</Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Register;
