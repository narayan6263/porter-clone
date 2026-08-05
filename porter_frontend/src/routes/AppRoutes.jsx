import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Splash from "../pages/splash/Splash";

import UserDashboard from "../pages/user/Dashboard";
import DriverDashboard from "../pages/driver/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />

      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/driver/dashboard" element={<DriverDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}