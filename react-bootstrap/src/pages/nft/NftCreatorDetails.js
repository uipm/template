import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap"; 
import Profile from "../../components/NFT/Creators/Details/Profile";
import NftsTabs from "../../components/NFT/Creators/Details/NftsTabs";

const NftCreatorDetails = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Creator Details</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">NFT</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">Creators</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Creator Details</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col lg={4}>
          <Profile />
        </Col>

        <Col lg={8}>
          <NftsTabs />
        </Col>
      </Row>
    </>
  );
};

export default NftCreatorDetails;
