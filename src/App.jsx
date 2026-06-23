import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Features from "./components/Features";
import ProblemsSection from "./components/ProblemsSection";
import Reviews from "./components/Reviews";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/features" element={<Features />} />
      <Route path="/why-choose" element={<ProblemsSection />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/dashboard" element={<Dashboard />} />


    {/*testing for temp branch*/}

    </Routes>
  )
}

export default App;