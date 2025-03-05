import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import SignupCard from './Pages/SignupCard'
import SigninCard from './Pages/SigninCard';
import Home from './Pages/Home';
// import {PublicRoute} from './AuthRoutes/isLogin'
// import {Protected} from './AuthRoutes/Protected'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<SignupCard />} />
      <Route path="/signin" element={<SigninCard />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
