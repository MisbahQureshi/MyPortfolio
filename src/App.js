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
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Router>
        <Navbar />
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
          <Footer/>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
