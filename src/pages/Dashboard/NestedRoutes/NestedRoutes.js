import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddExperience from "../AddExperience/AddExperience";
import ManageMyBlogs from "../ManageMyBlogs/ManageMyBlogs";

const NestedRoutes = () => {
  return (
    <Box>
      {/* Admin Routes */}
      <Routes>
        <Route path="/" element={<AddExperience />} />
        <Route path="add-experience" element={<AddExperience />} />
        <Route path="manage-my-blogs" element={<ManageMyBlogs />} />
      </Routes>
    </Box>
  );
};

export default NestedRoutes;
