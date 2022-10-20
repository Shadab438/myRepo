import React from "react";
import { Table } from "antd";

const column = [
  {
    title: "STT",
    render: (text, record, index) => {
      return index + 1;
    }
  },
  { title: "Số điện thoại", dataIndex: "phoneNumber" },
  {
    title: "Tổng số tiền",
    dataIndex: "amount",
    render: (text, record) => {
      if (record.amount) {
        return record.amount.toLocaleString();
      }
      return 0;
    }
  }
];

const ListSimCard = ({ data, loading, onHandleTable }) => {
  return (
    <Table
      style={{ marginTop: "3vh" }}
      columns={column}
      //key={data.defaultSims._id}
      dataSource={data.defaultSims}
      loading={loading}
      onChange={onHandleTable}
    />
  );
};

export default ListSimCard;
