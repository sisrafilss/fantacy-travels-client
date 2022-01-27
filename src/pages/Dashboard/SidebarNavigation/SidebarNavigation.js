import { ListItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import MessageIcon from "@mui/icons-material/Message";
import GroupIcon from "@mui/icons-material/Group";
import useAuth from "../../../hooks/useAuth";

const SidebarNavigation = () => {
  const { admin } = useAuth();

  return (
    <>
      {/* Admin Routes */}

      <ListItem button>
        <NavLink
          to="add-experience"
          className="nav-link text-secondary"

        >
          <AddIcon sx={{ mr: 2 }} />
          Add Experience
        </NavLink>
      </ListItem>

      {admin && (
        <ListItem button>
          <NavLink to="manage-users" className="nav-link text-secondary">
            <GroupIcon sx={{ mr: 2 }} />
            Manage Users
          </NavLink>
        </ListItem>
      )}

      {/* User Routes */}
      <ListItem button>
        <NavLink to="review" className="nav-link text-secondary">
          <MessageIcon sx={{ mr: 2 }} />
          Review
        </NavLink>
      </ListItem>
    </>
  );
};

export default SidebarNavigation;
