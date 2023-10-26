import { CardBook, LayoutHeader } from "../../components"
const ListBook = () =>{
    return(
        <>
            <LayoutHeader/>
            <div style={{ background: '#B9F0FC', padding: ' 120px 50px', height:'100vh', display:'flex', gap:'20px'}}>
                <CardBook/>
                <CardBook/>
            </div>
        </>
    )
}

export default ListBook