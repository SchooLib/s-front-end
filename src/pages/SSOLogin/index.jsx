import React, { useState } from 'react';
import { Card, Input, Button, Typography, Switch } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import './index.css'

const { Text } = Typography;


const SSOLogin = () =>{
    const [isAdmin, setIsAdmin]=useState(false)
    const AdminHandler =(checked)=>{
        setIsAdmin(checked)
    }
    return(
        <>
        <div style={{ background: '#B9F0FC', padding: '30px', height:'100vh' }}>
            <Card bordered={false} 
            style={{ 
                width: 300, 
                position: 'relative',
                left: '50%',
                top:'50%',
                transform: 'translate(-50%,-50%)'
            }}>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
                    Masuk sebagai admin ?
                    <Switch checkedChildren='Ya' unCheckedChildren='Tidak' onChange={AdminHandler}/>
                </div>
                {isAdmin ?
                    <Input size="large" placeholder="Username" prefix={<UserOutlined style={{marginRight:'10px', color:'#cfcfcf'}}/>} style={{marginBottom: '20px'}}/>
                :
                
                    <Input size="large" placeholder="Nomor Induk Siswa" prefix={<UserOutlined style={{marginRight:'10px', color:'#cfcfcf'}}/>} style={{marginBottom: '20px'}}/>
             
                }
                <Input size="large" placeholder="Kata Sandi" prefix={<KeyOutlined style={{marginRight:'10px', color:'#cfcfcf'}}/>} style={{marginBottom: '20px'}}/>
                <Button style={{width:'100%', background:'#a0d911', color:'white'}}>Masuk</Button>
            </Card>
            {isAdmin ?
            null :
            <Text 
            style={{
                position : 'relative',
                left: '35%',
                top:'32%',
                width:'30%',
                display:'block',
                fontSize:'12px'
                // transform: 'translate(-50%,-50%)'
            }}>*Catatan: Jika belum memiliki akun, tolong hubungi administrator</Text>
            }
        </div>
        </>
    )
}

export default SSOLogin