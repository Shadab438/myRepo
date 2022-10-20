import React from "react";
import { Table, Tag } from "antd";
import { ACTIVE_STORE } from "../../../constans/telephoneStore";
import moment from "moment";

const column = [
  {
    title: "STT",
    render: (text, record, index) => {
      return index + 1;
    }
  },
  {
    title: "Tên đăng nhập",
    dataIndex: "username"
  },
  {
    title: "Họ và tên",
    dataIndex: "fullName"
  },
  {
    title: "Số điện thoại",
    dataIndex: "phoneNumber"
  },
  {
    title: "Trạng thái hoạt động",
    dataIndex: "isActive",
    render: (tag) => {
      let color = tag === true ? "green" : "red";
      return (
        <>
          <Tag color={color} key={tag}>
            {ACTIVE_STORE[tag]}
          </Tag>
        </>
      );
    }
  },
  {
    title: "Số dư tài khoản",
    dataIndex: "accountBalance",
    render: (text, record) => {
      if (record.accountBalance) {
        return record.accountBalance.toLocaleString();
      }
      return 0;
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

const ListStore = ({ data, loading, pagination, onHandleTable }) => {
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

export default ListStore;
