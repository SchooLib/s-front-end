import {Button} from 'antd'
import './index.css'
import { HeaderTableAdmin } from './header/header'
import { Tables } from './Table/table'
import { BookDummy, acheivement, user } from './DummyData/data'
import { useState } from 'react'
import { UseAppConteBooks } from '../../context/booksAdmin/context'
import { AddBooks } from './books/addBooks/books'
import { UseAppContexUser } from '../../context/userAdmin/context'
import useSelection from 'antd/es/table/hooks/useSelection'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteBook } from './books/deleteBooks.js/delete'
import { addBookHide, addBookShows, deleteBookHide, deleteBookShow, editBookShow} from '../../redux/slices/BooksAdmin'
import { AddUser } from './user/addUser/user'
import { addUserShows } from '../../redux/slices/UserAdmin'
import { AddAcheivement } from './acheivement/addAcheivement/acheivement'
import { addAcheivementShows } from '../../redux/slices/AcheivementAdmin'

// const searcs=""

export function TableManagement({columns,datas,categories}){
   
    const deleteBook=useSelector((state)=>state.bookAdmin.deleteBook)
    const dispatch=useDispatch()

    const curentData={columns,datas}
    const [search,setSearch]=useState('')
    const handleSearch=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    const newData=search==''?curentData:{...curentData,datas:curentData.datas.filter((items)=>{
        //console.log(items.title.toLowerCase().includes(search),"ahaha".includes("ah"))
        return categories==="Book"?items.title.toLowerCase().includes(search):
        categories==="User" ? items.fullName.toLowerCase().includes(search):
        items.name.toLowerCase().includes(search)
    })}
    


    //const addBooksStatus=useSelector((state)=>state.bookAdmin.addBook)
    //const editBooksStatus=useSelector((state)=>state.bookAdmin.editBook)
    return(
        <div className='table-management'>
        <Button
        type='primary'
        className='addData'
        onClick={()=>{
            categories==="Book"?
            dispatch(addBookShows()):
            categories==="User"?
            dispatch(addUserShows()):
            dispatch(addAcheivementShows())
        }}
        >Adds {categories}</Button>
        {categories==="Book"?<AddBooks/>:categories==="User"?
        <AddUser/>:<AddAcheivement/>}
        <hr/>
        {<HeaderTableAdmin {...{search,handleSearch}}/>}
        <hr/>
        {<Tables {...newData}/>}
        </div>
    )
}

