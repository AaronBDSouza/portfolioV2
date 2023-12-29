import TopBar from "./components/topBar/TopBar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects"
import ProjectsList from "./components/projectsList/ProjectsList";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import ProjectViewer from "./components/projectViewer/ProjectViewer";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* <Route path="/projectViewer" render={(props) => <ProjectViewer {...props}/>}/>*/}
      <TopBar menuOpen = { menuOpen } setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = { menuOpen } setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Skills/>
        <Experience/>
        {/* <ProjectsList/> */}
        <Gallery/>
        <Contact/>
        {/* <Projects/> */}
        {/* <Portfolio/> - For development only */}
        {/* <Projects/> - For development only */}
        {/* <Testimonials/> - For development only */}       
      </div>
    </div>
  );
}

export default App;
