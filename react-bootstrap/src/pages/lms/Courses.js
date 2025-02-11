import React from "react";
import { Breadcrumb } from "react-bootstrap";
import CoursesTable from "../../components/Lms/CoursesTable";

const Courses = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Courses List</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">LMS</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">Courses</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Courses List</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <CoursesTable />
    </>
  );
};

export default Courses;
