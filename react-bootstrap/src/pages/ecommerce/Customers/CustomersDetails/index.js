import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import TransactionsHistory from "../../../../components/eCommerce/CustomersTable/Details/TransactionsHistory";
import Profile from "../../../../components/eCommerce/CustomersTable/Details/Profile";

const CustomersDetails = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Customers Details</h3>

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
            <span className="fw-medium">Customers</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <span className="fw-medium">Details</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col md={12} lg={8} xxl={9}>
          <TransactionsHistory />
        </Col>

        <Col item xs={12} md={4} lg={4} xl={3}>
          <Profile />
        </Col>
      </Row>
    </>
  );
};

export default CustomersDetails;
