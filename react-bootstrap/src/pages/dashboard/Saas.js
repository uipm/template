import React from "react";
import { Row, Col } from "react-bootstrap";
import TodaysPayment from "../../components/Dashboard/SaaS/TodaysPayment";
import ActiveUser from "../../components/Dashboard/SaaS/ActiveUser";
import Revenue from "../../components/Dashboard/SaaS/Revenue";
import Conversion from "../../components/Dashboard/SaaS/Conversion";
import ActiveUsers from "../../components/Dashboard/SaaS/ActiveUsers";
import TopRefers from "../../components/Dashboard/SaaS/TopRefers";
import GrossRevenue from "../../components/Dashboard/SaaS/GrossRevenue";
import SalesByCountry from "../../components/Dashboard/SaaS/SalesByCountry";
import LatestTransaction from "../../components/Dashboard/SaaS/LatestTransaction";
import UpgradePlans from "../../components/Dashboard/SaaS/UpgradePlans";
import ProductTradeCondition from "../../components/Dashboard/SaaS/ProductTradeCondition";
import ActiveUsersStatus from "../../components/Dashboard/SaaS/ActiveUsersStatus";

const Saas = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={12} lg={8} xxl={9}>
          <TodaysPayment />
        </Col>

        <Col xs={12} md={12} lg={4} xxl={3}>
          <ActiveUser />

          <Revenue />

          <Conversion />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={5} xxl={4}>
          <TopRefers />
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={7} xxl={8}>
          <ActiveUsersStatus />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={8}>
          <LatestTransaction />
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={4}>
          <UpgradePlans />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
          <ActiveUsers />
        </Col>

        <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <ProductTradeCondition />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={7} xxl={8}>
          <GrossRevenue />
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={5} xxl={4}>
          <SalesByCountry />
        </Col>
      </Row>
    </>
  );
};

export default Saas;
