import { useDispatch, useSelector } from 'react-redux'
import { TableManagement } from '../../components/TableManagement/TableManagement'
import { AppProviderUserAdmin, UseAppContexUser } from '../../context/userAdmin/context'
import { Button,Modal } from 'antd'
import './index.css'
import { useEffect } from 'react'
import { getAllUser } from '../../redux/slices/userAPIAdmin'

export function UserAdmin(){
    const categories="User"
    const dispatch=useDispatch()
    const dataUser=useSelector((state)=>state.userAdminAPI.data)
    //const deleteUser=useSelector((state)=>state.userAdmin.deleteUser)
    useEffect(()=>{
        dispatch(getAllUser)
    },[dispatch])
    console.log(dataUser,"kk")
    const deleteConfirm=(record)=>{
        //console.log(deleteBooks)
        return(
            Modal.confirm(
                {
                    title:"Are you sure to delete this Items?",
                    okType:'danger',
                }
            )
        )
    }
    const user={
        categories,
        columns:[
            {
                key:'1',
                title:'ID',
                dataIndex:'id',
                width:'10%',
                align:'center'
            },
            {
                key:'2',
                title:'Full Name',
                dataIndex:'fullName',
                width:'30%',
                align:'center'
            },
            {
                key:'3',
                title:'NISN',
                dataIndex:'nisn',
                width:'30%',
                align:'center'
            },
            {
                key:'4',
                title:'Point',
                dataIndex:'point',
                width:'10%',
                align:'center'
            },
            {
                key:'5',
                title:'Action',
                width:'20%',
                align:'center',
                render:(record)=>{
                    return(
                        <div
                        style={{
                            display:"flex"
                        }}>
                            <Button
                            style={{
                                marginRight:'10px'
                            }}>Preview</Button>
                            <Button
                            danger
                            onClick={()=>{
                                deleteConfirm()
                            }}
                            >DELETE</Button>
                        </div>
                    )
                }
            }
        ],
        datas:[
            {
                id:1,
                fullName:"FAIQ",
                nisn:"Myth",
                point:20,
                acheivement:["saya","Guru"],
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
                
            },
            {
                id:2,
                fullName:"FAIQ",
                nisn:"Myth",
                point:20,
                acheivement:["saya","Guru"],
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:3,
                fullName:"FAIQ",
                nisn:"Myth",
                point:20,
                acheivement:["saya","Guru"],
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:4,
                fullName:"FAIQ",
                nisn:"Myth",
                point:20,
                acheivement:["saya","Guru"],
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:5,
                fullName:"FAIQ",
                nisn:"Myth",
                point:20,
                acheivement:["saya","Guru"],
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            }
        ]
    }
    return(
        <div className="book">
            <h1>Users</h1>
                <TableManagement {...user}/>
            
        </div>
    )
}