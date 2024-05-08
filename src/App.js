import logo from "./logo.svg";
import "./App.css";
import "../node_modules/flowbite/dist/flowbite";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsReg from "./Components/ProjectsReg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<ProjectsReg />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
