import { Button, Layout } from "antd";
const { Header, Content } = Layout;
import FooterComponent from "../../components/Footer";
import SidebarComponent from "../../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import "./index.css"

const DashboardLayout = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SidebarComponent />
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
          <FooterComponent />
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
