import { Tabs } from 'antd'
import TableDesign from './Table'

const Leaderboard = () => {
    const dataAll = [
        {
            key: '1',
            no: '1',
            name: 'John Brown',
            rank: 32,
        },
        {
            key: '2',
            no: '2',
            name: 'Jim Green',
            rank: 42,
        },
        {
            key: '3',
            no: '3',
            name: 'Joe Black',
            rank: 32,
        },
        {
            key: '4',
            no: '4',
            name: 'Jim Red',
            rank: 32,
        },
    ];

    const dataMonth = [
        {
            key: '1',
            no: '1',
            name: 'John Brown',
            rank: 31,
        },
        {
            key: '2',
            no: '2',
            name: 'Jim Green',
            rank: 32,
        },
        {
            key: '3',
            no: '3',
            name: 'Joe Black',
            rank: 42,
        },
        {
            key: '4',
            no: '4',
            name: 'Jim Red',
            rank: 43,
        },
    ];

  return (
    <div>
        <h1 style={{textAlign: 'center', marginTop:'25px'}}>Papan Peringkat</h1>
        <Tabs 
            defaultActiveKey="1"
            centered
        >
            <Tabs.TabPane tab="All" key="1">
                <TableDesign data={dataAll}/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Month" key="2">
                <TableDesign data={dataMonth} />
            </Tabs.TabPane>
        </Tabs>
    </div>
  )
}

export default Leaderboard