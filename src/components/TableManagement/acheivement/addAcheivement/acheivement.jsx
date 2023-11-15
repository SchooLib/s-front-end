import {Modal,Input,Button,InputNumber} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addUserHide } from '../../../../redux/slices/UserAdmin'
import { addAcheivementHide } from '../../../../redux/slices/AcheivementAdmin'

const {TextArea}=Input
export function AddAcheivement(){
    const addAcheivementStatus=useSelector((state)=>state.acheivementAdmin.addAcheivement)
    const dispatch=useDispatch()
    return(
        <div>
            <Modal
            onCancel={()=>dispatch(addAcheivementHide())}
            width="60vw"
            open={addAcheivementStatus}
            footer={[]}
            >
            <div style={{
                display:'flex',
                gap:"20px"
            }}>
                <div 
                style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <img width="350px" src="https://png.pngtree.com/png-clipart/20220124/original/pngtree-transparent-glass-texture-game-badge-png-image_7184013.png" alt="" />
                </div>
                <div>
                    <div>
                        <p>Name</p>
                        <Input width="100%"></Input>
                    </div>
                    <div style={{
                        display:"flex",
                        gap:"10px"
                    }}>
                        <div>
                            <p>Name</p>
                            <Input width="100%"></Input>
                        </div>
                        <div>
                            <p>Name</p>
                            <Input width="100%"></Input>
                        </div>
                    </div>
                    <div style={{
                        display:"flex",
                        gap:"10px"
                    }}>
                        <div>
                            <p>Name</p>
                            <Input width="100%"></Input>
                        </div>
                        <div>
                            <p>Name</p>
                            <Input width="100%"></Input>
                        </div>
                    </div>
                    <div>
                        <p>Description</p>
                        <TextArea rows={4}/>
                    </div>
                    <Button
                    type='primary'
                    style={{
                        marginTop:"20px",
                        width:"100%"
                    }}>Create Acheivement</Button>
                </div>
            </div>
            </Modal>
        </div>
    )
}