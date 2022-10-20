import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import ListOrder from "./ListOrder";
import SearchOrder from "./SearchOrder";
import telephoneAPI from "../../api";

const TelephoneOrder = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    sortBy: "createdAt_desc"
  });
  const [status, setStatus] = useState(undefined);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    getListOrder({ ...pagination });
  }, []);

  const onHandleTable = (pagination, filter, sorter) => {
    getListOrder({
      page: pagination.current,
      limit: pagination.pageSize,
      sortBy: `${sorter.field}_${sorter.order === "descend" ? "desc" : "asc"}`
    });
  };

  const getListOrder = async (params = {}) => {
    setLoading(true);
    try {
      const response = await telephoneAPI.telephoneOrderAPI({ params });
      setData(response.data.data);
      setPagination({ ...params, total: response.data.total });
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const onHandleStatus = (value) => {
    setStatus(value);
    getListOrder({ ...pagination, status: value });
  };

  const onHandleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const onHandleSearchParams = (value, event) => {
    getListOrder({ ...pagination, search: value });
  };

  return (
    <>
      <Card style={{ margin: "2vh 5vh" }}>
        <CardBody>
          <h2>Lệnh nạp</h2>
          <SearchOrder
            showSearch
            status={status}
            inputSearch={inputSearch}
            onHandleStatus={onHandleStatus}
            onHandleInputSearch={onHandleInputSearch}
            onHandleSearchParams={onHandleSearchParams}
          />
          <hr />
          <ListOrder
            data={data}
            loading={loading}
            pagination={{
              current: pagination.page,
              pageSize: pagination.limit,
              total: pagination.total
            }}
            onHandleTable={onHandleTable}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default TelephoneOrder;
