"use client";

import { useState } from "react";
import { Dropdown, Card, Table, ProgressBar } from "react-bootstrap";

const studentsProgressData = [
  {
    name: "Olivia Clark",
    courseName: "Web Design",
    status: "55",
    progressBg: "warning",
  },
  {
    name: "Alexander Garcia",
    courseName: "Python Dev",
    status: "80",
    progressBg: "success",
  },
  {
    name: "Chloe Lewis",
    courseName: "Front-end",
    status: "25",
    progressBg: "info",
  },
  {
    name: "Ava Turner",
    courseName: "Back-end",
    status: "50",
    progressBg: "danger",
  },
  {
    name: "Ryan Flores",
    courseName: "Data Analytics",
    status: "100",
    progressBg: "success",
  },
  {
    name: "John Doe",
    courseName: "Plugin Dev",
    status: "10",
    progressBg: "warning",
  },
];

const StudentsProgress = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages
  const totalItems = studentsProgressData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get paginated data
  const paginatedData = studentsProgressData.slice(
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
              <h3 className="mb-0">Student&apos;s Progress</h3>

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
              <Table className="table align-middle border-0">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((value, i) => (
                    <tr key={i}>
                      <td>
                        <div className="d-flex align-items-center">
                          <h6 className="mb-0 fs-14 fw-medium">{value.name}</h6>
                        </div>
                      </td>

                      <td className="text-body">{value.courseName}</td>

                      <td>
                        <ProgressBar
                          variant={value.progressBg}
                          now={value.status}
                          style={{
                            height: "5px",
                          }}
                        />
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
        </Card.Body>
      </Card>
    </>
  );
};

export default StudentsProgress;
