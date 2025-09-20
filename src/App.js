

import './App.css';
import Main from './components/Main';
import ProjectsFile from "./components/ProjectsFile";
import Resume from './components/Resume';
import Skills from './components/skills';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';

function App() {

  return (
       <div className="App">
      <div id="/"> <Main /> </div>
      <div id="ski"> <Skills /> </div>
      <div id="exp"><Experience/></div>
      <div id="project"> <ProjectsFile /> </div>
      <div id="certificates"><Certifications/> </div>
      <div id="about"> <About /> </div>
    </div>

  );
}

export default App;
