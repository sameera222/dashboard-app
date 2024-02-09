import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard" className="custom-link">
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccessibilityNewIcon />
      </ListItemIcon>
      <Link to="/roles" className="custom-link">
        <ListItemText primary="Roles" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/users" className="custom-link">
        <ListItemText primary="Users" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="/profile" className="custom-link">
        <ListItemText primary="Profile" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="Personal" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="Professional" />
    </ListItemButton>
  </React.Fragment>
);
