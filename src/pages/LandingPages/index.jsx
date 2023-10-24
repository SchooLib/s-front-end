import { Button, Layout, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const LayoutLandingPages = () => {
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: "home",
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
        color: "#fff"
      }}>
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]} items={items} />
          <Button type="primary">Login</Button>
        </div>
      </Header>
      <Content>
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
