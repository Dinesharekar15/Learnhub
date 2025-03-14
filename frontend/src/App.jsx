import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import SignupCard from './Pages/SignupCard'
import SigninCard from './Pages/SigninCard';
import Dashboard from './Pages/Dashboard';
import {PublicRoute} from './AuthRoutes/isLogin'
// import {Protected} from './AuthRoutes/Protected'
import Home from "./Pages/Home";
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Courses" element={<Dashboard />} />
      <Route path="/signup" element={<PublicRoute><SignupCard /></PublicRoute>} />
      <Route path="/signin" element={<PublicRoute><SigninCard></SigninCard></PublicRoute>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
