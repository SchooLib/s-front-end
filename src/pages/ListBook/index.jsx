import React, { useState, useEffect } from "react";
import { fetchBook } from "../../redux/slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { CardBook } from "../../components"
import { Link } from 'react-router-dom';
import {Row} from "antd"

const ListBook = (props) =>{
    const {datas} = props
    const dispatch = useDispatch();
//   const redirect = useNavigate()
  const {data, loading, error} = useSelector((state)=> state.books)
  console.log(data)
  useEffect(()=>{
    dispatch(fetchBook())
  }, [dispatch])
  datas(data)
//   console.log(data)
    // const datas = 
    // [
    //     {
    //         id: 1,
    //         cover : 'https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg',
    //         name : 'Book 1',
    //         desc : 'Book 1 is Lorem Ipsum'
    //     },
    //     {
    //         id:2,
    //         cover : 'https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg',
    //         name : 'Book 2',
    //         desc : 'Book 2 is Lorem Ipsum'
    //     },
    // ]
    return(
        <>
            <div style={{ background: '#B9F0FC', padding: '50px',  display:'flex', gap:'20px'}}>
                <Row gutter={44}>
                {data.map((i, index)=>{
                    return(
                        <Link key={i.id} to={`/detail-book/${i.id}`}>
                            <CardBook index={index} cover={i.image} name={i.title} desc={data.desc}/>
                        </Link>
                    )
                })}
                </Row>
            </div>
        </>
    )
}

export default ListBook