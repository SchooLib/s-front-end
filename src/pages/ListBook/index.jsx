import { CardBook } from "../../components"
const ListBook = () =>{
    const datas = 
    [
        {
            cover : 'https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg',
            name : 'Book 1',
            desc : 'Book 1 is Lorem Ipsum'
        },
        {
            cover : 'https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg',
            name : 'Book 2',
            desc : 'Book 2 is Lorem Ipsum'
        },
    ]
    return(
        <>
            <div style={{ background: '#B9F0FC', padding: '50px', height:'100vh', display:'flex', gap:'20px'}}>
                
                {datas.map((data, index)=>{
                    return(
                        <CardBook index={index} cover={data.cover} name={data.name} desc={data.desc}/>
                    )
                })}
            </div>
        </>
    )
}

export default ListBook