import React from "react";
import { Table, Tag } from "antd";
import { SERVICE_PROVIDER, STATUS_CARD } from "../../../constans/telephoneCard";
import moment from "moment";

const column = [
  {
    title: "STT",
    render: (text, record, index) => {
      return index + 1;
    }
  },
  {
    title: "Nhà cung cấp dịch vụ",
    dataIndex: "serviceProvider",
    render: (cell) => SERVICE_PROVIDER[cell]
  },
  {
    title: "Mã thẻ",
    dataIndex: "cardCode"
  },
  {
    title: "Số seri",
    dataIndex: "cardSeri"
  },
  {
    title: "Tổng số tiền",
    dataIndex: "amount",
    render: (text, record) => {
      if (record.amount) {
        return record.amount.toLocaleString();
      }
      return 0;
    }
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    render: (tag) => {
      let color = tag === "SUCCESS" ? "green" : "red";
      if (tag === "PROCESSING") {
        color = "yellow";
      }
      return (
        <>
          <Tag color={color} key={tag}>
            {STATUS_CARD[tag]}
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

const ListCard = ({ data, loading, pagination, onHandleTable }) => {
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

export default ListCard;
