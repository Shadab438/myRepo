import React, { useState } from "react";
import { Drawer, Form, Col, Row, Switch, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { message } from "antd";
import telephoneAPI from "../../../api";

const AddPublisher = ({
  visible,
  showDrawer,
  onCloseDrawer,
  data,
  setData,
  setLoading
}) => {
  const [name, setName] = useState("");

  const onAddPublisher = async (value) => {
    if (value === "" || value === null) return;
    setLoading(true);
    try {
      const response = await telephoneAPI.telephoneAddPublishersAPI({ value });
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
        Nhà phát hành
      </Button>
      <Drawer
        title="Nhà phát hành"
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
        <Form layout="vertical" onFinish={onAddPublisher} id="formAddStore">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Nhà phát hành"
                name="name"
                rules={[
                  { required: true, message: "Hãy nhập tên nhà phát hành" }
                ]}
              >
                <Input
                  placeholder="Nhà phát hành"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddPublisher;
