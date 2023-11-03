import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const CardBook = () => {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      style={{
        width: 240,
        height: 400,
      }}
      onClick={() => {
        navigate("/listbook/detail/123212312") //use booId from actual api res
      }}
      cover={
        <img
          style={{ height: 300 }}
          alt="example"
          src="https://cdn.gramedia.com/uploads/items/9786020650357_educated_cov.jpg"
        />
      }
    >
      <Meta
        title="Educated (Terdidik): Sebuah Memoar"
        description="TARA WESTOVER"
      />
    </Card>
  );
};

export default CardBook;
