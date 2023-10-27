import { Layout, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
import "./index.css"

const LayoutLandingPages = () => {
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: "home",
        },
        {
          label: <Link to="/listbook">List Book</Link>,
          key: "listbook",
        },
        {
            label: <Link to="/achivement">Achivement</Link>,
            key: "achivement",
        },
        {
            label: <Link to="/leaderboard">Leaderboard</Link>,
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
            <h1>SchooLib</h1>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <Menu style={{backgroundColor: "#00B7F7", color: "white"}} mode="horizontal" defaultSelectedKeys={["home"]} items={items} />
          <div>
            <Link to={"/login"} style={{marginLeft: "10px", border: 2, backgroundColor: "#012b68", padding: 15, color: "white", borderRadius: 10}} >Login</Link>
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
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutLandingPages;
