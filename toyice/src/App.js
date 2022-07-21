import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Project_main from "./pages/project_main/templates/index";
import GNB from "./components/organisms/GNB";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <GNB />
        <Routes>
          <Route exact path="/" element={<Project_main/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
