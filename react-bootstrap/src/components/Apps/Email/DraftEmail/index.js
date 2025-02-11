"use client";

import React, { useState } from "react";
import { Dropdown, Card, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

const DraftEmail = () => {
  // State for dynamic email data
  const [emails] = useState([
    {
      id: 1,
      sender: "Google",
      subject: "2-Step Verification Turn Off",
      snippet: "Integer nec arcu ac nisi...",
      date: "20 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 2,
      sender: "Facebook",
      subject: "Friend Request",
      snippet: "Sed in libero eget lorem fermentum...",
      date: "21 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 3,
      sender: "Linkedin",
      subject: "Travel Information",
      snippet: "Vivamus vestibulum ligula in mauris...",
      date: "22 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 4,
      sender: "Ethan Parker",
      subject: "Leave Application",
      snippet: "Integer nec arcu ac nisi...",
      date: "23 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 5,
      sender: "Dribbble",
      subject: "Design Inspiration",
      snippet: "Sed in libero eget lorem fermentum...",
      date: "24 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 6,
      sender: "Instagram",
      subject: "Training Schedule",
      snippet: "Vivamus vestibulum ligula in mauris...",
      date: "25 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 7,
      sender: "Isabella Cooper",
      subject: "Internal Auditor",
      snippet: "Sed in libero eget lorem fermentum...",
      date: "26 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 8,
      sender: "Google",
      subject: "Password Changed",
      snippet: "Integer nec arcu ac nisi...",
      date: "27 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 9,
      sender: "Olivia Rodriguez",
      subject: "Virtual Training",
      snippet: "Vivamus vestibulum ligula in mauris...",
      date: "28 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 10,
      sender: "YouTube",
      subject: "New Subscriber",
      snippet: "Sed in libero eget lorem fermentum...",
      date: "29 JULY 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 11,
      sender: "Google",
      subject: "Security Alert",
      snippet: "Vivamus vestibulum ligula in mauris...",
      date: "30 JULY 2024",
      link: "/apps/email/read-email",
    },
  ]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(emails.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEmails = emails.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Card className="bg-white border-0 rounded-3 mb-4">
      <Card.Body className="p-4">
        {/* Header Section */}
        <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap pb-4 border-bottom">
          <div className="d-flex position-relative top-3">
            <div className="d-flex">
              <Form>
                <Form.Check type="checkbox" id="default-checkbox" label="" />
              </Form>
              <Dropdown className="btn-group">
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="dropdown-toggle p-0 border-0 ps-0 bg-transparent c-dropdown"
                >
                  <span className="material-symbols-outlined fs-22 text-body">
                    arrow_drop_down
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-white border box-shadow">
                  <Dropdown.Item href="#">All</Dropdown.Item>
                  <Dropdown.Item href="#">None</Dropdown.Item>
                  <Dropdown.Item href="#">Read</Dropdown.Item>
                  <Dropdown.Item href="#">Unread</Dropdown.Item>
                  <Dropdown.Item href="#">Starred</Dropdown.Item>
                  <Dropdown.Item href="#">Unstarred</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-top">Archive</Tooltip>}
            >
              <button className="pe-0 border-0 bg-transparent ps-2">
                <span className="material-symbols-outlined fs-20 text-body hover">
                  archive
                </span>
              </button>
            </OverlayTrigger>
          </div>
        </div>

        {/* Email Table Section */}
        <div className="default-table-area email-list">
          <div className="table-responsive">
            <table className="table align-middle">
              <tbody>
                {currentEmails.map((email) => (
                  <tr key={email.id}>
                    <td className="ps-0">
                      <div className="d-flex align-items-center">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input wh-20"
                            type="checkbox"
                            defaultValue=""
                            id={`flexCheckDefault${email.id}`}
                          />
                        </div>
                        <span className="material-symbols-outlined fs-20 text-body position-relative top-1">
                          draft
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="fs-14 fw-medium">
                        <Link to={email.link} className="d-block">
                          {email.sender}
                        </Link>
                      </span>
                    </td>
                    <td>
                      <Link
                        to={email.link}
                        className="w-330 d-inline-block text-truncate text-secondary"
                      >
                        {email.subject}{" "}
                        <span className="text-body">- {email.snippet}</span>
                      </Link>
                    </td>
                    <td className="text-end pe-0 fs-12">
                      <Link to={email.link} className="d-block">
                        {email.date}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Section */}
          <div className="pagination-area d-flex align-items-center">
            <span className="fs-12 fw-medium me-2">
              {startIndex + 1} -{" "}
              {Math.min(startIndex + itemsPerPage, emails.length)} of{" "}
              {emails.length}
            </span>
            <nav aria-label="Page navigation example">
              <ul className="pagination mb-0 justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link icon"
                    onClick={handlePrevious}
                    aria-label="Previous"
                  >
                    <span className="material-symbols-outlined">
                      keyboard_arrow_left
                    </span>
                  </button>
                </li>
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link icon"
                    onClick={handleNext}
                    aria-label="Next"
                  >
                    <span className="material-symbols-outlined">
                      keyboard_arrow_right
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DraftEmail;
