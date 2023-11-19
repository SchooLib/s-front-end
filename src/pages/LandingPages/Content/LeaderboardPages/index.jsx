import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllUsers } from '../../../../redux/slices/userSlice';

const Leaderboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    if (!users) {
      dispatch(getAllUsers());
    }
  }, [dispatch, users]);

  if (!users || !users.contents) {
    // Handle loading state, e.g., show a loading spinner
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>Login First</div>;
  }

  const sortedDataAll = [...users.contents].sort((a, b) => b.point - a.point);

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Points',
      dataIndex: 'point',
      key: 'point',
      render: (text) => (text === null ? 0 : text),
    },
  ];

  const data = sortedDataAll.map((user, index) => ({
    key: user.id,
    rank: index + 1,
    fullName: user.fullName,
    point: user.point === null ? 0 : user.point,
  }));

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '25px' }}>Papan Peringkat</h1>
      <div style={{padding: '10px', marginTop: '10px'}}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Leaderboard;
