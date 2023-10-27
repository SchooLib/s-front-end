import { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import './index.css'

const { Header } = Layout

const LayoutHeader = () =>{
    const items = [
        {
          label: 'List Buku',
        //   key: 'mail',
        //   icon: <MailOutlined />,
        },
        {
            label: 'Pencapaian',
          //   key: 'mail',
          //   icon: <MailOutlined />,
        },
        {
            label: 'Peringkat',
          //   key: 'mail',
          //   icon: <MailOutlined />,
        },
        
      ];
    const [isLogin, setIsLogin] = useState(false)
    return(
        <Header
          style={{
            alignItems: 'center',
            background:'white',
            // borderBottom: '1px solid #d3d3d3',
          }}
          className='header'
        >
          <Menu
            // theme="light"
            mode="horizontal"
            // defaultSelectedKeys={['2']}
            items={items}
            className='menu-header'
          />
          {isLogin ? 
            <>
            </> :
            <Button>Login</Button>
          }
        </Header>
    )
}

export default LayoutHeader