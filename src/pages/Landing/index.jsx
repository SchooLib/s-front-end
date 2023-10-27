import { Typography, Button } from 'antd'
import { LayoutHeader } from "../../components"

const { Title, Text } = Typography

const Landing = () =>{
    return(
        <>
        {/* <LayoutHeader/> */}
        <div style={{ background: '#B9F0FC', height:'100vh'}}>
            <div style={{position:'relative', top:'50%',left:'50%', transform: 'translate(-50%,-60%)', display:'flex',flexDirection:'column', width:'fit-content', textAlign:'center'}}>
                <Title style={{marginBottom: '10px', color:'#828181', fontSize:'60px'}}>Selamat Datang</Title>
                <Text style={{marginBottom: '20px', color:'#828181', fontSize:'20px'}}>Ayo ulas buku dan dapatkan poin!</Text>
                <Button style={{background:'#a0d911', height:'45px', width:'50%', left:'50%', transform:'translate(-50%,0)', color:'white', fontSize:'18px'}}>Mulai Ulas</Button>
            </div>
        </div>
        </>
    )
}

export default Landing