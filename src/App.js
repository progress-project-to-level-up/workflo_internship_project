// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './component/navbar/Navbar';
import HomePage from './page/homepage/HomePage';
import Login from './page/login/Login';
import Signup from './page/sigin/Signup';

function App() {
  return (
     
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<Login/>} />
        <Route path='sign' element={ <Signup />} />


        </Routes>
        

    
    </div>
  );
}

export default App;
