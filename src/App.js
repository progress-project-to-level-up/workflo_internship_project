// import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/navbar/Navbar";
import HomePage from "./page/homepage/HomePage";
import Login from "./page/login/Login";
import Signup from "./page/sigin/Signup";
// import Onboarding from "./page/onboarding/Onboarding";
// import VisionHeroCard from "./page/homepage/visionherocard/VisionHeroCard";
import ProjectList from "./page/projectlist/ProjectList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="sign" element={<Signup />} />
        <Route path="viewAllProject" element={<ProjectList />} />
      </Routes>

      {/* <Onboarding /> */}

      {/* <VisionHeroCard /> */}
    </div>
  );
}

export default App;
