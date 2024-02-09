import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Roles from "./Roles";
import UserCard from "./UserCard";
import RolesCard from "./RolesCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chart from "./Chart";
import FullFeaturedCrudGrid from "./EditUsers";
import Users from "./Users";
import PieCharts from "./PieChart";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const numberOfUsers = 100;
  const numberOfRoles = 5;

  return (
    <div className="dash">
      <div>
        <UserCard numberOfUsers={numberOfUsers} />
      </div>

      <div>
        <RolesCard numberOfRoles={numberOfRoles} />
      </div>
      <div>
        <RolesCard numberOfRoles={numberOfRoles} />
      </div>
     
      {/* Dummy Cards */}

      {/* </div><div>
 <Card sx={{padding:4, marginLeft:4,}}>
          <CardContent>
            <p>Dummy Content 1</p>
          </CardContent>
        </Card>
  
        <Card sx={{padding:4, marginLeft:4,}}>
          <CardContent>
            <p>Dummy Content 2</p>
          </CardContent>
        </Card> */}

     
        <Chart />
        <PieCharts />
        <Chart />
 
    
  </div>
  );
}
