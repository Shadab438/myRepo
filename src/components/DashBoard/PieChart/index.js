import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardBody } from "reactstrap";
import { Row, Col } from "antd";
import { STATUS_ORDER } from "../../../constans/telephoneOrder";
import { STATUS_CARD } from "../../../constans/telephoneCard";

const PeiChart = ({ data }) => {
  if (!data.cards || !data.orders) return null;

  const convertLabel = (dataList) => {
    let data = [];
    dataList.forEach((record) => {
      data.push(record._id);
    });
    return data;
  };

  const convertDataAmount = (dataList) => {
    let data = [];
    dataList.forEach((record) => {
      data.push(record.amount);
    });
    return data;
  };

  const optionsCardDate = {
    title: {
      display: true,
      text: "Số lượng thẻ theo ngày",
      fontSize: 20
    },
    legend: {
      display: true,
      position: "right"
    }
  };

  const stateCardDate = {
    labels: convertLabel(data.cards.today).map((cell) => STATUS_CARD[cell]),
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4"
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F"
        ],
        data: convertDataAmount(data.cards.today)
      }
    ]
  };

  const optionsCardMonth = {
    title: {
      display: true,
      text: "Số lượng thẻ theo tháng",
      fontSize: 20
    },
    legend: {
      display: true,
      position: "right"
    }
  };

  const stateCardMonth = {
    labels: convertLabel(data.cards.thisMonth).map((cell) => STATUS_CARD[cell]),
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4"
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F"
        ],
        data: convertDataAmount(data.cards.thisMonth)
      }
    ]
  };

  const optionsOderDate = {
    title: {
      display: true,
      text: "Đơn hàng theo ngày",
      fontSize: 20
    },
    legend: {
      display: true,
      position: "right"
    }
  };

  const stateOderDate = {
    labels: convertLabel(data.orders.today).map((cell) => STATUS_ORDER[cell]),
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4"
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F"
        ],
        data: convertDataAmount(data.orders.today)
      }
    ]
  };

  const optionsOderMonth = {
    title: {
      display: true,
      text: "Đơn hàng theo tháng",
      fontSize: 20
    },
    legend: {
      display: true,
      position: "right"
    }
  };

  const stateOderMonth = {
    labels: convertLabel(data.orders.thisMonth).map(
      (cell) => STATUS_ORDER[cell]
    ),
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4"
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F"
        ],
        data: convertDataAmount(data.orders.thisMonth)
      }
    ]
  };

  return (
    <Card style={{ marginBottom: "3vh" }}>
      <CardBody>
        <Row gutter={16}>
          <Col span={12}>
            <Pie data={stateCardDate} options={optionsCardDate} />
          </Col>
          <Col span={12}>
            <Pie data={stateCardMonth} options={optionsCardMonth} />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "3vh" }}>
          <Col span={12}>
            <Pie data={stateOderDate} options={optionsOderDate} />
          </Col>
          <Col span={12}>
            <Pie data={stateOderMonth} options={optionsOderMonth} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PeiChart;
