"use client";

import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const PromotionsEmail = () => {
  const [emails] = useState([
    {
      id: 1,
      sender: "Google",
      subject: "2-Step Verification Turn Off",
      snippet: "Integer nec arcu ac nisi...",
      date: "20 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 2,
      sender: "Facebook",
      subject: "Friend Request",
      snippet: "Sed in libero eget lorem fermentum...",
      date: "21 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 3,
      sender: "Linkedin",
      subject: "Travel Information",
      snippet: "Vivamus vestibulum ligula in mauris...",
      date: "22 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 4,
      sender: "Instagram",
      subject: "Training Schedule",
      snippet: "Integer nec arcu ac nisi...",
      date: "23 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 5,
      sender: "Twitter",
      subject: "Account Update",
      snippet: "Vivamus vestibulum ligula in mauris...",
      date: "24 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 6,
      sender: "YouTube",
      subject: "New Subscriber",
      snippet: "Sed in libero eget lorem fermentum...",
      date: "25 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 7,
      sender: "Google",
      subject: "Security Alert",
      snippet: "Integer nec arcu ac nisi...",
      date: "26 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 8,
      sender: "LinkedIn",
      subject: "Job Offer",
      snippet: "Vivamus vestibulum ligula in mauris...",
      date: "27 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 9,
      sender: "Facebook",
      subject: "Friend Request Accepted",
      snippet: "Sed in libero eget lorem fermentum...",
      date: "28 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 10,
      sender: "Twitter",
      subject: "Weekly Digest",
      snippet: "Integer nec arcu ac nisi...",
      date: "29 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 11,
      sender: "Instagram",
      subject: "Photo of the Day",
      snippet: "Vivamus vestibulum ligula in mauris...",
      date: "30 July 2024",
      link: "/apps/email/read-email",
    },
    {
      id: 12,
      sender: "Google",
      subject: "Password Changed",
      snippet: "Integer nec arcu ac nisi...",
      date: "31 July 2024",
      link: "/apps/email/read-email",
    },
  ]);

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
    <div className="default-table-area email-list">
      <div className="table-responsive">
        <Table className="table align-middle">
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
                    <span className="material-symbols-outlined fs-22 text-body position-relative top-1">
                      star_rate
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
        </Table>
      </div>

      <div className="pagination-area d-flex justify-content-between align-items-center gap-2">
        <span className="fs-12 fw-medium">
          {startIndex + 1} -{" "}
          {Math.min(startIndex + itemsPerPage, emails.length)} of{" "}
          {emails.length}
        </span>

        <nav aria-label="Page navigation example">
          <ul className="pagination mb-0 justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
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
  );
};

export default PromotionsEmail;
