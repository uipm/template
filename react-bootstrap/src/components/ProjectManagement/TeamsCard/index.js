"use client";

import React, { useState } from "react";
import { Row, Col, Dropdown, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

// Sample dynamic data
const teams = [
  {
    id: 1,
    name: "Ava Turner",
    role: "Team Leader",
    project: "Project Management",
    progress: 85,
    bgColor: "#F3E8FF",
    profilePic: "/images/user-60.jpg",
    teamMembers: [
      "/images/user-52.jpg",
      "/images/user-54.jpg",
      "/images/user-55.jpg",
      "/images/user-56.jpg",
    ],
  },
  {
    id: 2,
    name: "Ethan Parker",
    role: "Team Leader",
    project: "eCommerce Theme",
    progress: 45,
    bgColor: "#DAEBFF",
    profilePic: "/images/user-61.jpg",
    teamMembers: [
      "/images/user-52.jpg",
      "/images/user-54.jpg",
      "/images/user-55.jpg",
      "/images/user-56.jpg",
    ],
  },
  {
    id: 3,
    name: "Isabella Lee",
    role: "Team Leader",
    project: "Shopify Theme Dev",
    progress: 70,
    bgColor: "#d8ffc8",
    profilePic: "/images/user-62.jpg",
    teamMembers: ["/images/user-1.jpg", "/images/user-2.jpg"],
  },
  {
    id: 4,
    name: "Thompson Torres",
    role: "Team Leader",
    project: "Oito - HTML",
    progress: 90,
    bgColor: "#ffe8d4",
    profilePic: "/images/user-63.jpg",
    teamMembers: ["/images/user-3.jpg", "/images/user-4.jpg"],
  },
  {
    id: 5,
    name: "Lucas Lyon",
    role: "Team Leader",
    project: "Tanus - Template",
    progress: 75,
    bgColor: "#dde4ff",
    profilePic: "/images/user-64.jpg",
    teamMembers: [
      "/images/user-5.jpg",
      "/images/user-6.jpg",
      "/images/user-7.jpg",
    ],
  },
  {
    id: 6,
    name: "Morgan Sturges",
    role: "Team Leader",
    project: "Delft - TypeScript",
    progress: 65,
    bgColor: "#ffe1dd",
    profilePic: "/images/user-65.jpg",
    teamMembers: [
      "/images/user-8.jpg",
      "/images/user-9.jpg",
      "/images/user-10.jpg",
    ],
  },
  {
    id: 7,
    name: "Sophia McNeel",
    role: "Team Leader",
    project: "Trezo - Angular",
    progress: 90,
    bgColor: "#dde4ff",
    profilePic: "/images/user-66.jpg",
    teamMembers: [
      "/images/user-11.jpg",
      "/images/user-12.jpg",
      "/images/user-13.jpg",
    ],
  },
  {
    id: 8,
    name: "Rodriguez Meade",
    role: "Team Leader",
    project: "eLearniv - React",
    progress: 80,
    bgColor: "#f3e8ff",
    profilePic: "/images/user-67.jpg",
    teamMembers: [
      "/images/user-14.jpg",
      "/images/user-15.jpg",
      "/images/user-16.jpg",
    ],
  },
  {
    id: 9,
    name: "Lucas Lyon",
    role: "Team Leader",
    project: "Tanus - Template",
    progress: 75,
    bgColor: "#dde4ff",
    profilePic: "/images/user-64.jpg",
    teamMembers: [
      "/images/user-5.jpg",
      "/images/user-6.jpg",
      "/images/user-7.jpg",
    ],
  },
  {
    id: 10,
    name: "Morgan Sturges",
    role: "Team Leader",
    project: "Delft - TypeScript",
    progress: 65,
    bgColor: "#ffe1dd",
    profilePic: "/images/user-65.jpg",
    teamMembers: [
      "/images/user-8.jpg",
      "/images/user-9.jpg",
      "/images/user-10.jpg",
    ],
  },
  {
    id: 11,
    name: "Sophia McNeel",
    role: "Team Leader",
    project: "Trezo - Angular",
    progress: 90,
    bgColor: "#dde4ff",
    profilePic: "/images/user-66.jpg",
    teamMembers: [
      "/images/user-11.jpg",
      "/images/user-12.jpg",
      "/images/user-13.jpg",
    ],
  },
  {
    id: 12,
    name: "Rodriguez Meade",
    role: "Team Leader",
    project: "eLearniv - React",
    progress: 80,
    bgColor: "#f3e8ff",
    profilePic: "/images/user-67.jpg",
    teamMembers: [
      "/images/user-14.jpg",
      "/images/user-15.jpg",
      "/images/user-16.jpg",
    ],
  },
];

const TeamsCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(teams.length / itemsPerPage);

  // Determine items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = teams.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Row>
        {currentItems.map((team) => (
          <Col sm={6} lg={4} xxl={3} key={team.id}>
            <Card className="bg-white border-0 rounded-3 mb-4">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={team.profilePic}
                        className="wh-65 rounded-circle border border-2"
                        alt="user"
                        width={65}
                        height={65}
                      />
                    </div>
                    <div className="flex-grow-1 ms-2 position-relative top-2">
                      <h4 className="fs-16 fw-semibold mb-1">{team.name}</h4>
                      <span>{team.role}</span>
                    </div>
                  </div>

                  <Dropdown className="action-opt ms-2 position-relative top-3">
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic"
                      className="bg-transparent p-0"
                    >
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-white border box-shadow">
                      <Dropdown.Item href="#">
                        <i className="material-symbols-outlined">visibility</i>{" "}
                        View
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <span className="material-symbols-outlined">edit</span>{" "}
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="material-symbols-outlined">delete</i>{" "}
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="text-center">
                  <span
                    className="d-inline-block py-2 px-4 text-center rounded-pill fw-medium text-secondary mb-3 bg-for-dark-mode"
                    style={{ backgroundColor: team.bgColor }}
                  >
                    {team.project}
                  </span>
                </div>

                <span className="d-block text-center text-body mb-2">
                  Team Members
                </span>

                <div className="d-flex flex-wrap justify-content-center mb-3">
                  {team.teamMembers.map((member, index) => (
                    <div className="ms-m-15" key={index}>
                      <img
                        src={member}
                        className="wh-40 rounded-circle border border-2"
                        alt="team member"
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-4 pb-md-2">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-medium d-block">Progress</span>
                    <span className="fw-medium d-block">{team.progress}%</span>
                  </div>

                  <ProgressBar
                    variant="primary"
                    now={team.progress}
                    style={{ height: "4px" }}
                  />
                </div>

                <Link
                  to="#"
                  className="btn btn-outline-primary fw-medium w-100 py-2 rounded-3"
                >
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}

        <Col sm={12} lg={12} xxl={12}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
                <span className="fs-12 fw-medium">
                  Showing {currentItems.length} of {teams.length} Results
                </span>

                <nav aria-label="Page navigation example">
                  <ul className="pagination mb-0 justify-content-center">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link icon"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        <span className="material-symbols-outlined">
                          keyboard_arrow_left
                        </span>
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li key={index} className="page-item">
                        <button
                          className={`page-link ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link icon"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        <span className="material-symbols-outlined">
                          keyboard_arrow_right
                        </span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TeamsCard;
