"use client";

import { useState } from "react";
import { Dropdown, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const groupLessonsData = [
  {
    images: [
      {
        img: "/images/user-20.jpg",
      },
      {
        img: "/images/user-21.jpg",
      },
      {
        img: "/images/user-6.jpg",
      },
    ],
    name: "Digital Marketing",
    date: "15 March 2024",

    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-22.jpg",
      },
      {
        img: "/images/user-23.jpg",
      },
      {
        img: "/images/user-24.jpg",
      },
    ],
    name: "Web Development",
    date: "10 March 2024",
    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-25.jpg",
      },
      {
        img: "/images/user-26.jpg",
      },
      {
        img: "/images/user-27.jpg",
      },
    ],
    name: "UX/UI Design",
    date: "05 March 2024",
    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-28.jpg",
      },
      {
        img: "/images/user-29.jpg",
      },
      {
        img: "/images/user-30.jpg",
      },
    ],
    name: "Content Writer",
    date: "02 March 2024",
    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-28.jpg",
      },
      {
        img: "/images/user-29.jpg",
      },
      {
        img: "/images/user-30.jpg",
      },
    ],
    name: "Content Writer",
    date: "02 March 2024",
    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-25.jpg",
      },
      {
        img: "/images/user-26.jpg",
      },
      {
        img: "/images/user-27.jpg",
      },
    ],
    name: "UX/UI Design",
    date: "05 March 2024",
    link: "#",
  },
];

const GroupLessons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages
  const totalItems = groupLessonsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get the data for the current page
  const paginatedData = groupLessonsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h3 className="mb-0">Group Lessons</h3>

              <Dropdown className="action-opt">
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="bg-transparent p-0"
                >
                  <span className="material-symbols-outlined">more_horiz</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-white border box-shadow">
                  <Dropdown.Item href="#">
                    <span className="material-symbols-outlined">schedule</span>
                    Today
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <span className="material-symbols-outlined">pie_chart</span>
                    Last 7 Days
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <i className="material-symbols-outlined">refresh</i>
                    Last Month
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <span className="material-symbols-outlined">
                      calendar_today
                    </span>
                    Last 1 Year
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <span className="material-symbols-outlined">bar_chart</span>
                    All Time
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <i className="material-symbols-outlined">visibility</i>
                    View
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <i className="material-symbols-outlined">delete</i>
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="default-table-area style-two top-instructors">
            <div className="table-responsive">
              <Table className="align-middle border-0">
                <tbody>
                  {paginatedData.map((value, i) => (
                    <tr key={i} className="gl-tr">
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <div className="d-flex">
                              {value.images.slice(0, 5).map((value, i) => (
                                <img
                                  key={i}
                                  src={value.img}
                                  className="wh-44 rounded-circle border border-2 border-color-white minus-l-20"
                                  alt="user"
                                  width={44}
                                  height={44}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="flex-grow-1 ms-2 position-relative top-2">
                            <h6 className="mb-0 fs-14 fw-medium">
                              {value.name}
                            </h6>
                            <span className="fs-12 text-body">
                              {value.date}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="text-end">
                        <Link
                          to={value.link}
                          className="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                        >
                          <i className="ri-arrow-right-up-line fs-18"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>

          <div className="p-4">
            <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
              <span className="fs-12 fw-medium">
                Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
                {totalItems}
              </span>

              <div className="d-flex align-items-center">
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
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default GroupLessons;
