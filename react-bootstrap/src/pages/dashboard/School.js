import React from "react";
import { Row, Col } from "react-bootstrap";
import SchoolOverview from "../../components/Dashboard/School/SchoolOverview";
import Starts from "../../components/Dashboard/School/Starts";
import UpcomingEvents from "../../components/Dashboard/School/UpcomingEvents";
import AttendanceAnalytics from "../../components/Dashboard/School/AttendanceAnalytics";
import Teachers from "../../components/Dashboard/School/Teachers";
import StudentsOverview from "../../components/Dashboard/School/StudentsOverview";
import NewAdmissions from "../../components/Dashboard/School/NewAdmissions";
import NoticeBoard from "../../components/Dashboard/School/NoticeBoard";
import StudentsList from "../../components/Dashboard/School/StudentsList";

const School = () => {
  return (
    <>
      <SchoolOverview />

      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} xxl={8}>
          <Starts />
        </Col>

        <Col xs={12} sm={12} md={12} xxl={4}>
          <UpcomingEvents />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={7} xl={7} xxl={8}>
          <AttendanceAnalytics />
        </Col>

        <Col xs={12} lg={5} xl={5} xxl={4}>
          <Teachers />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={6} xl={6} xxl={4}>
          <StudentsOverview />
        </Col>

        <Col xs={12} lg={6} xl={6} xxl={4}>
          <NewAdmissions />
        </Col>

        <Col xs={12} lg={12} xl={12} xxl={4}>
          <NoticeBoard />
        </Col>
      </Row>

      <StudentsList />
    </>
  );
};

export default School;
