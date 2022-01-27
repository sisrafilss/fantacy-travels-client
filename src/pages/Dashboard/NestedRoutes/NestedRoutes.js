import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddExperience from "../AddExperience/AddExperience";

const NestedRoutes = () => {
  return (
    <Box>
      {/* Admin Routes */}
      <Routes>
        <Route path="add-experience" element={<AddExperience />} />
      </Routes>
    </Box>
  );
};

export default NestedRoutes;
