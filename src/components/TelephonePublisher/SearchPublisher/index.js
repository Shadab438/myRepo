import React from "react";
import { Input, Row, Col, Button } from "antd";

const Search = Input.Search;

const SearchPublisher = ({
  inputSearch,
  onCancleSearch,
  onSearchValue,
  onHandleInputSearch
}) => {
  return (
    <>
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <Search
            placeholder="Nhập tìm kiếm"
            value={inputSearch}
            onSearch={onSearchValue}
            onChange={onHandleInputSearch}
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

export default SearchPublisher;
