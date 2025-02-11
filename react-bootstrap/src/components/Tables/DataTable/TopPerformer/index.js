"use client";

import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const topPerformerData = [
  {
    userImg: "/images/user-6.jpg",
    userName: "Alex Davis",
    email: "alex@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-7.jpg",
    userName: "Laura Martinez",
    email: "laura@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-8.jpg",
    userName: "Mark Thompson",
    email: "mark@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-9.jpg",
    userName: "Rachel White",
    email: "rachel@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-10.jpg",
    userName: "Kevin Lee",
    email: "kevin@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-11.jpg",
    userName: "Emily Brown",
    email: "emily@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-12.jpg",
    userName: "Daniel Carter",
    email: "daniel@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-13.jpg",
    userName: "Sophia Green",
    email: "sophia@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-14.jpg",
    userName: "James Wilson",
    email: "james@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-15.jpg",
    userName: "Liam Johnson",
    email: "liam@trezo.com",
    link: "#",
  },
];

const ITEMS_PER_PAGE = 5;

const TopPerformer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(topPerformerData.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Calculate the items to display for the current page
  const currentItems = topPerformerData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Card className="bg-white border-0 rounded-3 mb-4">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
          <h3 className="mb-0">Top Performer</h3>

          <Form.Select
            className="month-select form-control p-0 h-auto border-0"
            aria-label="Default select example"
          >
            <option defaultValue="0">Select</option>
            <option defaultValue="1">This Month</option>
            <option defaultValue="2">Last Month</option>
            <option defaultValue="3">Last Year</option>
          </Form.Select>
        </div>

        <ul className="ps-0 mb-0 list-unstyled border-top pt-3">
          {currentItems.map((value, i) => (
            <li
              key={i}
              className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3"
            >
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src={value.userImg}
                    className="wh-44 rounded-circle"
                    alt="user"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="flex-grow-1 ms-2 position-relative top-2">
                  <h6 className="mb-0 fw-medium">{value.userName}</h6>
                  <span>{value.email}</span>
                </div>
              </div>
              <Link
                to={value.link}
                className="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
              >
                <i className="ri-arrow-right-up-line fs-18"></i>
              </Link>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
          <span className="fs-12 fw-medium">
            Items per page: {ITEMS_PER_PAGE}
          </span>

          <div className="d-flex align-items-center">
            <span className="fs-12 fw-medium me-2">
              {currentPage * ITEMS_PER_PAGE - (ITEMS_PER_PAGE - 1)} -{" "}
              {Math.min(currentPage * ITEMS_PER_PAGE, topPerformerData.length)}{" "}
              of {topPerformerData.length}
            </span>

            <nav aria-label="Page navigation example">
              <ul className="pagination mb-0 justify-content-center">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link icon"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <span className="material-symbols-outlined">
                      keyboard_arrow_left
                    </span>
                  </button>
                </li>

                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
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
        </div>
      </Card.Body>
    </Card>
  );
};

export default TopPerformer;
