import React, { useEffect, useState } from "react";
import "./index.css";
import { Card, CardBody } from "reactstrap";
import ListSimCard from "../DashBoard/ListSimCard";
import PieChart from "../DashBoard/PieChart";
import telephoneAPI from "../../api";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSimCard();
  }, []);

  const onHandleTable = () => {
    getSimCard();
  };

  const getSimCard = async () => {
    setLoading(true);
    try {
      const response = await telephoneAPI.telephoneDashboardAPI();
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Card style={{ margin: "2vh 5vh" }}>
        <CardBody>
          <PieChart data={data} />
          <hr />
          <ListSimCard
            data={data}
            loading={loading}
            onHandleTable={onHandleTable}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default DashBoard;
