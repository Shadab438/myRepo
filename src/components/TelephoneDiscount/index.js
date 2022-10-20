import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Row, Col } from "antd";
import ListDiscount from "./ListDiscount";
import AddDiscount from "./AddDiscount";
import telephoneAPI from "../../api";

const TelephoneDiscount = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getListDiscount();
  }, []);

  const onHandleTable = () => {
    getListDiscount();
  };

  const getListDiscount = async () => {
    setLoading(true);
    try {
      const response = await telephoneAPI.telephoneDiscountdAPI();
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onCloseDrawer = () => {
    setVisible(false);
  };

  return (
    <>
      <Card style={{ margin: "2vh 5vh" }}>
        <CardBody>
          <Row gutter={16}>
            <Col span={20}>
              <h2>Sửa tỷ lệ chiết khấu</h2>
            </Col>
            <Col span={4}>
              <AddDiscount
                visible={visible}
                showDrawer={showDrawer}
                onCloseDrawer={onCloseDrawer}
                data={data}
                setData={setData}
                setLoading={setLoading}
              />
            </Col>
          </Row>
          <hr style={{ marginTop: "2vh" }} />
          <ListDiscount
            data={data}
            loading={loading}
            onHandleTable={onHandleTable}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default TelephoneDiscount;
