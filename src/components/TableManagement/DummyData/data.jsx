import {Button} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBookShow } from '../../../redux/slices/BooksAdmin'
import { DeleteBook } from '../books/deleteBooks.js/delete'




export const BookDummy=()=>{
    const dispatch=useDispatch()
    const deleteBook=useSelector((state)=>state.bookAdmin.deleteBook)
    return{
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
                            onClick={
                                ()=>{
                                dispatch(deleteBookShow())
                                DeleteBook()
                            }
                                }>
                                    {console.log(deleteBook)}
                                DELETE</Button>
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
}

export const user={
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
                        // onClick={()=>{
                        //     showModal()
                        //     deleteData(record)
                        // }}
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

export const acheivement={
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
                        // onClick={()=>{
                        //     showModal()
                        //     deleteData(record)
                        // }}
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