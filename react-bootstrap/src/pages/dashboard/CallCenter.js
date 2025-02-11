import React from "react";
import { Row, Col } from "react-bootstrap";
import Overview from "../../components/Dashboard/CallCenter/Overview";
import InboundCalls from "../../components/Dashboard/CallCenter/InboundCalls";
import OutboundCalls from "../../components/Dashboard/CallCenter/OutboundCalls";
import AgentsPerformanceOverview from "../../components/Dashboard/CallCenter/AgentsPerformanceOverview";
import CallCenterGeography from "../../components/Dashboard/CallCenter/CallCenterGeography";
import AgentAvgEarnings from "../../components/Dashboard/CallCenter/AgentAvgEarnings";
import RecentCalls from "../../components/Dashboard/CallCenter/RecentCalls";

const CallCenter = () => {
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} xxl={8}>
          <Overview />
        </Col>

        <Col xs={12} sm={12} md={12} xxl={4}>
          <InboundCalls />

          <OutboundCalls />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={12} xl={12} xxl={6}>
          <AgentsPerformanceOverview />
        </Col>

        <Col xs={12} lg={12} xl={12} xxl={6}>
          <CallCenterGeography />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={12} xl={12} xxl={4}>
          <AgentAvgEarnings />
        </Col>

        <Col xs={12} lg={12} xl={12} xxl={8}>
          <RecentCalls />
        </Col>
      </Row>
    </>
  );
};

export default CallCenter;
