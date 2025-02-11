import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import SellerOverview from "../../../../components/eCommerce/SellersContent/Details/SellerOverview";
import Profile from "../../../../components/eCommerce/SellersContent/Details/Profile";
import Revenue from "../../../../components/eCommerce/SellersContent/Details/Revenue";
import ProductsList from "../../ProductsList";

const SellersDetails = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Sellers</h3>

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
            <span className="fw-medium">Sellers</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <span className="fw-medium">Seller Details</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <SellerOverview />

      <Row>
        <Col lg={4} xxl={3}>
          <Profile />
        </Col>

        <Col lg={8} xxl={9}>
          <Revenue />
        </Col>
      </Row>

      <ProductsList />
    </>
  );
};

export default SellersDetails;
