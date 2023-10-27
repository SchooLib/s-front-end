import {Row, Col} from 'antd'

const Profile = () => {
  return (
    <div className='content-profile'>
      <Row>
        <Col span={12}>
            <div>
                <img src='https://picsum.photos/id/1/200/300' alt='profile' />
            </div>
        </Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
};

export default Profile;
