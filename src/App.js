import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./components/Users";
import PageNotFound from "./pages/PageNotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Roles from "./components/Roles";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import CssBaseline from "@mui/material/CssBaseline";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import PrivateRoute from "./components/PrivateRoute";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function AuthenticatedLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function App() {
  return (
    <UserAuthContextProvider>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Navigate to="/signin" replace /> // Redirect to signin by default
                }
              />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <AuthenticatedLayout>
                      <Dashboard />
                    </AuthenticatedLayout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <PrivateRoute>
                    <AuthenticatedLayout>
                      <Users />
                    </AuthenticatedLayout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/roles"
                element={
                  <PrivateRoute>
                    <AuthenticatedLayout>
                      <Roles />
                    </AuthenticatedLayout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <AuthenticatedLayout>
                      <Profile />
                    </AuthenticatedLayout>
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </Box>
      </ThemeProvider>
    </UserAuthContextProvider>
  );
}

export default App;
