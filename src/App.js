import { Route, Routes } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import Login from "./page/login/Login";
import Signup from "./page/sigin/Signup";
import CreatePageMain from "./page/createProject";
import OnboardPage from "./page/onboardingPage";
import ProfileDashPage from "./page/userProfile";
import ProjectMain from "./page/projectpage/ProjectMain";
import ProjectSide from "./page/projectpage/ProjectSide";
import ProfilePage from "./page/profilePage";
import EditProjectPage from "./page/editProject";
import ForgetPassword from "./page/forgetPassword/ForgetPassword";
import RestPassword from "./page/resetPassword/ResetPassword";
import VerificationCode from "./page/verificationCode/VerificationCode";
import CreateVacancyMain from "./page/createVacancy";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="onboard" element={<OnboardPage />} />
        <Route path="create-project" element={<CreatePageMain />} />
        <Route path="proDashboard" element={<ProfileDashPage />} />
        <Route path="projects" element={<ProjectSide />}>
          <Route index element={<ProjectMain />} />
        </Route>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="edit-project" element={<EditProjectPage />} />
        <Route path="forgotPassword" element={<ForgetPassword />} />
        <Route path="resetPassword" element={<RestPassword/>} />
        <Route path="verification" element={<VerificationCode />} />
        <Route path="createVacancy" element={<CreateVacancyMain />} />
      </Routes>
    </div>
  );
}

export default App;
