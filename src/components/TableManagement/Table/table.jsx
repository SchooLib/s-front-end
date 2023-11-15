import {Table} from 'antd'

export function Tables({columns,datas}){
    return(
        <Table
            columns={columns}
            pagination={{
                position: ['none', 'bottomCenter'],
                pageSize:4
              }}
              dataSource={datas}
        >

        </Table>
    )
}