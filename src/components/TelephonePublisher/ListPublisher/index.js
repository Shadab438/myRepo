import React from "react";
import { Table, Tag } from "antd";
import { ACTIVE_PUBLISHER } from "../../../constans/telephonePublisher";
import moment from "moment";

const column = [
  {
    title: "STT",
    render: (text, record, index) => {
      return index + 1;
    }
  },
  {
    title: "Nhà phát hành",
    dataIndex: "name"
  },
  {
    title: "apiKey",
    dataIndex: "apiKey"
  },
  {
    title: "secretKey",
    dataIndex: "secretKey"
  },
  {
    title: "Trạng thái hoạt động",
    dataIndex: "isActive",
    render: (tag) => {
      let color = tag === true ? "green" : "red";
      return (
        <>
          <Tag color={color} key={tag}>
            {ACTIVE_PUBLISHER[tag]}
          </Tag>
        </>
      );
    }
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    sorter: true,
    defaultSortOrder: "descend",
    render: (text, record) => {
      if (record.createdAt) {
        return moment(record.createdAt).format("DD/MM/YYYY HH:mm:ss");
      }
      return null;
    }
  },
  {
    title: "Ngày cập nhật",
    dataIndex: "lastUpdatedAt",
    sorter: true,
    render: (text, record) => {
      if (record.lastUpdatedAt) {
        return moment(record.lastUpdatedAt).format("DD/MM/YYYY HH:mm:ss");
      }
      return null;
    }
  }
];

const ListPublisher = ({ data, loading, pagination, onHandleTable }) => {
  return (
    <Table
      style={{ marginTop: "3vh" }}
      columns={column}
      rowKey={(record) => record._id}
      dataSource={data}
      loading={loading}
      pagination={pagination}
      onChange={onHandleTable}
    />
  );
};

export default ListPublisher;
