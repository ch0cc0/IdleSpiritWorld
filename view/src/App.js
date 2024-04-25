import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

import Auth from "./pages/auth";
import Audio from "./components/audio";

function App() {

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
        <Audio />
        <Router>
          <Routes>
            <Route path="/" element={<Auth />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
