// import { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Input, Button } from 'antd';

// const { TextArea } = Input
// const DetailBook = () =>{
//     const {bookId} = useParams()
//     const datas = 
//     [
//         {
//             id: 1,
//             cover : 'https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg',
//             name : 'Book 1',
//             desc : 'Book 1 is Lorem Ipsum'
//         },
//         {
//             id:2,
//             cover : 'https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg',
//             name : 'Book 2',
//             desc : 'Book 2 is Lorem Ipsum'
//         },
//     ]
//     const data = datas.find((data) => data.id === parseInt(id));
//     const [isType, setIsType] = useState('')
//     const handleReview = (e)=>{
//         setIsType(e.target.value)
//     }
//     return(
//         <>
//         <Link to='/listbook' style={{margin:'40px', display:'block', width:'fit-content'}}>Kembali ke Daftar Buku</Link>
//         <div style={{display:'flex', gap:'30px', margin:'40px' }}>
//             <img style={{height:400}} alt="example" src={data.cover}/>
//             <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
//                 <h2>{data.name}</h2>            
//                 <p>{data.desc}</p>
//                 <TextArea placeholder={`Tulis ulasan untuk ${data.name}`} style={{height:'250px', width:'500px'}} onChange={handleReview}/>
//                 <Button style={{background:'#012b68', color:'white'}} onClick={()=>isType? console.log('ada'):console.log('kosong')}>Kirim</Button> 
//             </div>
//         </div>
//         </>
//     )
// }

// export default DetailBook
import React from "react";
import { useParams } from "react-router-dom";

const DetailBook = () => {
  const { bookId } = useParams();

  // fetch book detail using this bookId

  return <div>DetailBook {bookId}</div>;
};

export default DetailBook;
