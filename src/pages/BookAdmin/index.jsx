import { TableManagement } from '../../components/TableManagement/TableManagement'
import { AppProviderBooksAdmin} from '../../context/booksAdmin/context'
import { Button,Modal } from 'antd'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBookHide, deleteBookShow } from '../../redux/slices/BooksAdmin'


export function Book(){
    const categories="Book"
    const dispatch=useDispatch()
    const deleteBooks=useSelector((state)=>state.bookAdmin.deleteBook)
    const Hide=()=>{
        console.log(deleteBooks)
        return dispatch(deleteBookHide())
    }
    const deleteConfirm=(record)=>{
        console.log(deleteBooks)
        return(
            Modal.confirm(
                {
                    title:"Are you sure to delete this Items?",
                    okType:'danger',
                }
            )
        )
    }
    const data={
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
                                deleteConfirm()
                            }
                                }>
                                    
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

    return(
        <div className="book">
            <h1>Books</h1>
            
            
            <TableManagement {...data}/>
        </div>
    )
}