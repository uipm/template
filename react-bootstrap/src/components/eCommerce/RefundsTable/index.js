"use client";

import React, { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";

const refundsData = [
  {
    id: "#999",
    customerImg: "/images/user-6.jpg",
    customerName: "Oliver Khan",
    date: "19 Jun 2024",
    noOrderReturned: 2,
    noOrderRefunded: 1,
    noOrderReplaced: 0,
    totalRefunded: "$42.00",
    totalReplaced: "$50.00",
  },
  {
    id: "#998",
    customerImg: "/images/user-7.jpg",
    customerName: "Marcia Baker",
    date: "19 Jun 2024",
    noOrderReturned: 1,
    noOrderRefunded: 1,
    noOrderReplaced: 0,
    totalRefunded: "$32.00",
    totalReplaced: "$54.00",
  },
  {
    id: "#997",
    customerImg: "/images/user-8.jpg",
    customerName: "Carolyn Barnes",
    date: "20 Jun 2024",
    noOrderReturned: 2,
    noOrderRefunded: 7,
    noOrderReplaced: 4,
    totalRefunded: "$53.00",
    totalReplaced: "$67.00",
  },
  {
    id: "#996",
    customerImg: "/images/user-9.jpg",
    customerName: "Donna Miller",
    date: "21 Jun 2024",
    noOrderReturned: 3,
    noOrderRefunded: 1,
    noOrderReplaced: 2,
    totalRefunded: "$42.00",
    totalReplaced: "$56.00",
  },
  {
    id: "#995",
    customerImg: "/images/user-10.jpg",
    customerName: "Barbara Cross",
    date: "22 Jun 2024",
    noOrderReturned: 5,
    noOrderRefunded: 2,
    noOrderReplaced: 7,
    totalRefunded: "$24.00",
    totalReplaced: "$45.00",
  },
  {
    id: "#994",
    customerImg: "/images/user-11.jpg",
    customerName: "Rebecca Block",
    date: "23 Jun 2024",
    noOrderReturned: 5,
    noOrderRefunded: 6,
    noOrderReplaced: 2,
    totalRefunded: "$53.00",
    totalReplaced: "$56.00",
  },
  {
    id: "#993",
    customerImg: "/images/user-12.jpg",
    customerName: "Ramiro McCarty",
    date: "24 Jun 2024",
    noOrderReturned: 2,
    noOrderRefunded: 6,
    noOrderReplaced: 1,
    totalRefunded: "$52.00",
    totalReplaced: "$67.00",
  },
  {
    id: "#992",
    customerImg: "/images/user-13.jpg",
    customerName: "Robert Fairweather",
    date: "25 Jun 2024",
    noOrderReturned: 6,
    noOrderRefunded: 5,
    noOrderReplaced: 4,
    totalRefunded: "$42.00",
    totalReplaced: "$46.00",
  },
  {
    id: "#991",
    customerImg: "/images/user-14.jpg",
    customerName: "Marcelino Haddock",
    date: "26 Jun 2024",
    noOrderReturned: 7,
    noOrderRefunded: 2,
    noOrderReplaced: 5,
    totalRefunded: "$44.00",
    totalReplaced: "$68.00",
  },
  {
    id: "#990",
    customerImg: "/images/user-15.jpg",
    customerName: "Thomas Wilson",
    date: "27 Jun 2024",
    noOrderReturned: 5,
    noOrderRefunded: 1,
    noOrderReplaced: 6,
    totalRefunded: "$99.00",
    totalReplaced: "$742.00",
  },
  {
    id: "#989",
    customerImg: "/images/user-9.jpg",
    customerName: "Donna Miller",
    date: "21 Jun 2024",
    noOrderReturned: 3,
    noOrderRefunded: 1,
    noOrderReplaced: 2,
    totalRefunded: "$42.00",
    totalReplaced: "$56.00",
  },
  {
    id: "#988",
    customerImg: "/images/user-10.jpg",
    customerName: "Barbara Cross",
    date: "22 Jun 2024",
    noOrderReturned: 5,
    noOrderRefunded: 2,
    noOrderReplaced: 7,
    totalRefunded: "$24.00",
    totalReplaced: "$45.00",
  },
];

const RefundsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter refunds based on the search query
  const filteredRefunds = refundsData.filter(
    (refund) =>
      refund.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      refund.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredRefunds.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Paginated refunds
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRefunds = filteredRefunds.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3 mb-md-4">
            <Form className="position-relative table-src-form me-0">
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to page 1 when the search query changes
                }}
              />

              <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                search
              </span>
            </Form>

            <Form.Select
              className="month-select form-control p-0 h-auto border-0"
              aria-label="Default select example"
            >
              <option defaultValue="0">This Month</option>
              <option defaultValue="1">Last Month</option>
              <option defaultValue="2">Last Year</option>
            </Form.Select>
          </div>

          <div className="default-table-area all-products">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Date</th>
                    <th scope="col" className="text-end">
                      No. Order Returned
                    </th>
                    <th scope="col" className="text-end">
                      No. Order Refunded
                    </th>
                    <th scope="col" className="text-end">
                      No. Order Replaced
                    </th>
                    <th scope="col" className="text-end">
                      Total Refunded{" "}
                    </th>
                    <th scope="col" className="text-end">
                      Total Replaced
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentRefunds.map((refund, index) => (
                    <tr key={index}>
                      <td className="text-body">{refund.id}</td>

                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src={refund.customerImg}
                              className="wh-34 rounded-circle"
                              alt="user"
                              width={34}
                              height={34}
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 position-relative top-1">
                            <h6 className="mb-0 fs-14 fw-medium">
                              {refund.customerName}
                            </h6>
                          </div>
                        </div>
                      </td>

                      <td>{refund.date}</td>

                      <td className="text-end">{refund.noOrderReturned}</td>

                      <td className="text-end">{refund.noOrderRefunded}</td>

                      <td className="text-end">{refund.noOrderReplaced}</td>

                      <td className="text-end">{refund.totalRefunded}</td>

                      <td className="text-end">{refund.totalReplaced}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
              <span className="fs-13 fw-medium">
                Showing {startIndex + 1} to{" "}
                {Math.min(startIndex + itemsPerPage, totalItems)} of{" "}
                {totalItems} results
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

export default RefundsTable;
