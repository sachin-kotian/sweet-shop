import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SweetsList from "./pages/SweetsList";
import SweetDetail from "./pages/SweetDetail";
import AdminDashboard from "./pages/AdminDashboard";
import BuyPage from "./pages/BuyPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<SweetsList />} />
          <Route path="/sweet/:id" element={<SweetDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/buy/:id" element={<BuyPage />} />

        </Routes>
      </div>
    </div>
  );
}
