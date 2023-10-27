/* eslint-disable react/prop-types */
import { Table } from 'antd';


const TableDesign = ({data}) => {
    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
        }
    ];

    
  return <Table columns={columns} dataSource={data} />;
}

export default TableDesign