import { SSOLogin, Landing, ListBook } from "./pages"
import Achivement from "./pages/LandingPages/Content/AchivementPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/LandingPages/Content/ProfilePages";
import Leaderboard from "./pages/LandingPages/Content/LeaderboardPages";
import DashboardLayout from "./pages/DashboardPages";
import StatistikDashboard from "./pages/DashboardPages/Content/Statistik";
import LayoutLandingPages from "./pages/LandingPages";
import { Book } from "./pages/BookAdmin";
import { UserAdmin } from "./pages/usersAdmin";
import { AcheivementAdmin } from "./pages/acheivement";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route for Login and Register */}
          <Route path="/login" element={<SSOLogin/>} />
          <Route path="/register" element={<h1>Register</h1>} />

          {/* Route for Landing Page */}
          <Route path="/" element={<LayoutLandingPages />}>
            <Route index element={<Landing/>} />
            <Route path="/listbook" element={<ListBook/>} />
            <Route path="/achivement" element={<Achivement />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>

          {/* Route for Dashboard Page */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<StatistikDashboard />} />
            <Route path="book" element={<Book/>} />
            <Route path="user" element={<UserAdmin/>} />
            <Route path="achievement" element={<AcheivementAdmin/>} />
            <Route path="profile" element={<h1>Profile</h1>} />
            <Route path="sekolah" element={<h1>Sekolah</h1>} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
