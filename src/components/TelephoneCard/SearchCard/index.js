import React from "react";
import { Input, Select, Row, Col } from "antd";
import "./index.css";

const Search = Input.Search;

const optionsStatus = [
  { value: "SUCCESS", label: "Thành công" },
  { value: "PROCESSING", label: "Đang xử lý" },
  { value: "FAILED", label: "Thất bại" }
];

const SearchCard = ({
  status,
  inputSearch,
  onHandleStatus,
  onHandleInputSearch,
  onHandleSearchParams
}) => {
  return (
    <>
      <Row gutter={16}>
        <Col span={4}>
          <Select
            placeholder="Trạng thái"
            options={optionsStatus}
            value={status}
            onChange={onHandleStatus}
            style={{ width: 120 }}
            allowClear
          />
        </Col>
        <Col span={20}>
          <Search
            placeholder="Nhập tìm kiếm"
            value={inputSearch}
            onSearch={onHandleSearchParams}
            onChange={onHandleInputSearch}
          />
        </Col>
      </Row>
    </>
  );
};

export default SearchCard;
