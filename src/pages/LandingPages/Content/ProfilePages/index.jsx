import { Row, Col } from "antd";
import "./index.css"
import { useSelector } from "react-redux";

const Profile = () => {

  const user = useSelector((state) => state.auth.user);
 
  return (
    <div className="content-profile">
      <Row className="profile-elemen">
        <Col span={12} className="images-profile-content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }}
          >
            <div>
            <img src="https://picsum.photos/id/1/200/300" alt="profile" className="image-profile"/>
            <form style={{display:"flex", flexFlow: "column"}}>
              <input type="text" value={user.fullName} className="input-profile" style={{padding: '10px', marginTop: '10px', marginBottom: '10px'}} disabled/>
              <input type="text" value={user.id} className="input-profile" style={{padding: '10px', marginTop: '10px', marginBottom: '10px'}} disabled/>
            </form>
            </div>
            
          </div>
        </Col>
        <Col span={12} className="statistik-profile-content">
          
          <div className="parent-grid">
            <div className="grid-1">
              <h1>Poin</h1>
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
