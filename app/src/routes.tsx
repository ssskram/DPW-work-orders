import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/layout";
import Home from "./components/newRequest";
import MyRequests from "./components/myRequests";
import AllRequests from "./components/allRequests";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/MyRequests" component={MyRequests} />
    <Route exact path="/AllRequests" component={AllRequests} />
  </Layout>
);
