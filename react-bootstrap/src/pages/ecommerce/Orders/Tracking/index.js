import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import OrderTracking from "../../../../components/eCommerce/Orders/OrderTracking";
import OrderSummary from "../../../../components/eCommerce/Orders/OrderDetails/OrderSummary";

const Tracking = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Tracking</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="fw-medium">eCommerce</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="fw-medium">Orders</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <span className="fw-medium">Tracking</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col lg={7} xxl={8}>
          <OrderTracking />
        </Col>

        <Col lg={4} xxl={4}>
          <OrderSummary />
        </Col>
      </Row>
    </>
  );
};

export default Tracking;
