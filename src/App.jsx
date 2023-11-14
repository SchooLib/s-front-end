import { useState } from "react";
import { SSOLogin, Landing, ListBook, DetailBook } from "./pages"
import Achivement from "./pages/LandingPages/Content/AchivementPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/LandingPages/Content/ProfilePages";
import Leaderboard from "./pages/LandingPages/Content/LeaderboardPages";
import DashboardLayout from "./pages/DashboardPages";
import StatistikDashboard from "./pages/DashboardPages/Content/Statistik";
import LayoutLandingPages from "./pages/LandingPages";
// import DetailBook from "./pages/DetailBook"

function App() {
  const [isLogin,setIsLogin] = useState(false)
  const loginHandle =(e)=>{
    setIsLogin(e)
  }
  console.log(isLogin)
  return (
    <>
      <Router>
        <Routes>
          {/* Route for Login and Register */}
          <Route path="/login" element={<SSOLogin login={loginHandle}/>} />
          <Route path="/register" element={<h1>Register</h1>} />

          {/* Route for Landing Page */}
          <Route path="/" element={<LayoutLandingPages />}>
            <Route index element={<Landing />} />
            <Route path="/listbook" element={<ListBook />} />
            <Route path="/listbook/detail/:bookId" element={<DetailBook />} />
            <Route path="/achivement" element={<Achivement />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            {/* <Route path="/detail-book/:id" element={<DetailBook />} /> */}
          </Route>

          {/* Route for Dashboard Page */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<StatistikDashboard />} />
            <Route path="book" element={<h1>Book</h1>} />
            <Route path="user" element={<h1>User</h1>} />
            <Route path="achievement" element={<h1>Achievement</h1>} />
            <Route path="profile" element={<h1>Profile</h1>} />
            <Route path="sekolah" element={<h1>Sekolah</h1>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
