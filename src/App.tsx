import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const App = () => {
  const { Title } = Typography;
  return (
    <Router>
      <Row className="admin-row">
        <Col span={2} className="navbar-col">
          <NavBar />
        </Col>
        <Col span={22} className="content-col">
          <Title level={2}>
            New Jersey Coronavirus Map Admin{" "}
            <FontAwesomeIcon icon={faGlobeAmericas} size="lg" />
          </Title>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
};

export default App;
