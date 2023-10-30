
import { Card, Row, Col, Progress, Button } from 'antd';
import './index.css'; // Buat file CSS terpisah

const Achivement = () => {
  const data = [
    {
      title: 'Achivement Reading',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-6684.jpg?w=1380&t=st=1697942406~exp=1697943006~hmac=8caba5c7a483f76e6c04ea0b0e93fb0fee05674481a4cac929cf758ae08dc455',
    },
    {
      title: 'Achivement Reading',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-6684.jpg?w=1380&t=st=1697942406~exp=1697943006~hmac=8caba5c7a483f76e6c04ea0b0e93fb0fee05674481a4cac929cf758ae08dc455',
    },
    {
      title: 'Achivement Reading',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-6684.jpg?w=1380&t=st=1697942406~exp=1697943006~hmac=8caba5c7a483f76e6c04ea0b0e93fb0fee05674481a4cac929cf758ae08dc455',
    },
    {
      title: 'Achivement Reading',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-6684.jpg?w=1380&t=st=1697942406~exp=1697943006~hmac=8caba5c7a483f76e6c04ea0b0e93fb0fee05674481a4cac929cf758ae08dc455',
    },
    {
      title: 'Achivement Reading',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-6684.jpg?w=1380&t=st=1697942406~exp=1697943006~hmac=8caba5c7a483f76e6c04ea0b0e93fb0fee05674481a4cac929cf758ae08dc455',
    },
   
  ];

  return (
    <div>
      <div style={{textAlign: 'center', color: "#19AFE9", marginTop:"25px"}}>
        <h1>Pencapaian</h1>
      </div>
      <Row gutter={16}>
        {data.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index} style={{paddingBottom:8}}>
            <Card hoverable className="custom-card" bordered={true} style={{borderWidth: 2}}>
              <div className="card-image">
                <img alt={item.title} src={item.image} />
              </div>
              <Progress percent={40} />
              <Card.Meta title={item.title} description={item.description} />
              <div className="center-button">
                <Button type="primary">Claim</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Achivement;
