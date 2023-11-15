import { useState } from "react";
import { Card, Input, Button, Typography, Switch } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import "./index.css";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const SSOLogin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const AdminHandler = (checked) => {
    setIsAdmin(checked);
  };

  // const { user, loading } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    nisn: "",
    password: "",
  });

  const dispatch = useDispatch();
  const redirect = useNavigate()

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target; //event target destructuring
    setFormData((prevFormData) => {
      //set State Value
      return {
        ...prevFormData, //take prev state to new object
        [name]: type === "checkbox" ? checked : value, // if type is checkbox the value will be checked (bolean value) else the value willl be value of input
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdmin) {
      console.log(formData)
      dispatch(
        loginAdmin({username: formData.username, password: formData.password })
      );
      redirect('/dashboard')
      // dispatch(setTheme("dark"))
    } else {
      //dispacth loginUser
    }
  };

  return (
    <>
      <div style={{ background: "#B9F0FC", padding: "30px", height: "100vh" }}>
        <Card
          bordered={false}
          style={{
            width: 300,
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            Masuk sebagai admin ?
            <Switch
              checkedChildren="Ya"
              unCheckedChildren="Tidak"
              onChange={AdminHandler}
            />
          </div>

          {isAdmin ? (
            <Input
              type="text"
              size="large"
              name="username"
              onChange={handleChange}
              placeholder="Username"
              prefix={
                <UserOutlined
                  style={{ marginRight: "10px", color: "#cfcfcf" }}
                />
              }
              style={{ marginBottom: "20px" }}
            />
          ) : (
            <Input
              type="text"
              size="large"
              name="nisn"
              placeholder="Nomor Induk Siswa"
              prefix={
                <UserOutlined
                  style={{ marginRight: "10px", color: "#cfcfcf" }}
                />
              }
              style={{ marginBottom: "20px" }}
            />
          )}
          <Input
            size="large"
            name="password"
            onChange={handleChange}
            placeholder="Kata Sandi"
            prefix={
              <KeyOutlined style={{ marginRight: "10px", color: "#cfcfcf" }} />
            }
            style={{ marginBottom: "20px" }}
          />
          <Button
            style={{ width: "100%", background: "#a0d911", color: "white" }}
            onClick={handleSubmit}
          >
            Masuk
          </Button>
        </Card>
        {isAdmin ? null : (
          <Text
            style={{
              position: "relative",
              left: "35%",
              top: "32%",
              width: "30%",
              display: "block",
              fontSize: "12px",
              // transform: 'translate(-50%,-50%)'
            }}
          >
            *Catatan: Jika belum memiliki akun, tolong hubungi administrator
          </Text>
        )}
      </div>
    </>
  );
};

export default SSOLogin;