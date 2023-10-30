import { CardBook } from "../../components"
const ListBook = () =>{
    return(
        <>
            <div style={{ background: '#B9F0FC', padding: '50px', height:'100vh', display:'flex', gap:'20px'}}>
                <CardBook/>
                <CardBook/>
            </div>
        </>
    )
}

export default ListBook