import { Box } from "@mui/system";
import React from "react";
import { Routes } from "react-router-dom";

const NestedRoutes = () => {
  return (
    <Box>
      {/* Admin Routes */}
      <Routes>
        {/* <Route
          path="add-product"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        /> */}
      </Routes>
    </Box>
  );
};

export default NestedRoutes;
