import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";

import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Row className="admin-row">
        <Col span={2} className="navbar-col">
          <NavBar />
        </Col>
        <Col span={22} className="content-col">
          <TopBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
};

export default App;
