import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GNB from "./components/organisms/GNB";
import ProjectMain from "./pages/project_main/templates";
import ProjectAdd from "./pages/project_add";
import ProjectInfo from "./pages/project_info";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <GNB />
        <div className="App-contents">
          <Routes>
            <Route exact path="/" element={<ProjectMain/>} />
          </Routes>
          <Routes>
            <Route exact path="/create-toy" element={<ProjectAdd/>} />
          </Routes>
          <Routes>
            <Route exact path="/toy/:id" element={<ProjectInfo/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
