import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Chat from "./pages/Chat";
import UseYourVoiceProject from "./pages/UseYourVoiceProject";
import ParkEase from "./pages/ParkEase";
import Temu from "./pages/Temu";
import Luminary from "./pages/Luminary";
import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <CustomCursor />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/chat" element={<Chat />} />
            <Route
              path="/project/useyourvoice"
              element={<UseYourVoiceProject />}
            />
            <Route path="/project/parkease" element={<ParkEase />} />
            <Route path="/project/temu" element={<Temu />} />
            <Route path="/project/luminary" element={<Luminary />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
