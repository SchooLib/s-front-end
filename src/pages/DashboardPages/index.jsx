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
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
          label: <Link to="/dashboard/profile">Profile</Link>,
          key: "profile",
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

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div>
            <div
              className="title"
              style={{
                backgroundColor: "white",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <p style={{ textAlign: "center" }}>Books Library</p>
            </div>
            <div>
              <div></div>
              <div>
                <h3>Role Admin</h3>
                <p>M. Faiq</p>
              </div>
            </div>
            <div
              className="title"
              style={{
                backgroundColor: "white",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <p style={{ textAlign: "center" }}>Main Navigation</p>
            </div>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ display: "flex", alignItems: "center", color: "white", justifyContent: "flex-end"}}>
            <Button type="primary">Logout</Button>
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
