import { createSlice } from "@reduxjs/toolkit"

const showAcheivement={
    addAcheivement:false,
    deleteAcheivement:false,
    editAcheivement:false
}


const ShowHide=createSlice({
    name:'cake',
    initialState:showAcheivement,
    reducers:{
        addAcheivementShows:(state)=>{
            return{
                ...state,
                addAcheivement:true
            }
        },
        addAcheivementHide:(state)=>{
            return{
                ...state,
                addAcheivement:false
            }
        },
        editAcheivementShow:(state)=>{
            return{
                ...state,
                editAcheivement:true
            }
        },
        editAcheivementHide:(state)=>{
            return{
                ...state,
                editAcheivement:false
            }
        },
        deleteAcheivementShow:(state)=>{
            return{
                ...state,
                deleteAcheivement:true
            }
        },
        deleteAcheivementHide:(state)=>{
            return{
                ...state,
                deleteAcheivement:false
            }
        }
    }
})

export default ShowHide.reducer
export const {addAcheivementShows,addAcheivementHide,deleteAcheivementHide,deleteAcheivementShow,editAcheivementHide,editAcheivementShow}=ShowHide.actions
