"use client";

import React, { useState } from "react";
import { Row, Col, Dropdown, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const teamMembersData = [
  {
    id: 1,
    name: "Ava Turner",
    role: "Business Analyst",
    joinDate: "01 Jan 2024",
    email: "turner@trezo.com",
    phone: "+1 555-445-4455",
    location: "Washington D.C",
    image: "/images/user-60.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 2,
    name: "Ethan Parker",
    role: "Project Manager",
    joinDate: "10 Jan 2024",
    email: "parker@trezo.com",
    phone: "+1 555-445-7788",
    location: "San Diego",
    image: "/images/user-61.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 3,
    name: "Isabella Lee",
    role: "Team Leader",
    joinDate: "20 Jan 2024",
    email: "lee@trezo.com",
    phone: "+1 555-333-2288",
    location: "Los Angeles",
    image: "/images/user-62.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 4,
    name: "Thompson Torres",
    role: "Designer",
    joinDate: "1 Jan 2024",
    email: "thompson@trezo.com",
    phone: "+1 555-444-3355",
    location: "Boston",
    image: "/images/user-63.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 5,
    name: "Lucas Lyon",
    role: "Technical Writer",
    joinDate: "10 Jan 2024",
    email: "lucas@trezo.com",
    phone: "+1 555-444-9966",
    location: "Chicago",
    image: "/images/user-64.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 6,
    name: "Morgan Sturges",
    role: "Data Analyst",
    joinDate: "1 Mar 2024",
    email: "morgan@trezo.com",
    phone: "+1 555-444-7755",
    location: "Las Vegas",
    image: "/images/user-65.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 7,
    name: "Sophia McNeel",
    role: "Sales Representative",
    joinDate: "15 Jan 2024",
    email: "sophia@trezo.com",
    phone: "+1 555-444-8822",
    location: "San Francisco",
    image: "/images/user-66.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 8,
    name: "Rodriguez Meade",
    role: "Manager",
    joinDate: "01 Apr 2024",
    email: "rodriguez@trezo.com",
    phone: "+1 555-444-4411",
    location: "Houston",
    image: "/images/user-67.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 9,
    name: "Michael Mackenzie",
    role: "Web Developer",
    joinDate: "05 Apr 2024",
    email: "michael@trezo.com",
    phone: "+1 555-444-9922",
    location: "Oklahoma Cit",
    image: "/images/user-68.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 10,
    name: "Charles Tharp",
    role: "Accountant",
    joinDate: "01 May 2024",
    email: "charles@trezo.com",
    phone: "+1 555-444-2255",
    location: "Austin",
    image: "/images/user-69.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 11,
    name: "Tina Bell",
    role: "Executive Assistant",
    joinDate: "10 May 2024",
    email: "tina@trezo.com",
    phone: "+1 555-444-3399",
    location: "Portland",
    image: "/images/user-106.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 12,
    name: "Melvin Larocque",
    role: "Business Analyst",
    joinDate: "15 May 2024",
    email: "melvin@trezo.com",
    phone: "+1 555-444-4455",
    location: "Washington D.C",
    image: "/images/user-107.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 13,
    name: "Morgan Sturges",
    role: "Data Analyst",
    joinDate: "1 Mar 2024",
    email: "morgan@trezo.com",
    phone: "+1 555-444-7755",
    location: "Las Vegas",
    image: "/images/user-108.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 14,
    name: "Rodriguez Meade",
    role: "Manager",
    joinDate: "01 Apr 2024",
    email: "rodriguez@trezo.com",
    phone: "+1 555-444-4411",
    location: "Houston",
    image: "/images/user-109.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 15,
    name: "Sophia McNeel",
    role: "Sales Representative",
    joinDate: "15 Jan 2024",
    email: "sophia@trezo.com",
    phone: "+1 555-444-8822",
    location: "San Francisco",
    image: "/images/user-60.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
  {
    id: 16,
    name: "Charles Tharp",
    role: "Accountant",
    joinDate: "01 May 2024",
    email: "charles@trezo.com",
    phone: "+1 555-444-2255",
    location: "Austin",
    image: "/images/user-61.jpg",
    socialLinks: [
      { url: "https://facebook.com", icon: "facebook-fill", color: "#3a559f" },
      { url: "https://twitter.com", icon: "twitter-x-line", color: "#03a9f4" },
      { url: "https://linkedin.com", icon: "linkedin-fill", color: "#007ab9" },
      { url: "mailto:turner@trezo.com", icon: "mail-line", color: "#2196f3" },
    ],
  },
];

const TeamMembers = () => {
  // State for search query and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter team members based on search query
  const filteredMembers = teamMembersData.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastMember = currentPage * itemsPerPage;
  const indexOfFirstMember = indexOfLastMember - itemsPerPage;
  const currentMembers = filteredMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <Form className="position-relative table-src-form me-0">
              <input
                type="text"
                className="form-control"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                search
              </span>
            </Form>

            <Link
              to="/users/add-user"
              className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
            >
              <span className="py-sm-1 d-block">
                <i className="ri-add-line d-none d-sm-inline-block"></i>
                <span>Add New User</span>
              </span>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Row>
        {currentMembers.map((member, i) => (
          <Col sm={6} lg={4} xxl={3} key={i}>
            <Card className="bg-white border-0 rounded-3 mb-4">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={member.image}
                        className="wh-65 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="text-decoration-none text-secondary fw-medium fs-16">
                        {member.name}
                      </div>
                      <span className="d-block">{member.role}</span>
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
                        <i className="material-symbols-outlined">visibility</i>
                        View
                      </Dropdown.Item>

                      <Dropdown.Item href="#">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                      </Dropdown.Item>

                      <Dropdown.Item href="#">
                        <i className="material-symbols-outlined">delete</i>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="d-flex align-items-center mb-2 pb-1">
                  <span className="text-secondary">Joined Date:</span>
                  <span className="ms-1">{member.joinDate}</span>
                </div>

                <div className="d-flex align-items-center mb-2 pb-1">
                  <span className="text-secondary">Email Address:</span>
                  <span className="ms-1">{member.email}</span>
                </div>

                <div className="d-flex align-items-center mb-2 pb-1">
                  <span className="text-secondary">Phone Number:</span>
                  <span className="ms-1">{member.phone}</span>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <span className="text-secondary">Location:</span>
                  <span className="ms-1">{member.location}</span>
                </div>

                <ul className="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2">
                  {member.socialLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none wh-30 d-inline-block lh-30 text-center rounded-circle text-white transition-y"
                        style={{ backgroundColor: link.color }}
                      >
                        <i className={`ri-${link.icon} text-white`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Col sm={12} lg={12}>
        <Card className="bg-white border-0 rounded-3 mb-4">
          <Card.Body className="p-4">
            <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
              <span className="fs-12 fw-medium">
                Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredMembers.length)}{" "}
                of {filteredMembers.length} results
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

                  {[...Array(totalPages)].map((_, pageIndex) => (
                    <li key={pageIndex} className="page-item">
                      <button
                        className={`page-link ${
                          currentPage === pageIndex + 1 ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(pageIndex + 1)}
                      >
                        {pageIndex + 1}
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
    </>
  );
};

export default TeamMembers;
