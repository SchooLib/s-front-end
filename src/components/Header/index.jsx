
import { Layout, Menu } from "antd";
import { useSelector } from "react-redux";
const { Header } = Layout;
import { Link } from "react-router-dom";


const HeaderComponent = () => {

  const user = useSelector((state) => state.auth.user);

  const items = [
    {
      label: <Link to="/"></Link>,
      key: "home",
    },
    {
      label: <Link to="/listbook">Daftar Buku</Link>,
      key: "listbook",
    },
    {
      label: <Link to="/achivement">Pencapaian</Link>,
      key: "achivement",
    },
    {
      label: <Link to="/leaderboard">Papan Peringkat</Link>,
      key: "leaderboard",
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        backgroundColor: "#00B7F7",
      }}
    >
      <div className="logo">
      <Link to="/" style={{color:'white'}}>
        <h1>SchooLib</h1>
      </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
        <Menu
          style={{ backgroundColor: "#00B7F7", color: "white", width:"30vw" }}
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={items}
        />
        <div>
          {user ? (
            <div style={{display: "flex"}}>
              <p style={{marginRight: "10px"}}>120 Point</p>
              <Link to={"/profile"} style={{ color: "white", marginRight: "10px" }}>{user.username}</Link>
            </div>
            
          ) : (
            <Link
              to={"/login"}
              style={{
                marginLeft: "10px",
                border: 2,
                backgroundColor: "#012b68",
                padding: 15,
                color: "white",
                borderRadius: 10,
              }}
            >
              Masuk
            </Link>
          )}
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
