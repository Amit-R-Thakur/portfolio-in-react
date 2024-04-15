import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout";
import Me from "./pages/Me";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Techs from "./pages/Techs";
import Authenticated from "./HOC/Authenticated";
const textForCapture: string = `Hey there! 👋 Explore my captured memories with just a click on the Google login button.`;
const textForJourney: string = `Hey there! 👋 Join me on my journey with just a click on the Google login button.`;
const textForTalk: string = `Hey there! 👋 Let's chat if you want to discuss something. Just click on the Google login button to join the conversation!`;

function App() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Me />} />
          <Route path="/experiences" element={<Experiences />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/tech" element={<Techs />} />

          <Route
            path="/capture"
            element={
              <Authenticated
                text={textForCapture}
                children={<h1 className="text-white">Capture</h1>}
              />
            }
          />

          <Route
            path="/talks"
            element={
              <Authenticated
                text={textForTalk}
                children={<h1 className="text-white">Talks</h1>}
              />
            }
          />
          <Route
            path="/journey"
            element={
              <Authenticated
                text={textForJourney}
                children={<h1 className="text-white">Journey</h1>}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
