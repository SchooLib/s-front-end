import { createSlice } from "@reduxjs/toolkit"

const showBook={
    addBook:false,
    deleteBook:false,
    editBook:false
}


const ShowHide=createSlice({
    name:'cake',
    initialState:showBook,
    reducers:{
        addBookShows:(state)=>{
            return{
                ...state,
                addBook:true
            }
        },
        addBookHide:(state)=>{
            return{
                ...state,
                addBook:false
            }
        },
        editBookShow:(state)=>{
            return{
                ...state,
                editBook:true
            }
        },
        editBookHide:(state)=>{
            return{
                ...state,
                editBook:false
            }
        },
        deleteBookShow:(state)=>{
            return{
                ...state,
                deleteBook:true
            }
        },
        deleteBookHide:(state)=>{
            return{
                ...state,
                deleteBook:false
            }
        }
    }
})

export default ShowHide.reducer
export const {addBookShows,addBookHide,deleteBookHide,deleteBookShow,editBookHide,editBookShow}=ShowHide.actions
