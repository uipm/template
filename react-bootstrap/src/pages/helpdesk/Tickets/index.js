import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import TicketsResolved from "../../../components/HelpDesk/Tickets/TicketsResolved.js"; 
import TicketsInProgress from "../../../components/HelpDesk/Tickets/TicketsInProgress.js"; 
import TicketsDue from "../../../components/HelpDesk/Tickets/TicketsDue.js"; 
import TicketsNewOpen from "../../../components/HelpDesk/Tickets/TicketsNewOpen.js";  
import AllTickets from "../../../components/HelpDesk/AllTickets/index.js";



const Tickets = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Tickets</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">HelpDesk</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Tickets</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col xs={12} sm={6} lg={6} xl={6} xxl={3}>
          <TicketsResolved />
        </Col>

        <Col xs={12} sm={6} lg={6} xl={6} xxl={3}>
          <TicketsInProgress />
        </Col>

        <Col xs={12} sm={6} lg={6} xl={6} xxl={3}>
          <TicketsDue />
        </Col>

        <Col xs={12} sm={6} lg={6} xl={6} xxl={3}>
          <TicketsNewOpen />
        </Col>
      </Row>

      <AllTickets />
    </>
  );
};

export default Tickets;
