import React from "react";
import { Row, Col, Input } from "antd";

import ChartList from "../components/charts/ChartList";

const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <ChartList />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input size="large" placeholder="chart details" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
