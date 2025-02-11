import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import DownloadApp from "../../components/Dashboard/NFT/DownloadApp";
import HistoryOfBids from "../../components/Dashboard/NFT/HistoryOfBids";
import LiveAuctionContent from "../../components/NFT/LiveAuctionContent";

const LiveAuction = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Live Auction</h3>

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

          <Breadcrumb.Item active>
            <span className="fw-medium">Live Auction</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col xs={12} sm={12} lg={8} xl={8} xxl={9}>
          <LiveAuctionContent />
        </Col>

        <Col xs={12} sm={12} lg={4} xl={4} xxl={3}>
          <DownloadApp />

          <HistoryOfBids />
        </Col>
      </Row>
    </>
  );
};

export default LiveAuction;
