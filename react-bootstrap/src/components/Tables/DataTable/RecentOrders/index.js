"use client";

import { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const recentOrdersData = [
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-1234",
    customer: {
      img: "/images/user-3.jpg",
      name: "Emily Brown",
    },
    created: "10 Jun 2024",
    total: "$12,870",
    status: "pending",
  },
  {
    orderID: "#JAN-2345",
    customer: {
      img: "/images/user-1.jpg",
      name: "Sarah Johnson",
    },
    created: "12 Jun 2024",
    total: "$10,490",
    status: "shipped",
  },
  {
    orderID: "#JAN-1323",
    customer: {
      img: "/images/user-2.jpg",
      name: "Michael Smith",
    },
    created: "11 Jun 2024",
    total: "$6,575",
    status: "confirmed",
  },
  {
    orderID: "#DEC-1098",
    customer: {
      img: "/images/user-5.jpg",
      name: "Ashley Davis",
    },
    created: "08 Jun 2024",
    total: "$4,680",
    status: "rejected",
  },
  {
    orderID: "#DEC-3567",
    customer: {
      img: "/images/user-4.jpg",
      name: "Jason Lee",
    },
    created: "09 Jun 2024",
    total: "$7,895",
    status: "shipped",
  },
];

const RecentOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  // Filter data based on the search query
  const filteredData = recentOrdersData.filter(
    (order) =>
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice(
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
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <h3 className="mb-0">Recent Orders</h3>

            <div className="d-flex">
              <Form className="position-relative table-src-form">
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                  search
                </span>
              </Form>

              <Form.Select
                className="month-select form-control"
                aria-label="Default select example"
              >
                <option defaultValue="0">Select</option>
                <option defaultValue="1">Today</option>
                <option defaultValue="2">Weekly</option>
                <option defaultValue="3">Monthly</option>
                <option defaultValue="4">Yearly</option>
              </Form.Select>
            </div>
          </div>

          <div className="default-table-area recent-orders">
            <div className="table-responsive">
              <Table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Created</th>
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((value, i) => (
                    <tr key={i}>
                      <td>{value.orderID}</td>
                      <td>
                        <Link
                          to="/my-profile"
                          className="d-flex align-items-center"
                        >
                          <img
                            src={value.customer.img}
                            className="wh-40 rounded-3"
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="ms-2 ps-1">
                            <h6 className="fw-medium fs-14">
                              {value.customer.name}
                            </h6>
                          </div>
                        </Link>
                      </td>
                      <td>{value.created}</td>
                      <td>{value.total}</td>
                      <td>
                        <span
                          className={`badge p-2 fs-12 fw-medium text-capitalize ${value.status}`}
                        >
                          {value.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

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

export default RecentOrders;
