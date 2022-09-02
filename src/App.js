import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
      {/*<Navigation />*/}
      <Routes>
        <Route path='/tuitor' element={<Home />}/>
        <Route path='/tuitor/login' element={<Login />}/>
        <Route path='/tuitor/signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
