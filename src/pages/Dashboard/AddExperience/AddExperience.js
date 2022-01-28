import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddExperience = () => {
  const { user, admin } = useAuth();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("thumbnail", data.thumbnail[0]);

    formData.append("location", data.location);
    formData.append("date", data.date);
    formData.append("expense", data.expense);
    formData.append("rating", data.rating);

    // Author Info
    formData.append("name", user.displayName);
    formData.append("email", user.email);
    formData.append("admin", admin);
    formData.append("image", user.photoURL);
    formData.append("postedOn", new Date().toDateString());

    formData.append("description", data.description);

    // console.log(data);
    axios.post("http://localhost:5000/blogs", formData).then((res) => {
      if (res.data?.insertedId) {
        alert("Your Experience Added Successfully. Checkout the Blog Page!");
        // reset();
        console.log(res.data);
      }
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-container">
        <h2 className="text-white mb-5 display-6 text-center">
          Share Your Travel Experience
        </h2>

        {/* Your Experience Add form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Blog Title */}
          <div className="mb-4">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          {/* Thumbnail Image */}
          <div className="mb-4">
            <label className="form-label">Choose Thumbnail Image</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              {...register("thumbnail", { required: true })}
            />
            {errors.img && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="location"
              {...register("location", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          {/* Travel Date */}
          <div className="mb-4">
            <label className="form-label">Travel Date</label>
            <input
              type="date"
              className="form-control"
              {...register("date", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          {/* Total Exprense */}
          <div className="mb-4">
            <label className="form-label">Expense</label>
            <input
              type="number"
              className="form-control"
              placeholder="Your Total Expense (Estimated) in USD"
              {...register("expense", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="form-label">Rating</label>
            <input
              type="number"
              className="form-control"
              placeholder="Your Overall Experience Rating out of 5"
              {...register("rating", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Share your experience in Detail"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-primary fw-bold"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddExperience;
