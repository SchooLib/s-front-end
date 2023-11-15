import { useState } from "react"
import { createContext } from "react"
import {Button,Modal} from 'antd'
import { useContext } from "react"

export const AppContextUser=createContext({empty:true,sip:"cuk"})

export function UseAppContexUser(){
    return useContext(AppContextUser)
}

export function AppProviderUserAdmin({children}){
    const [show,setShow]=useState(false)
    const [showAdd,setShowAdd]=useState(false)
    const Shows=()=>{
        setShow(true)
    }
    const Hide=()=>{
        setShow(false)
    }

    const ShowsAdd=()=>{
        setShowAdd(true)
    }
    const HideAdd=()=>{
        setShowAdd(false)
    }
    const data={
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
                                Shows()
                                deleteData(record)
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
    const AppContextValueUser={
        jangan:"sip"
    }
    const deleteData=(record)=>{
        return(
            Modal.confirm(
                {
                    open:{show},
                    title:"Are you sure to delete this Items?",
                    okType:'danger',
                    okCancel:{Hide},
                    onOk:Hide
                }
            )
        )
    }
    return(
        <AppContextUser.Provider value={AppContextValueUser}>
            {console.log(UseAppContexUser(),AppContextValueUser)}
            {children}
        </AppContextUser.Provider>
    )
}