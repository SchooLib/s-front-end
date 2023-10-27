import { Layout, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
import "./index.css"

const LayoutLandingPages = () => {
    const items = [
        {
            label: <Link to="/"></Link>,
            key: "home",
        },
        {
          label: <Link to="/listbook">List Buku</Link>,
          key: "listbook",
        },
        {
            label: <Link to="/achivement">Pencapaian</Link>,
            key: "achivement",
        },
        {
            label: <Link to="/leaderboard">Peringkat</Link>,
            key: "leaderboard",
        },
    ]
  return (
    <Layout>
      <Header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        backgroundColor: "#00B7F7"
      }}>
        <div className="logo">
        <Link to="/" style={{color:'white',}}>
            <h1>SchooLib</h1>
        </Link>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}>
          <Menu style={{backgroundColor: "#00B7F7", color: "white", width:'30vw'}} mode="horizontal" defaultSelectedKeys={["home"]} items={items} />
          <div>
            <Link to={"/login"} style={{marginLeft: "10px", border: 2, backgroundColor: "#012b68", padding: 15, color: "white", borderRadius: 10}} >MASUK</Link>
          </div>
        </div>
      </Header>
      <Content className="content">
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        copyright SchooLib
      </Footer>
    </Layout>
  );
};

export default LayoutLandingPages;
