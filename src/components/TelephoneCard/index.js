import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import ListCard from "./ListCard";
import SearchCard from "./SearchCard";
import telephoneAPI from "../../api";

const TelephoneCard = () => {
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
    getListCard({ ...pagination });
  }, []);

  const onHandleTable = (pagination, filters, sorter) => {
    getListCard({
      page: pagination.current,
      limit: pagination.pageSize,
      sortBy: `${sorter.field}_${sorter.order === "descend" ? "desc" : "asc"}`
    });
  };

  const getListCard = async (params = {}) => {
    setLoading(true);
    try {
      const response = await telephoneAPI.telephoneCardAPI({ params });
      setData(response.data.data);
      setPagination({ ...params, total: response.data.total });
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const onHandleStatus = (value) => {
    setStatus(value);
    getListCard({ ...pagination, status: value });
  };

  const onHandleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const onHandleSearchParams = (value, event) => {
    getListCard({ ...pagination, search: value });
  };

  return (
    <>
      <Card style={{ margin: "2vh 5vh" }}>
        <CardBody>
          <h2>Thẻ cào</h2>
          <SearchCard
            status={status}
            inputSearch={inputSearch}
            onHandleStatus={onHandleStatus}
            onHandleInputSearch={onHandleInputSearch}
            onHandleSearchParams={onHandleSearchParams}
          />
          <hr />
          <ListCard
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

export default TelephoneCard;
