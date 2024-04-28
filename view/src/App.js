import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Alert, ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

import Auth from "./pages/auth";
import WelcomePage from "./pages/welcome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { isAuthenticated } from "./store/auth/authActions";

import NavBar from "./components/navbar";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isAuthenticated());
  }, [auth.isAuthenticated]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#00a86b',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
    typography: {
      fontFamily: [
        'VT323',
      ].join(','),
    },
  });

  const responsiveTheme = responsiveFontSizes(theme);

  return (
    <div className="App">
      <ThemeProvider theme={responsiveTheme}>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={auth.isAuthenticated ? <WelcomePage /> : <Auth />} />            
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
