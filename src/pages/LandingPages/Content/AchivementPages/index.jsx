import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Card, Row, Col, Progress, Button } from "antd";
import "./index.css"; // Buat file CSS terpisah
import { useDispatch, useSelector } from "react-redux";
import { getAchievements, claimAchievement } from "../../../../redux/slices/achievementSlice";
import { getUserById } from "../../../../redux/slices/userSlice";

const Achivement = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
     dispatch(getAchievements());
     
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserById(userId))
  }, [dispatch, userId]);

  const achievements = useSelector((state) => state.achievements.achievements);
  const user = useSelector((state) => state.user.user);

  const datas = achievements.contents;

  const matchGenre = (genre) => {
    const keys = user?.stat ? Object.keys(user.stat) : [];
    const result = keys.find((key) => user.stat[key] === genre);
    return result;
  };


  const handleClaimAchivement = (achievementsId) => {
    dispatch(claimAchievement({data: {achievementsId: achievementsId}}))
    toast.success("Berhasil Claim Achivement");
  };

  return (
    <div>
      <div style={{ textAlign: "center", color: "#19AFE9", marginTop: "25px" }}>
        <h1>Pencapaian</h1>
      </div>
      <Row gutter={16}>
        {datas ? (
          datas.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index} style={{paddingBottom:8}}>
            <Card hoverable className="custom-card" bordered={true} style={{borderWidth: 2}}>
              <div className="card-image">
                <img alt={item.title} src={item.image} />
              </div>
              <Progress percent={( matchGenre(item.readGenre) / item.maxRead ) * 100} />
              <Card.Meta title={item.title} description={item.description} />
              <div className="center-button">
                {
                  matchGenre(item.readGenre) === item.maxRead ? (
                    <Button type="primary" onClick={handleClaimAchivement(item.id)}>Claim</Button>
                  ) : (
                    <Button type="primary" disabled>Claim</Button>
                    )
                }
              </div>
            </Card>
          </Col>
        ))
      ):(
        <p>Loading...</p>
      )}
      </Row>
    </div>
  );
};

export default Achivement;
