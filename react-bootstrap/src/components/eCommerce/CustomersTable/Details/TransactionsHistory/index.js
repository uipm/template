"use client";

import React, { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";

const transactionsHistoryData = [
  {
    id: "#JAN-121",
    status: "pending",
    amount: "$6,855.00",
    rewards: "$12.00",
    date: "14 Jan 2024",
  },
  {
    id: "#JAN-120",
    status: "successful",
    amount: "$258.00",
    rewards: "$9.00",
    date: "13 Jan 2024",
  },
  {
    id: "#JAN-119",
    status: "rejected",
    amount: "$3,890.00",
    rewards: "$11.00",
    date: "12 Jan 2024",
  },
  {
    id: "#JAN-118",
    status: "successful",
    amount: "$2,500.00",
    rewards: "$23.42",
    date: "11 Jan 2024",
  },
  {
    id: "#JAN-117",
    status: "successful",
    amount: "$8,200.00",
    rewards: "$10.84",
    date: "10 Jan 2024",
  },
  {
    id: "#JAN-116",
    status: "rejected",
    amount: "$640.00",
    rewards: "$3.21",
    date: "09 Jan 2024",
  },
  {
    id: "#JAN-115",
    status: "successful",
    amount: "$9,100.00",
    rewards: "$43.21",
    date: "08 Jan 2024",
  },
  {
    id: "#JAN-114",
    status: "pending",
    amount: "$7,300.00",
    rewards: "$42.42",
    date: "07 Jan 2024",
  },
  {
    id: "#JAN-113",
    status: "successful",
    amount: "$2,800.00",
    rewards: "$11.21",
    date: "06 Jan 2024",
  },
  {
    id: "#JAN-112",
    status: "successful",
    amount: "$6,600.00",
    rewards: "$14.32",
    date: "05 Jan 2024",
  },
];

const TransactionsHistory = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 8; // Number of items per page
  const totalItems = transactionsHistoryData.length; // Total number of items
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Total pages

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactionsHistoryData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <h3 className="mb-0">Transactions History</h3>

            <Form.Select
              className="month-select form-control border-0"
              aria-label="Default select example"
            >
              <option defaultValue="0">Select</option>
              <option defaultValue="1">Last Day</option>
              <option defaultValue="2">Last Week</option>
              <option defaultValue="3">Last Month</option>
              <option defaultValue="4">Last Year</option>
            </Form.Select>
          </div>

          <div className="default-table-area recent-orders">
            <div className="table-responsive">
              <Table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Status</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Rewards</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTransactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.id}</td>
                      <td>
                        <span
                          className={`badge p-2 fs-12 fw-medium text-capitalize ${transaction.status}`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.rewards}</td>
                      <td>{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
              <span className="fs-12 fw-medium">
                Showing {startIndex + 1} to{" "}
                {Math.min(startIndex + itemsPerPage, totalItems)} of{" "}
                {totalItems} Results
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
                  {Array.from({ length: totalPages }, (_, idx) => (
                    <li key={idx} className="page-item">
                      <button
                        className={`page-link ${
                          currentPage === idx + 1 ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(idx + 1)}
                      >
                        {idx + 1}
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

export default TransactionsHistory;
