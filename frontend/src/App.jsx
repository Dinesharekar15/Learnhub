import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import SignupCard from './Pages/SignupCard'
import SigninCard from './Pages/SigninCard';
// import Dashboard from './Pages/Dashboard';
import Courses from "./App/Courses";
import {PublicRoute} from './AuthRoutes/isLogin'
import Purchases from "./Pages/Purchases";
import Settings from "./Pages/Settings";
import Layout from "./Pages/Layout";
// import {Protected} from './AuthRoutes/Protected'
import Home from "./Pages/Home";
import MyZone from "./Pages/MyZone";
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/signup" element={<PublicRoute><SignupCard /></PublicRoute>} />
      <Route path="/signin" element={<PublicRoute><SigninCard></SigninCard></PublicRoute>} />

      <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="/my-zone" element={<MyZone/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
