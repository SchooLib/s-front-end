import { useState } from "react"
import { createContext } from "react"
import {Button,Modal} from 'antd'
import { useContext } from "react"

export const AppContext=createContext({empty:true})

export function UseAppConteBooks(){
    return useContext(AppContext)
}

export function AppProviderBooksAdmin({children}){
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
    const book={
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
                title:'Title',
                dataIndex:'title',
                width:'25%',
                align:'center'
            },
            {
                key:'3',
                title:'Genre',
                dataIndex:'genre',
                width:'25%',
                align:'center'
            },
            {
                key:'4',
                title:'Point',
                dataIndex:'point',
                width:'20%',
                align:'center'
            },
            {
                width:'20%',
                align:'center',
                key:'5',
                title:'Action',
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
                            <Button danger
                            onClick={()=>{
                                Shows()
                                deleteData()
                            }}>DELETE</Button>
                        </div>
                    )
                }
            }
        ],
        datas:[
            {
                id:1,
                title:"FAIQ",
                genre:"Myth",
                point:20,
                KeyPoints:["saya","Guru"],
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
                
            },
            {
                id:2,
                title:"FAIQ",
                genre:"Myth",
                point:20,
                KeyPoints:["saya","Guru"],
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:3,
                title:"FAIQ",
                genre:"Myth",
                point:20,
                KeyPoints:["saya","Guru"],
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:4,
                title:"FAIQ",
                genre:"Myth",
                point:20,
                KeyPoints:["saya","Guru"],
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:5,
                title:"FAIQ",
                genre:"Myth",
                point:20,
                KeyPoints:["saya","Guru"],
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:7,
                title:"FsIQ",
                genre:"Myth",
                point:20,
                KeyPoints:["saya","Guru"],
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            }
        ]
    }
    const AppContextValue={
        book,
        ShowsAdd,
        HideAdd,
        showAdd
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
        <AppContext.Provider value={AppContextValue}>
            {console.log(UseAppConteBooks())}
            {children}
        </AppContext.Provider>
    )
}