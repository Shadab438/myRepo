import React, { useEffect, useState } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Route, Link, useHistory, withRouter } from "react-router-dom";
import { Layout, Menu, Space, Dropdown } from "antd";
import {
  DashboardOutlined,
  Loading3QuartersOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CreditCardOutlined,
  AppstoreOutlined,
  GiftOutlined,
  ContactsOutlined
} from "@ant-design/icons";
import { user } from "../services/user";
import DashBoard from "../components/DashBoard";
import TelephoneStore from "../components/TelephoneStore";
import TelephoneOrder from "../components/TelephoneOrder";
import TelephoneCard from "../components/TelephoneCard";
import TelephoneDiscount from "../components/TelephoneDiscount";
import TelephonePublisher from "../components/TelephonePublisher";

const { Header, Sider, Content, Footer } = Layout;

const DefaultLayout = (props) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedPath, setSelectedPath] = useState([]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const logout = async () => {
    await user.logout();
    history.push("/");
  };

  useEffect(() => {
    setSelectedPath(props.location.pathname);
  }, [props.location.pathname]);

  const menu = (
    <Menu>
      <Menu.Item key="/telephone-store" icon={<AppstoreOutlined />}>
        <Link to="/telephone-store">
          <span>Đại lý</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/telephone-order" icon={<Loading3QuartersOutlined />}>
        <Link to="/telephone-order">
          <span>Lệnh nạp</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/telephone-card" icon={<CreditCardOutlined />}>
        <Link to="/telephone-card">
          <span>Thẻ cào</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/telephone-discount" icon={<GiftOutlined />}>
        <Link to="/telephone-discount">
          <span>Tỷ lệ chiết khấu</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/telephone-publisher" icon={<ContactsOutlined />}>
        <Link to="/telephone-publisher">
          <span>Nhà phát hành</span>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="/" onClick={logout}>
        <span>Đăng xuất</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Sider
        trigger={null}
        style={{ minHeight: "100vh" }}
        collapsible
        collapsed={collapsed}
      >
        <div className="container-form-menu" />
        <Menu theme="dark" mode="inline" selectedKeys={selectedPath}>
          <Menu.Item key="/dash-board" icon={<DashboardOutlined />}>
            <Link to="/dash-board">
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/telephone-store" icon={<AppstoreOutlined />}>
            <Link to="/telephone-store">
              <span>Đại lý</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/telephone-order" icon={<Loading3QuartersOutlined />}>
            <Link to="/telephone-order">
              <span>Lệnh nạp</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/telephone-card" icon={<CreditCardOutlined />}>
            <Link to="/telephone-card">
              <span>Thẻ cào</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/telephone-discount" icon={<GiftOutlined />}>
            <Link to="/telephone-discount">
              <span>Tỷ lệ chiết khấu</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/telephone-publisher" icon={<ContactsOutlined />}>
            <Link to="/telephone-publisher">
              <span>Nhà phát hành</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle
            }
          )}
          <Space wrap style={{ float: "right", marginRight: "3vh" }}>
            <Dropdown.Button
              overlay={menu}
              placement="bottomRight"
              icon={<UserOutlined />}
            >
              Tài khoản
            </Dropdown.Button>
          </Space>
        </Header>
        <hr />
        <Content className="site-layout-background">
          <Route exact path="/dash-board" component={DashBoard} />
          <Route path="/telephone-store" component={TelephoneStore} />
          <Route path="/telephone-order" component={TelephoneOrder} />
          <Route path="/telephone-card" component={TelephoneCard} />
          <Route path="/telephone-discount" component={TelephoneDiscount} />
          <Route path="/telephone-publisher" component={TelephonePublisher} />
        </Content>
        <Footer style={{ textAlign: "center", height: "10vh" }}>
          Copyright naptiendienthoai.com.vn © 2020 - 2021
        </Footer>
      </Layout>
    </Layout>
  );
};

export default withRouter(DefaultLayout);
