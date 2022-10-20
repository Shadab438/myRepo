import React from "react";
import { Input, Select, Row, Col, Button } from "antd";
import "./index.css";

const Search = Input.Search;

const optionsIsActive = [
  { value: true, label: "Hoạt dộng" },
  { value: false, label: "Không hoạt động" }
];

const SearchStore = ({
  isActive,
  inputSearch,
  onCancleSearch,
  onSearchValue,
  onHandleIsActive,
  onHandleInputChange
}) => {
  return (
    <>
      <Row gutter={[16, 24]}>
        <Col span={4}>
          <Select
            placeholder="Trạng thái hoạt động"
            allowClear
            options={optionsIsActive}
            value={isActive}
            onChange={onHandleIsActive}
          />
        </Col>
        <Col span={20}>
          <Search
            placeholder="Nhập tìm kiếm"
            value={inputSearch}
            onChange={onHandleInputChange}
          />
        </Col>
        <Col span={12}>
          <Button
            type="danger"
            style={{ marginRight: "2vh" }}
            onClick={onCancleSearch}
          >
            Hủy tìm kiếm
          </Button>
          <Button type="primary" onClick={onSearchValue}>
            Tìm kiếm
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SearchStore;
