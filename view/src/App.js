import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

import Auth from "./pages/auth";
import WelcomePage from "./pages/welcome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { isAuthenticated } from "./store/auth/authActions";

import NavBar from "./components/navbar";
import CharacterPage from "./pages/character";

import { save, load } from "./utils/helper_funcs";
import { charActions } from "./store/char/charReducers";
import SkillsPage from "./pages/skills";
import ClassPage from "./pages/classPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const char = useSelector((state) => state.char);

  useEffect(() => {
    const save = load();
    const username = auth.userData.username
    console.log(username);
    if (auth.isAuthenticated && save && username) {
      console.log("Checking for username property in saved state...");
      if (save.hasOwnProperty(username)) {
        dispatch(charActions.loadChar(save[username].char));
        console.log('Loading save');
      } else {
        console.log("Username property not found in saved state.");
      }
    } else {
      console.log("Save or username not available.");
    }
    dispatch(isAuthenticated()); 
    
  }, [auth.isAuthenticated]);
  
  useEffect(() => {
    const saveInterval = setInterval(() => {
      if (auth.isAuthenticated && char && char.character) {
        const username = auth.userData.username
        console.log(char);
        const saveState = {[username]: {char}};
        save(saveState);
        console.log("Saving");
      };
    }, 5000); // 5 seconds
    return () => clearInterval(saveInterval);
  }, [char, auth.isAuthenticated]);

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
    <div className="App" sx={{ 
      height: "100vh"
    }}>
      <ThemeProvider theme={responsiveTheme}>
        <Router>
          {auth.isAuthenticated ? <NavBar /> : null}
          <Routes>
            <Route path="/" element={auth.isAuthenticated ? <WelcomePage /> : <Auth />} />
            {auth.isAuthenticated && char.character ? <Route path="/character" element={<CharacterPage />} /> : <Route path="/character" element={<Navigate to="/" />} />}
            {auth.isAuthenticated && char.character ? <Route path="/skills" element={<SkillsPage />} /> : <Route path="/skills" element={<Navigate to="/" />} />}
            {auth.isAuthenticated && char.character ? <Route path="/class" element={<ClassPage />} /> : <Route path="/class" element={<Navigate to="/" />} />}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
