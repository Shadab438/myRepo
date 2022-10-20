import React from "react";
import { Table } from "antd";

const column = [
  {
    title: "STT",
    render: (text, record, index) => {
      return index + 1;
    }
  },
  { title: "Loại thẻ", dataIndex: "_id" },
  {
    title: "Phần trăm giảm",
    dataIndex: "value"
    // render: (text, record) => {
    //   if (record.value) {
    //     return record.value.toLocaleString();
    //   }
    //   return 0;
    // }
  }
];

const ListDiscount = ({ data, loading, onHandleTable }) => {
  return (
    <Table
      style={{ marginTop: "3vh" }}
      columns={column}
      key={(record) => record._id}
      dataSource={data}
      loading={loading}
      onChange={onHandleTable}
    />
  );
};

export default ListDiscount;
