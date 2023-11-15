import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { deleteBookHide } from "../../../../redux/slices/BooksAdmin"
export const DeleteBook=(record)=>{
    const deleteBooks=useSelector((state)=>state.bookAdmin.deleteBook)
    const dispatch=useDispatch()
    console.log(deleteBooks)
    const Hide=()=>{
        return dispatch(deleteBookHide)
    }
    return(
        Modal.confirm(
            {
                open:{deleteBooks},
                title:"Are you sure to delete this Items?",
                okType:'danger',
                okCancel:{Hide},
                onOk:Hide
            }
        )
    )
}