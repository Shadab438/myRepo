import React from "react";
import { Table, Tag } from "antd";
import {
  SERVICE_PROVIDER,
  ORDER_TYPE,
  STATUS_ORDER
} from "../../../constans/telephoneOrder";
import moment from "moment";

const column = [
  {
    title: "STT",
    render: (text, record, index) => {
      return index + 1;
    }
  },
  {
    title: "Số điện thoại",
    dataIndex: "phoneNumber"
  },
  {
    title: "Nhà cung cấp dịch vụ",
    dataIndex: "serviceProvider",
    render: (cell) => SERVICE_PROVIDER[cell]
  },
  {
    title: "Kiểu đăng kí",
    dataIndex: "orderType",
    render: (cell) => ORDER_TYPE[cell]
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
    title: "Số tiền đã nạp",
    dataIndex: "fulfillAmount"
  },
  {
    title: "Giảm giá",
    dataIndex: "discount"
  },
  {
    title: "Mệnh giá nhỏ nhất",
    dataIndex: "minimumAmount",
    render: (text, record) => {
      if (record.minimumAmount) {
        return record.minimumAmount.toLocaleString();
      }
      return 0;
    }
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    render: (tag) => {
      let color = "";
      switch (tag) {
        case "FINISHED":
          color = "green";
          break;
        case "PROCESSING":
          color = "yellow";
          break;
        case "WAITING":
          color = "blue";
          break;
        case "FAILED":
          color = "red";
          break;
        default:
          color = "purple";
          break;
      }
      return (
        <>
          <Tag color={color} key={tag}>
            {STATUS_ORDER[tag]}
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

const ListOrder = ({ data, loading, pagination, onHandleTable }) => {
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

export default ListOrder;
