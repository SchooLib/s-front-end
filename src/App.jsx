
// import DetailBook from "./pages/DetailBook"
/* eslint-disable react/prop-types */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { SSOLogin, Landing, ListBook, DetailBook } from "./pages"
import Achivement from './pages/LandingPages/Content/AchivementPages';
import Profile from './pages/LandingPages/Content/ProfilePages';
import Leaderboard from './pages/LandingPages/Content/LeaderboardPages';
import DashboardLayout from './pages/DashboardPages';
import StatistikDashboard from './pages/DashboardPages/Content/Statistik';
import LayoutLandingPages from './pages/LandingPages';

import "./index.css"
const ProtectedRoute = ({ element, role }) => {
  const user = useSelector((state) => state.auth.user);
  const userRole = user.role; // Example user role
  
  // Check if the user has the required role
  const isAuthorized = userRole === role;
  
  return isAuthorized ? element : <Navigate to="/" replace state={{ from: window.location.pathname }} />;
};

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null)
  const selectBookHandle = (data)=>{
    setSelectedBook(data)
  }
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Router>
        <Routes>
          {/* Route for Login and Register */}
          <Route path="/login" element={<SSOLogin />} />
          <Route path="/register" element={<h1>Register</h1>} />

          {/* Route for Landing Page */}
          <Route path="/" element={<LayoutLandingPages />}>
            <Route index element={<Landing />} />
            <Route path="/listbook" element={<ListBook datas={selectBookHandle}/>} />
            {/* <Route path="/listbook/detail/:bookId" element={<DetailBook />} /> */}
            <Route path="/achivement" element={<Achivement />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/detail-book/:id" element={<DetailBook datas={selectedBook}/>} />
          </Route>

          {/* Protected Route for Dashboard Page */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                role="admin"
                element={<DashboardLayout />}
              >
                <Route index element={<StatistikDashboard />} />
                <Route path="book" element={<h1>Book</h1>} />
                <Route path="user" element={<h1>User</h1>} />
                <Route path="achievement" element={<h1>Achievement</h1>} />
                <Route path="profile" element={<h1>Profile</h1>} />
                <Route path="sekolah" element={<h1>Sekolah</h1>} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
