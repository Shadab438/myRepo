import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Row, Col } from "antd";
import ListStore from "./ListStore";
import SearchStore from "./SearchStore";
import AddStore from "./AddStore";
import telephoneAPI from "../../api";

const TelephoneStore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    sortBy: "createdAt_desc"
  });
  const [isActive, setIsActive] = useState(undefined);
  const [inputSearch, setInputSearch] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getListStore({ ...pagination });
  }, []);

  const onHandleTable = (pagination, filters, sorter) => {
    getListStore({
      page: pagination.current,
      limit: pagination.pageSize,
      sortBy: `${sorter.field}_${sorter.order === "descend" ? "desc" : "asc"}`
    });
  };

  const getListStore = async (params = {}) => {
    setLoading(true);
    try {
      const response = await telephoneAPI.telephoneStoreAPI({ params });
      setData(response.data.data);
      setPagination({ ...params, total: response.data.total });
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const onHandleIsActive = (value) => {
    setIsActive(value);
  };

  const onHandleInputChange = (event) => {
    setInputSearch(event.target.value);
  };

  const onSearchValue = (filter, search) => {
    getListStore({ ...pagination, search: search, isActive: filter });
  };

  const onCancleSearch = () => {
    setIsActive(undefined);
    setInputSearch("");
    getListStore({ ...pagination, search: "", isActive: undefined });
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
              <h2>Đại lý</h2>
            </Col>
            <Col span={3}>
              <AddStore
                visible={visible}
                showDrawer={showDrawer}
                onCloseDrawer={onCloseDrawer}
                data={data}
                setData={setData}
                setLoading={setLoading}
              />
            </Col>
          </Row>
          <SearchStore
            isActive={isActive}
            inputSearch={inputSearch}
            onCancleSearch={onCancleSearch}
            onSearchValue={() => onSearchValue(isActive, inputSearch)}
            onHandleIsActive={onHandleIsActive}
            onHandleInputChange={onHandleInputChange}
          />
          <hr style={{ marginTop: "2vh" }} />
          <ListStore
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

export default TelephoneStore;
