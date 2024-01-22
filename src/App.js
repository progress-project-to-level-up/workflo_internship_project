import { Route, Routes } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import Login from "./page/login/Login";
import Signup from "./page/sigin/Signup";
import ProjectList from "./page/projectlist/ProjectList";
import CreatePageMain from "./page/createProject";
import OnboardPage from "./page/onboardingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="onboard" element={<OnboardPage />} />
        <Route path="viewAllProject" element={<ProjectList />} />
        <Route path="create-project" element={<CreatePageMain />} />
      </Routes>
    </div>
  );
}

export default App;
