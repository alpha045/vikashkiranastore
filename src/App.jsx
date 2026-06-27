import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Features from "./components/Features";
import ProblemsSection from "./components/ProblemsSection";
import Reviews from "./components/Reviews";
import Dashboard from "./pages/Dashboard";
import Khata from "./pages/Khata";
import Suppliers from "./pages/Suppliers";
import Reports from "./pages/Reports";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Billing from "./pages/Billing";



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
      <Route path="/khata" element={<Khata />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/history" element={<History />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/billing" element={<Billing />} />
      


      
    </Routes>

    
  )
}

export default App;