import React, { useState } from "react";
import { Drawer, Form, Col, Row, Input, Button } from "antd";
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
  const [id, setId] = useState("");
  const [value, setValue] = useState("");

  const onAddDiscount = async (value) => {
    if (value === "" || value === null) return;
    setLoading(true);
    try {
      const response = await telephoneAPI.telephoneAddDiscountdAPI({ value });
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
        Sửa tỷ lệ chiết khấu
      </Button>
      <Drawer
        title="Sửa tỷ lệ chiết khấu"
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
        <Form layout="vertical" onFinish={onAddDiscount} id="formAddStore">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="VIETTEL"
                name="VIETTEL"
                rules={[{ required: true, message: "Hãy nhập kiểu đăng kí" }]}
              >
                <Input
                  placeholder="VIETTEL"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="VINAPHONE"
                name="VINAPHONE"
                rules={[{ required: true, message: "Hãy nhập kiểu đăng kí" }]}
              >
                <Input
                  placeholder="VINAPHONE"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Tỷ lệ chiết khấu"
                name="value"
                rules={[
                  { required: true, message: "Hãy nhập tỷ lệ chiết khấu" }
                ]}
              >
                <Input
                  placeholder="Tỷ lệ chiết khấu"
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
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
