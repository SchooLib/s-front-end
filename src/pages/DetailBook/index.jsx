
import React, { useState, useEffect } from "react";
import { fetchBook, reviewBook } from "../../redux/slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Input, Button, Rate, Card } from "antd";
import {CheckCircleFilled} from "@ant-design/icons"
const { TextArea } = Input;

const DetailBook = () => {
  // const { datas } = props;
  const dispatch = useDispatch();
  const redirect = useNavigate()
  const { id } = useParams();

  const { data, loading, error, status, message } = useSelector((state) => state.books);
  const userId = useSelector((state) => state.auth.user.id);
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
  console.log(status)
  const bookInfo = findBookHandle(id);
  // console.log(bookInfo.title);
  const [isType, setIsType] = useState("");
  // fetch book detail using this bookId
  // const publisher = ''
  // bookInfo.map((index,a)=>{
  //   publisher = a.name
  // })
  const [rateValue, setRateValue] = useState(0);
  console.log(rateValue)
  const rateHandle = value =>{
    setRateValue(value)
  }
  const [formData, setFormData] = useState({
    // bookId: bookInfo.id,
    content: "",
    rating:rateValue,
    // point:bookInfo.review_point,
    // key:bookInfo.review_keys
  });
  console.log(formData)
  const handleChange = (event) => {
    const { name, value } = event.target; //event target destructuring
    setFormData((prevFormData) => {
      //set State Value
      return {
        ...prevFormData, //take prev state to new object
        [name]: value, // if type is checkbox the value will be checked (bolean value) else the value willl be value of input
      };
    });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    // if (isAdmin) {
    //   console.log(formData)
    //   dispatch(
    //     loginAdmin({ data :{username: formData.username, password: formData.password },redirect})
    //   );
    //   // redirect('/dashboard')
    //   // dispatch(setTheme("dark"))
    // } else {
    //   //dispacth loginUser
    //   console.log(formData)
    //   dispatch(
    //     loginUser({ data :{nisn: formData.nisn, password: formData.password },redirect})
    //   );

    // }
    dispatch(reviewBook({data:{bookId:bookInfo.id,content: formData.content,
    rating: rateValue,
    point:bookInfo.review_point,
    key:bookInfo.review_keys}, redirect}))
    redirect(`/detail-book/${id}`)
  };
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
          {userId?
          <>
          <Rate onChange={rateHandle}/>
          <TextArea
            name="content"
            placeholder={`Tulis ulasan untuk ${bookInfo.title}`}
            style={{ height: "250px", width: "100%" }}
            onChange={handleChange}
            />
          <Button
            style={{ background: "#012b68", color: "white" }}
            onClick={handleSubmit}
            >
            Kirim
          </Button>
          </> : 
          <Link to={'/login'}>
            <Button>Klik untuk masuk dan mengulas buku</Button>
          </Link>
        }
        </div>
      </div>
      </>
      :null}
      {status ? 
      <>
        <Card style={{margin:'20px 70px', textAlign:'center'}}>
          <CheckCircleFilled style={{fontSize:'50px', marginBottom:'20px', color:'#a0d911'}}/>
          <br/>
          {message}
        </Card>
        <Link to={'/'}>
            <Button style={{position:'relative', left:'50%', transform: 'translate(-50%,0)', backgroundColor:'#00b7f7', color:'white'}}>Kembali ke Menu Utama</Button>
          </Link>
      </>: null}
    </>
  );
};

export default DetailBook;
