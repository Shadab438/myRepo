import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { user } from "../../services/user";
import banner from "../../images/banner.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const login = async (authenData) => {
    if (authenData === "" || authenData === null) return;
    setLoading(true);
    try {
      const loginAuthen = await user.login(authenData);
      if (loginAuthen) {
        history.push("/dash-board");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      // message.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="banner">
        <img alt="banner" src={banner} />
        <div className="text-banner">Đăng nhập</div>
      </div>
      <div className="login-form">
        <Form name="login_form" layout="vertical" onFinish={login}>
          <Form.Item
            className="login-item"
            label="Tên đăng nhập"
            name="username"
            rules={[
              {
                required: true,
                message: "Hãy nhập tên đăng nhập"
              }
            ]}
          >
            <Input
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            className="login-item"
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu"
              }
            ]}
          >
            <Input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="danger"
              htmlType="submit"
              block
              className="login-form-button"
              loading={loading}
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
