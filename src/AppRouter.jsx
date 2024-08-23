import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NoMatch } from "./pages/NoMatch";
import { Dashboard } from "./pages/Dashboard";
import { DashboardLayout } from "./layout/Layout";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
