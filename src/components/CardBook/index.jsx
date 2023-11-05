import {useState} from 'react';
import { Card, Modal, Button, Input } from 'antd';
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
        
        <Card
            hoverable
            style={{
              width: 240,
              height: 370
            }}
            cover={<img style={{height:300}} alt="example" src={cover} 
            // onClick={ModalHandler}
            />}
        >
            <Meta style={{textAlign:'center'}} title={name} />
        </Card> 
            
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

export default CardBook