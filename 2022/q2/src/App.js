import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import LecturerStudentDashboard from "./components/LecturerStudentDashboard";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route
          path="/dashboard/lecturer-student"
          element={<LecturerStudentDashboard />}
        />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
