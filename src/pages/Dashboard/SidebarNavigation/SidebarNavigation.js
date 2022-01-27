import { ListItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
// import MessageIcon from "@mui/icons-material/Message";
import GroupIcon from "@mui/icons-material/Group";
import useAuth from "../../../hooks/useAuth";

const SidebarNavigation = () => {
  const { admin } = useAuth();

  return (
    <>
      {/* Users Routes */}
      <ListItem button>
        <NavLink to="add-experience" className="nav-link text-secondary">
          <AddIcon sx={{ mr: 2 }} />
          Add Experience
        </NavLink>
      </ListItem>

      <ListItem button>
        <NavLink to="manage-my-blogs" className="nav-link text-secondary">
          <GroupIcon sx={{ mr: 2 }} />
          Manage My Blogs
        </NavLink>
      </ListItem>

      {/* {admin && (
        <ListItem button>
          <NavLink to="manage-users" className="nav-link text-secondary">
            <GroupIcon sx={{ mr: 2 }} />
            Manage Users
          </NavLink>
        </ListItem>
      )} */}
    </>
  );
};

export default SidebarNavigation;
