import { CardBook } from "../../components"
import { Link } from 'react-router-dom';

const ListBook = () =>{
    const datas = 
    [
        {
            id: 1,
            cover : 'https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg',
            name : 'Book 1',
            desc : 'Book 1 is Lorem Ipsum'
        },
        {
            id:2,
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
                        <Link key={data.id} to={`/detail-book/${data.id}`}>
                            <CardBook index={index} cover={data.cover} name={data.name} desc={data.desc}/>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default ListBook