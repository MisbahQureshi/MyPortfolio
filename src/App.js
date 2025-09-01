// App.js
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact/index.js";
import Footer from "./components/Footer/index.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(178, 58, 72, 0.15) 0%,
      rgba(178, 58, 72, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(230, 180, 80, 0) 50%,
      rgba(230, 180, 80, 0.12) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  // initialize from localStorage or system preference
  const getInitialMode = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") return true;
    if (saved === "dark") return false;
    // fallback to system
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
  };

  const [lightMode, setLightMode] = useState(getInitialMode);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    localStorage.setItem("theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Router>
        <Navbar lightMode={lightMode} onToggle={() => setLightMode(m => !m)} />
        <Body>
          <Hero />
          <Wrapper>
            <AboutMe />
            <Education />
            <Experience />
          </Wrapper>
          <Wrapper>
            <Skills />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
