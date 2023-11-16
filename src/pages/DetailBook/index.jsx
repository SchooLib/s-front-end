// import { useParams, Link } from 'react-router-dom';

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
// }

// export default DetailBook
import React, { useState, useEffect } from "react";
import { fetchBook } from "../../redux/slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Input, Button } from "antd";
const { TextArea } = Input;

const DetailBook = () => {
  // const { datas } = props;
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data, loading, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  const findBookHandle = (e) => {
    for (let a = 0; a < data.length; a++) {
      if (data[a].id === e) {
        return data[a];
      }
    }
    return null;
  };
  const bookInfo = findBookHandle(id);
  // console.log(bookInfo.title);
  const [isType, setIsType] = useState("");
  const handleReview = (e) => {
    setIsType(e.target.value);
  };
  // fetch book detail using this bookId
  // const publisher = ''
  // bookInfo.map((index,a)=>{
  //   publisher = a.name
  // })
  return (
    <>
    {bookInfo?
    <>
      <Link
        to="/listbook"
        style={{ margin: "40px", display: "block", width: "fit-content" }}
      >
        Kembali ke Daftar Buku
      </Link>
      <div style={{ display: "flex", gap: "30px", margin: "40px" }}>
        <img
          style={{ height: 400, width: 300 }}
          alt="example"
          src={bookInfo.image}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width:'100%' }}>
          <h2>{bookInfo.title}</h2>
          <p>Penerbit : {bookInfo.publisher}</p>
          <p>Kategori :
             {bookInfo.classifications.map((p)=>{
              return(
                 p.name
              )
            })}
          </p>
          <p>{bookInfo.desc}</p>
          <TextArea
            placeholder={`Tulis ulasan untuk ${bookInfo.title}`}
            style={{ height: "250px", width: "100%" }}
            onChange={handleReview}
          />
          <Button
            style={{ background: "#012b68", color: "white" }}
            onClick={() =>
              isType ? console.log("ada") : console.log("kosong")
            }
          >
            Kirim
          </Button>
        </div>
      </div>
      </>
      :null}
    </>
  );
};

export default DetailBook;
