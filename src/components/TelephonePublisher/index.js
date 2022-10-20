import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Row, Col } from "antd";
import ListPublisher from "./ListPublisher";
import SearchPublisher from "./SearchPublisher";
import AddPublisher from "./AddPublisher";
import telephoneAPI from "../../api";

const TelephonePublisher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    sortBy: "createdAt_desc"
  });
  const [inputSearch, setInputSearch] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getListPublisher({ ...pagination });
  }, []);

  const onHandleTable = (pagination, filters, sorter) => {
    getListPublisher({
      page: pagination.current,
      limit: pagination.pageSize,
      sortBy: `${sorter.field}_${sorter.order === "descend" ? "desc" : "asc"}`
    });
  };

  const getListPublisher = async (params = {}) => {
    setLoading(true);
    try {
      const response = await telephoneAPI.telephonePublishersAPI({ params });
      setData(response.data.data);
      setPagination({ ...params, total: response.data.total });
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const onHandleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const onSearchValue = (value, event) => {
    getListPublisher({ ...pagination, search: value });
  };

  const onCancleSearch = () => {
    getListPublisher({ ...pagination });
    setInputSearch("");
    setLoading(false);
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
            <Col span={21}>
              <h2>Nhà phát hành</h2>
            </Col>
            <Col span={3}>
              <AddPublisher
                visible={visible}
                showDrawer={showDrawer}
                onCloseDrawer={onCloseDrawer}
                data={data}
                setData={setData}
                setLoading={setLoading}
              />
            </Col>
          </Row>
          <SearchPublisher
            inputSearch={inputSearch}
            onCancleSearch={onCancleSearch}
            onSearchValue={onSearchValue}
            onHandleInputSearch={onHandleInputSearch}
          />
          <hr style={{ marginTop: "2vh" }} />
          <ListPublisher
            data={data}
            loading={loading}
            pagination={{
              current: pagination.page,
              pageSize: pagination.limit,
              total: pagination.total
            }}
            onHandleTable={onHandleTable}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default TelephonePublisher;
