import { createSlice } from "@reduxjs/toolkit"

const showUser={
    addUser:false,
    deleteUser:false,
    editUser:false
}


const ShowHide=createSlice({
    name:'cake',
    initialState:showUser,
    reducers:{
        addUserShows:(state)=>{
            return{
                ...state,
                addUser:true
            }
        },
        addUserHide:(state)=>{
            return{
                ...state,
                addUser:false
            }
        },
        editUserShow:(state)=>{
            return{
                ...state,
                editUser:true
            }
        },
        editUserHide:(state)=>{
            return{
                ...state,
                editUser:false
            }
        },
        deleteUserShow:(state)=>{
            return{
                ...state,
                deleteUser:true
            }
        },
        deleteUserHide:(state)=>{
            return{
                ...state,
                deleteUser:false
            }
        }
    }
})

export default ShowHide.reducer
export const {addUserShows,addUserHide,deleteUserHide,deleteUserShow,editUserHide,editUserShow}=ShowHide.actions
