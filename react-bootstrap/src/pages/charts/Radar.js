import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import BasicRadarChart from "../../components/Charts/RadarCharts/BasicRadarChart";
import MultipleRadarChart from "../../components/Charts/RadarCharts/MultipleRadarChart";
import PolygonRadarChart from "../../components/Charts/RadarCharts/PolygonRadarChart";

const Radar = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Radar</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">Charts</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Radar</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col lg={6}>
          <BasicRadarChart />
        </Col>

        <Col lg={6}>
          <MultipleRadarChart />
        </Col>
      </Row>

      <PolygonRadarChart />
    </>
  );
};

export default Radar;
