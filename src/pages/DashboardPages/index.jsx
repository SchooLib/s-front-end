import { useState } from "react";
import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./index.css"

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      label: <Link to="/dashboard">Dashboard</Link>,
      key: "dashboard",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/dashboard/book">Book</Link>,
      key: "book",
      icon: <BookOutlined />,
    },
    {
      label: <Link to="/dashboard/user">User</Link>,
      key: "user",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/dashboard/achievement">Achievement</Link>,
      key: "achievement",
      icon: <TrophyOutlined />,
    },
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link to="/dashboard/profile">Profile User</Link>,
          key: "profileuser",
          icon: <UserOutlined />,
        },
        {
          label: <Link to="/dashboard/sekolah">Sekolah</Link>,
          key: "sekolah",
          icon: <UserOutlined />,
        },
      ],
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} style={{backgroundColor: "#222b32" }}>
          <div>
            <div
              className="title"
              style={{
                backgroundColor: "#4590B8",
                paddingTop: 10,
                paddingBottom: 10,
                borderRight: "1px solid #222b32",
              }}
            >
              <Link to={"/"}><p style={{ textAlign: "center", color: "white" }}>Books Library</p></Link>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 10}}>
              <div>
                <img src="https://i.pravatar.cc/50" alt="avatar" style={{borderRadius: 100}}/>
              </div>
              {
                !collapsed && (
                  <div style={{color: "white", marginLeft: 10}}>
                    <h3>Role Admin</h3>
                    <p>M. Faiq</p>
                  </div>
                )
              }
            </div>
            <div
              className="title"
              style={{
                backgroundColor: "#243543",
                paddingTop: 10,
                paddingBottom: 10,
                marginBottom: 10,
              }}
            >
              <p style={{ textAlign: "center", color: "white" }}>Main Navigation</p>
            </div>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            items={items}
            style={{backgroundColor: "#222b32"}}
            className="custom-menu"
          />
        </Sider>
        <Layout>
          <Header style={{ display: "flex", alignItems: "center", backgroundColor: "#4590B8", color: "white", justifyContent: "flex-end"}}>
            <Button type="primary" onClick={handleLogout}>Logout</Button>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
