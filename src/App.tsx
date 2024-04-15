import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout";
import Me from "./pages/Me";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Techs from "./pages/Techs";

function App() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Me />} />
          <Route path="/experiences" element={<Experiences />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/tech" element={<Techs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
