import { useEffect } from "react";
import { Row, Col, Button } from "antd";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../../../redux/slices/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("persist:user");
    navigate("/login");
  };

  return (
    <div className="content-profile">
      <Row className="profile-elemen">
        <Col span={12} className="images-profile-content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div>
              <img src={user.img} alt="profile" className="image-profile" />
              <form style={{ display: "flex", flexFlow: "column" }}>
                <input
                  type="text"
                  value={user.nisn || user.username}
                  className="input-profile"
                  style={{
                    padding: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  disabled
                />
                <input
                  type="text"
                  value={user.fullName}
                  className="input-profile"
                  style={{
                    padding: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  disabled
                />
              </form>
              <Button type="primary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </Col>
        <Col span={12} className="statistik-profile-content">
          <div className="parent-grid">
            <div className="grid-1" style={{ padding: "1rem" }}>
              <h1>Poin</h1>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p>tes</p>
              </div>
            </div>
            <div className="grid-2">
              <h1>Rank</h1>
            </div>
            <div className="grid-3">
              <h1>Leaderboard</h1>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
