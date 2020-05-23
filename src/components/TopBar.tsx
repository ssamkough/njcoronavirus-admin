import React from "react";
import { Row, Col, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  const { Title } = Typography;
  return (
    <Row>
      <Col>
        <Title level={2}>
          New Jersey Coronavirus Map Admin{" "}
          <FontAwesomeIcon icon={faGlobeAmericas} size="lg" />
        </Title>
      </Col>
    </Row>
  );
};

export default TopBar;
