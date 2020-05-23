import React from "react";
import { Row, Col } from "antd";

import ChartList from "../components/charts/ChartList";

const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <ChartList />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
