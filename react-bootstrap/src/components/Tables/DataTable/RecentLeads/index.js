"use client";

import { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";

const recentLeadsData = [
  {
    id: '1',
    customerImg: "/images/user-11.jpg",
    customerName: "David Brown",
    email: "david@trezo.com",
    source: "Organic",
    status: "confirmed",
  },
  {
    id: '2',
    customerImg: "/images/user-12.jpg",
    customerName: "Sarah Miller",
    email: "sara@trezo.com",
    source: "Social",
    status: "pending",
  },
  {
    id: '3',
    customerImg: "/images/user-13.jpg",
    customerName: "Michael Wilson",
    email: "micheal@trezo.com",
    source: "Website",
    status: "inProgress",
  },
  {
    id: '4',
    customerImg: "/images/user-15.jpg",
    customerName: "Amanda Clark",
    email: "amanda@trezo.com",
    source: "Paid",
    status: "confirmed",
  },
  {
    id: '5',
    customerImg: "/images/user-16.jpg",
    customerName: "Jennifer Taylor",
    email: "taylor@trezo.com",
    source: "Others",
    status: "rejected",
  },
  {
    id: '6',
    customerImg: "/images/user-17.jpg",
    customerName: "Sarah Miller",
    email: "sara@trezo.com",
    source: "Social",
    status: "pending",
  },
  {
    id: '7',
    customerImg: "/images/user-18.jpg",
    customerName: "Jennifer Taylor",
    email: "taylor@trezo.com",
    source: "Others",
    status: "rejected",
  },
];

const RecentLeads = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages
  const totalItems = recentLeadsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get paginated data
  const paginatedData = recentLeadsData.slice(
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
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 p-4">
            <h3 className="mb-0">Recent Leads</h3>

            <Form.Select
              className="month-select form-control p-0 h-auto border-0"
              aria-label="Default select example"
            >
              <option defaultValue="0">Select</option>
              <option defaultValue="1">Today</option>
              <option defaultValue="2">Last Weekly</option>
              <option defaultValue="3">Last Monthly</option>
              <option defaultValue="4">Last Yearly</option>
            </Form.Select>
          </div>

          <div className="default-table-area style-two recent-leads">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox"
                          label=""
                        />
                      </Form>
                    </th>
                    <th scope="col">Customer</th>
                    <th scope="col">Email</th>
                    <th scope="col">Source</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedData.map((value, i) => (
                    <tr key={i}>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault2"
                          />
                        </div>
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={value.customerImg}
                            className="wh-44 rounded-circle"
                            alt="user"
                            width={44}
                            height={44}
                          />
                          <div className="ms-2">
                            <h6 className="fw-medium fs-14 mb-0">
                              {value.customerName}
                            </h6>
                          </div>
                        </div>
                      </td>

                      <td>{value.email}</td>

                      <td>{value.source}</td>

                      <td>
                        <span
                          className={`badge bg-opacity-10 p-2 fs-12 fw-medium text-capitalize ${value.status}`}
                        >
                          {value.status}
                        </span>
                      </td>

                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined fs-16 text-primary">
                              visibility
                            </span>
                          </button>

                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined fs-16 text-body">
                              edit
                            </span>
                          </button>

                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined fs-16 text-danger">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap p-4">
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

export default RecentLeads;
