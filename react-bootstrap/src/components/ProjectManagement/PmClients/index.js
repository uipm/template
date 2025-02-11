"use client";

import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const clientData = [
  {
    id: 1,
    name: "CodeCraft",
    email: "info@codecraft.com",
    clientName: "Olivia Taylor",
    phone: "(555) 555-5555",
    projects: 12,
    img: "/images/client-1.jpg",
  },
  {
    id: 2,
    name: "ByteSavvy",
    email: "info@bytesavvy.com",
    clientName: "David Smith",
    phone: "(555) 123-4567",
    projects: 16,
    img: "/images/client-2.jpg",
  },
  {
    id: 3,
    name: "DataTech",
    email: "info@datatech.com",
    clientName: "Alice Johnson",
    phone: "(555) 234-5678",
    projects: 7,
    img: "/images/client-3.jpg",
  },
  {
    id: 4,
    name: "CyberByte",
    email: "info@cyberbyte.com",
    clientName: "Emily Brown",
    phone: "(555) 345-6789",
    projects: 5,
    img: "/images/client-4.jpg",
  },
  {
    id: 5,
    name: "AlphaTech",
    email: "contact@alphatech.com",
    clientName: "James Miller",
    phone: "(555) 456-7890",
    projects: 9,
    img: "/images/client-5.jpg",
  },
  {
    id: 6,
    name: "SoftSolutions",
    email: "info@softsolutions.com",
    clientName: "Sophia Davis",
    phone: "(555) 567-8901",
    projects: 6,
    img: "/images/client-6.jpg",
  },
  {
    id: 7,
    name: "CodeGen",
    email: "info@codegen.com",
    clientName: "Sophia Martinez",
    phone: "(555) 678-9012",
    projects: 34,
    img: "/images/client-7.jpg",
  },
  {
    id: 8,
    name: "WebWiz",
    email: "info@webwiz.com",
    clientName: "William Davis",
    phone: "(555) 789-0123",
    projects: 8,
    img: "/images/client-8.jpg",
  },
  {
    id: 9,
    name: "ByteTech",
    email: "info@bytetech.com",
    clientName: "Ava Anderson",
    phone: "(555) 890-1234",
    projects: 3,
    img: "/images/client-9.jpg",
  },
  {
    id: 10,
    name: "CloudFlex",
    email: "info@cloudflex.com",
    clientName: "Ethan Thomas",
    phone: "(555) 901-2345",
    projects: 10,
    img: "/images/client-10.jpg",
  },
  {
    id: 11,
    name: "WebWorx",
    email: "info@webworx.com",
    clientName: "Isabella Clark",
    phone: "(555) 012-3456",
    projects: 25,
    img: "/images/client-6.jpg",
  },
  {
    id: 12,
    name: "TechSync",
    email: "info@techsync.com",
    clientName: "Alexander Lewis",
    phone: "(555) 210-9876",
    projects: 5,
    img: "/images/client-12.jpg",
  },
  {
    id: 13,
    name: "CyberByte",
    email: "support@cyberbyte.com",
    clientName: "Emily Brown",
    phone: "(555) 345-6789",
    projects: 5,
    img: "/images/client-4.jpg",
  },
  {
    id: 14,
    name: "AlphaTech",
    email: "contact@alphatech.com",
    clientName: "James Miller",
    phone: "(555) 456-7890",
    projects: 9,
    img: "/images/client-5.jpg",
  },
  {
    id: 15,
    name: "SoftSolutions",
    email: "info@softsolutions.com",
    clientName: "Sophia Davis",
    phone: "(555) 567-8901",
    projects: 6,
    img: "/images/client-6.jpg",
  },
  {
    id: 16,
    name: "CodeGen",
    email: "info@codegen.com",
    clientName: "Sophia Martinez",
    phone: "(555) 678-9012",
    projects: 34,
    img: "/images/client-7.jpg",
  },
];

const PmClients = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of clients per page

  const indexOfLastClient = currentPage * itemsPerPage;
  const indexOfFirstClient = indexOfLastClient - itemsPerPage;
  const currentClients = clientData.slice(
    indexOfFirstClient,
    indexOfLastClient
  );
  const totalClients = clientData.length;
  const totalPages = Math.ceil(totalClients / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Row>
        {currentClients.map((client) => (
          <Col sm={6} lg={4} xxl={3} key={client.id}>
            <Card className="bg-white border-0 rounded-3 mb-4">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div className="bg-body pe-3 pb-3 bg-for-dark-mode">
                    <img
                      src={client.img}
                      className="wh-80 rounded-3"
                      alt="client"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className="flex-grow-1 p-20 pb-0">
                  <h4 className="mb-1 fs-16 fw-semibold">{client.name}</h4>
                  <span>{client.email}</span>
                </div>
              </div>

              <Card.Body className="p-4">
                <ul className="ps-0 mb-4 list-unstyled">
                  <li className="mb-2 pb-1">
                    <span className="fw-medium me-1">Name:</span>
                    <span className="fw-medium text-secondary">
                      {client.clientName}
                    </span>
                  </li>
                  <li className="mb-2 pb-1">
                    <span className="fw-medium me-1">Phone:</span>
                    <span className="fw-medium text-secondary">
                      {client.phone}
                    </span>
                  </li>
                  <li className="mb-0">
                    <span className="fw-medium me-1">Projects:</span>
                    <span className="fw-medium text-secondary">
                      {client.projects}
                    </span>
                  </li>
                </ul>

                <div className="d-flex align-items-center">
                  <a
                    href={`mailto:${client.email}`}
                    className="btn btn-primary px-3 py-2 fw-medium"
                  >
                    Message
                  </a>
                  <Link
                    to="#"
                    className="btn btn-outline-primary px-3 py-2 fw-medium ms-3"
                  >
                    View Project
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
            <span className="fs-12 fw-medium">
              Showing {indexOfFirstClient + 1} to{" "}
              {Math.min(indexOfLastClient, totalClients)} of {totalClients}{" "}
              Results
            </span>

            <nav aria-label="Page navigation example">
              <ul className="pagination mb-0 justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link icon"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <span className="material-symbols-outlined fs-24">
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
                    <span className="material-symbols-outlined fs-24">
                      keyboard_arrow_right
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PmClients;
