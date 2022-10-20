import React, { useState } from "react";
import { Drawer, Form, Col, Row, Switch, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { message } from "antd";
import telephoneAPI from "../../../api";

const AddStore = ({
  visible,
  showDrawer,
  onCloseDrawer,
  data,
  setData,
  setLoading
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accountBalance, setAccountBalance] = useState(null);
  const [active, setActive] = useState(true);

  const onAddStore = async (value) => {
    if (value === "" || value === null) return;
    setLoading(true);
    try {
      const response = await telephoneAPI.telephoneAddStoreAPI({
        ...value,
        isActive: active
      });
      if (response.data.data) {
        setData([response.data.data, ...data]);
        onCloseDrawer();
      }
      setLoading(false);
    } catch (error) {
      showDrawer();
      message.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined />
        Thêm đại lý
      </Button>
      <Drawer
        title="Thêm đại lý"
        placement="right"
        width={720}
        visible={visible}
        onClose={onCloseDrawer}
        destroyOnClose={true}
        footer={
          <Form.Item style={{ textAlign: "right" }}>
            <Button onClick={onCloseDrawer} style={{ marginRight: 8 }}>
              Quay lại
            </Button>
            <Button type="primary" htmlType="submit" form="formAddStore">
              Thêm mới
            </Button>
          </Form.Item>
        }
      >
        <Form layout="vertical" onFinish={onAddStore} id="formAddStore">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Tên đăng nhập"
                name="username"
                rules={[{ required: true, message: "Hãy nhập tên đăng nhập" }]}
              >
                <Input
                  placeholder="Tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: "Hãy nhập mật khẩu" }]}
              >
                <Input
                  placeholder="Mật khẩu"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Họ và tên"
                name="fullName"
                rules={[{ required: true, message: "Hãy nhập họ và tên" }]}
              >
                <Input
                  placeholder="Họ và tên"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[{ required: true, message: "Hãy nhập số điện thoại" }]}
              >
                <Input
                  placeholder="Số điện thoại"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Số dư tài khoản"
                name="accountBalance"
                rules={[
                  { required: true, message: "Hãy nhập số dư tài khoản" }
                ]}
              >
                <Input
                  placeholder="Số dư tài khoản"
                  type="number"
                  value={accountBalance}
                  onChange={(e) => setAccountBalance(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Trạng thái hoạt động" name="isActive">
                <Switch
                  checked={active}
                  onChange={(checked) => setActive(checked)}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddStore;
