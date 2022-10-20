import React from "react";
import { Input, Select, Row, Col } from "antd";
import "./index.css";

const Search = Input.Search;

const optionsStatus = [
  { value: "CANCELED", label: "Đã hủy" },
  { value: "FAILED", label: "Thất bại" },
  { value: "WAITING", label: "Chờ xử lý" },
  { value: "PROCESSING", label: "Đang xử lý" },
  { value: "FINISHED", label: "Thành công" }
];

const SearchOrder = ({
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

export default SearchOrder;
