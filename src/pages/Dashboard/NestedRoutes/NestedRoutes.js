import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddExperience from "../AddExperience/AddExperience";
import LogOut from "../LogOut/LogOut";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageBlogs from "../ManageBlogs/ManageBlogs";
import ManageMyBlogs from "../ManageMyBlogs/ManageMyBlogs";

const NestedRoutes = () => {
  return (
    <Box>
      {/* Admin Routes */}
      <Routes>
        <Route path="/" element={<AddExperience />} />
        <Route path="add-experience" element={<AddExperience />} />
        <Route path="manage-my-blogs" element={<ManageMyBlogs />} />
        <Route path="make-admin" element={<MakeAdmin />} />
        <Route path="manage-blogs" element={<ManageBlogs />} />
        <Route path="logout" element={<LogOut />} />
      </Routes>
    </Box>
  );
};

export default NestedRoutes;
