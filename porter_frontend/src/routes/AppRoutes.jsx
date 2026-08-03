import { Routes, Route } from "react-router-dom";

import Splash from "../pages/splash/Splash";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import UserDashboard from "../pages/user/Dashboard";
import DriverDashboard from "../pages/driver/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/driver/dashboard" element={<DriverDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}