import { TableManagement } from '../../components/TableManagement/TableManagement'
import { Button,Modal } from 'antd'
import './index.css'

export function AcheivementAdmin(){
    const categories="Acheivement"
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
    const acheivement={
        categories,
        columns:[
            {
                key:'1',
                title:'ID',
                dataIndex:'id',
                width:'5%',
                align:'center'
                
            },
            {
                key:'2',
                title:'Name',
                dataIndex:'name',
                width:'20%',
                align:'center'
            },
            {
                key:'3',
                title:'Genre',
                dataIndex:'genre',
                width:'20%',
                align:'center'
            },
            {
                key:'4',
                title:'Amount Books',
                dataIndex:'amountBook',
                width:'10%',
                align:'center'
            },
            {
                key:'5',
                title:'Type',
                dataIndex:'type',
                width:'15%',
                align:'center'
            },
            {
                key:'6',
                title:'Poin',
                dataIndex:'poin',
                width:'10%',
                align:'center'
            },
            {
                width:'20%',
                align:'center',
                key:'7',
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
                            <Button
                            danger
                            onClick={()=>{
                                deleteConfirm(record)
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
                name:"FAIQ",
                genre:"Myth",
                amountBook:10,
                type:"sip",
                poin:20,
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
                
            },
            {
                id:2,
                name:"FAIQ",
                genre:"Myth",
                amountBook:10,
                type:"sip",
                poin:20,
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:3,
                name:"FAIQ",
                genre:"Myth",
                amountBook:10,
                type:"sip",
                poin:20,
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:4,
                name:"FAIQ",
                genre:"Myth",
                amountBook:10,
                type:"sip",
                poin:20,
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            },
            {
                id:5,
                name:"FAIQ",
                genre:"Myth",
                amountBook:10,
                type:"sip",
                poin:20,
                desc:"apa kau",
                img:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png"
            }
        ]
    }
    return(
        <div className="book">
            <h1>Acheivement</h1>
            <TableManagement {...acheivement}/>
        </div>
    )
}