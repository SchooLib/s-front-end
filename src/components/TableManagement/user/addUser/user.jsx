import {Modal,InputNumber,Input,Button} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addUserHide } from '../../../../redux/slices/UserAdmin'
export function AddUser(){
    const dispatch=useDispatch()
    const addUserStatus=useSelector((state)=>state.userAdmin.addUser)
    console.log(addUserStatus)
    return (
        <div>
            <Modal
            onCancel={()=>dispatch(addUserHide())}
            width="400px"
            open={addUserStatus}
            footer={[]}
            >
                <div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img
                    style={{
                        width:"200px",
                        height:"200px",
                        borderRadius:"50%",
                        objectFit:'cover',
                        marginTop:'-110px'
                    }}
                     src="https://d1bpj0tv6vfxyp.cloudfront.net/alasan-orang-yang-sibuk-kerja-harus-olahraga-ringan-teratur-halodoc.png" alt="" />
                </div>
                    <div>
                        <p>Name</p>
                        <Input style={{width:"100%"}}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <Input.Password placeholder="input password" style={{width:"100%"}}/>
                    </div>
                    <div style={{
                        display:'flex'
                    }}>
                        <div style={{
                            flexGrow:'1'
                        }}>
                            <p>NISN</p>
                            <Input placeholder="input password" style={{width:"200px"}}/>
                        </div>
                        <div>
                            <p>Password</p>
                            <InputNumber min={0} max={1000000} defaultValue={0}/>
                        </div>
                        
                    </div>
                    <div
                    style={{
                        paddingTop:'30px'
                    }}>
                    <Button type='primary'
                    block
                        style={{width:'100%'}}>Create</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}