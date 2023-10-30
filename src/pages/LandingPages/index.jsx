import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;
import HeaderComponent from "../../components/Header";
import FooterComponent from "../../components/Footer";
import "./index.css"

const LayoutLandingPages = () => {

  return (
    <Layout>
      <HeaderComponent />
      <Content className="content">
        <Outlet />
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default LayoutLandingPages;
