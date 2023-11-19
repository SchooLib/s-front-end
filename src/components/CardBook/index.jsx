import {useState} from 'react';
import { Card, Modal, Button, Input, Col } from 'antd';
const { Meta } = Card;

const CardBook = (props) =>{
    const {index, cover, name, desc} = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReview, setIsReview] = useState(false)
    const ModalHandler =()=>{
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsReview(false)
    };
    const handleReview = () =>{
        setIsModalOpen(true);
        setIsReview(true)
    }
    return(
        <>
        <Col span={12}>
            <Card
                hoverable
                style={{
                width: 240,
                height: 370,
                marginBottom:'20px'
                }}
                cover={<img style={{height:300}} alt="example" src={cover} 
                // onClick={ModalHandler}
                />}
            >
                <Meta style={{textAlign:'center'}} title={name} />
            </Card> 
        </Col>
            
        {/* <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
        footer={[
            <Button key="back" onClick={handleCancel}>
              Batal
            </Button>,
            <Button key="submit" type="primary" onClick={handleReview}>
              {isReview ? 'Save' :'Edit'}
            </Button>,
          ]}
        >
            <div style={{display:'flex', gap:'10px'}}>
                <img style={{height:300}} alt="example" src={cover}/>
                <div>
                    <h2>
                    {name}
                    </h2>
                    {
                        isReview ? <Input placeholder={`Tulis ulasan untuk ${name}`}/> : <p>
                        {desc}
                        </p>
                    }
                    
                </div>
            </div>
        </Modal>  */}
            
        </>
    )
}
// import { Card } from "antd";
// import { useNavigate } from "react-router-dom";
// const { Meta } = Card;

// const CardBook = () => {
//   const navigate = useNavigate();

//   return (
//     <Card
//       hoverable
//       style={{
//         width: 240,
//         height: 400,
//       }}
//       onClick={() => {
//         navigate("/listbook/detail/123212312") //use booId from actual api res
//       }}
//       cover={
//         <img
//           style={{ height: 300 }}
//           alt="example"
//           src="https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg"
//         />
//       }
//     >
//       <Meta
//         title="Educated (Terdidik): Sebuah Memoar"
//         description="TARA WESTOVER"
//       />
//     </Card>
//   );
// };

export default CardBook;
