import { Card } from 'antd';
const { Meta } = Card;

const CardBook = () =>{
    return(
    <Card
        hoverable
        style={{
          width: 240,
          height: 400
        }}
        cover={<img style={{height:300}} alt="example" src="https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg" />}
    >
        <Meta title="Educated (Terdidik): Sebuah Memoar" description="TARA WESTOVER" />
    </Card> 
    )
}

export default CardBook