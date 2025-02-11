"use client";

import { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const invoices = [
  {
    invoiceID: "#JAN-158",
    customer: {
      img: "/images/user-6.jpg",
      name: "Marcia Baker",
    },
    email: "marcia@trezo.com",
    total: "$5,000",
    issuedDate: "10 Nov 2024",
    quantity: 6,
    walletBalance: "$2,000",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-325",
    customer: {
      img: "/images/user-7.jpg",
      name: "Carolyn Barnes",
    },
    email: "barnes@trezo.com",
    total: "$8,750",
    issuedDate: "11 Nov 2024",
    quantity: 10,
    walletBalance: "$4,500",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-286",
    customer: {
      img: "/images/user-8.jpg",
      name: "Donna Miller",
    },
    email: "donna@trezo.com",
    total: "$3,200",
    issuedDate: "12 Nov 2024",
    quantity: 6,
    walletBalance: "$1,550",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-463",
    customer: {
      img: "/images/user-9.jpg",
      name: "Barbara Cross",
    },
    email: "cross@trezo.com",
    total: "$3,750",
    issuedDate: "13 Nov 2024",
    quantity: 4,
    walletBalance: "$2,490",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-998",
    customer: {
      img: "/images/user-10.jpg",
      name: "Rebecca Block",
    },
    email: "block@trezo.com",
    total: "$6,000",
    issuedDate: "14 Nov 2024",
    quantity: 2,
    walletBalance: "$3,599",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-436",
    customer: {
      img: "/images/user-11.jpg",
      name: "Ramiro McCarty",
    },
    email: "ramiro@trezo.com",
    total: "$9,200",
    issuedDate: "13 Nov 2024",
    quantity: 8,
    walletBalance: "$5,800",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-860",
    customer: {
      img: "/images/user-12.jpg",
      name: "Robert Fairweather",
    },
    email: "robert@trezo.com",
    total: "$2,500",
    issuedDate: "12 Nov 2024",
    quantity: 6,
    walletBalance: "$1,200",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-491",
    customer: {
      img: "/images/user-13.jpg",
      name: "Marcelino Haddock",
    },
    email: "haddock@trezo.com",
    total: "$7,300",
    issuedDate: "17 Nov 2024",
    quantity: 9,
    walletBalance: "$4,850",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-125",
    customer: {
      img: "/images/user-14.jpg",
      name: "Thomas Wilson",
    },
    email: "wildon@trezo.com",
    total: "$4,800",
    issuedDate: "18 Nov 2024",
    quantity: 5,
    walletBalance: "$2,300",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-579",
    customer: {
      img: "/images/user-15.jpg",
      name: "Nathaniel Hulsey",
    },
    email: "hulsey@trezo.com",
    total: "$6,500",
    issuedDate: "19 Nov 2024",
    quantity: 6,
    walletBalance: "$4,560",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-998",
    customer: {
      img: "/images/user-10.jpg",
      name: "Rebecca Block",
    },
    email: "block@trezo.com",
    total: "$6,000",
    issuedDate: "14 Nov 2024",
    quantity: 2,
    walletBalance: "$3,599",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-436",
    customer: {
      img: "/images/user-11.jpg",
      name: "Ramiro McCarty",
    },
    email: "ramiro@trezo.com",
    total: "$9,200",
    issuedDate: "13 Nov 2024",
    quantity: 8,
    walletBalance: "$5,800",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-158",
    customer: {
      img: "/images/user-6.jpg",
      name: "Marcia Baker",
    },
    email: "marcia@trezo.com",
    total: "$5,000",
    issuedDate: "10 Nov 2024",
    quantity: 6,
    walletBalance: "$2,000",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-325",
    customer: {
      img: "/images/user-7.jpg",
      name: "Carolyn Barnes",
    },
    email: "barnes@trezo.com",
    total: "$8,750",
    issuedDate: "11 Nov 2024",
    quantity: 10,
    walletBalance: "$4,500",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-286",
    customer: {
      img: "/images/user-8.jpg",
      name: "Donna Miller",
    },
    email: "donna@trezo.com",
    total: "$3,200",
    issuedDate: "12 Nov 2024",
    quantity: 6,
    walletBalance: "$1,550",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-463",
    customer: {
      img: "/images/user-9.jpg",
      name: "Barbara Cross",
    },
    email: "cross@trezo.com",
    total: "$3,750",
    issuedDate: "13 Nov 2024",
    quantity: 4,
    walletBalance: "$2,490",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-860",
    customer: {
      img: "/images/user-12.jpg",
      name: "Robert Fairweather",
    },
    email: "robert@trezo.com",
    total: "$2,500",
    issuedDate: "12 Nov 2024",
    quantity: 6,
    walletBalance: "$1,200",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-491",
    customer: {
      img: "/images/user-13.jpg",
      name: "Marcelino Haddock",
    },
    email: "haddock@trezo.com",
    total: "$7,300",
    issuedDate: "17 Nov 2024",
    quantity: 9,
    walletBalance: "$4,850",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-125",
    customer: {
      img: "/images/user-14.jpg",
      name: "Thomas Wilson",
    },
    email: "wildon@trezo.com",
    total: "$4,800",
    issuedDate: "18 Nov 2024",
    quantity: 5,
    walletBalance: "$2,300",
    viewLink: "/invoices/details",
  },
  {
    invoiceID: "#JAN-579",
    customer: {
      img: "/images/user-15.jpg",
      name: "Nathaniel Hulsey",
    },
    email: "hulsey@trezo.com",
    total: "$6,500",
    issuedDate: "19 Nov 2024",
    quantity: 6,
    walletBalance: "$4,560",
    viewLink: "/invoices/details",
  },
];

const InvoiceTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 10;

  // Filter invoices based on search query
  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.invoiceID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = filteredInvoices.slice(
    indexOfFirstInvoice,
    indexOfLastInvoice
  );

  const totalPages = Math.ceil(filteredInvoices.length / invoicesPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <Form className="position-relative table-src-form">
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={handleSearchChange}
              />

              <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                search
              </span>
            </Form>

            <Form.Select
              className="month-select form-control"
              aria-label="Default select example"
            >
              <option value="0">Select</option>
              <option value="1">Today</option>
              <option value="2">Weekly</option>
              <option value="3">Monthly</option>
              <option value="4">Yearly</option>
            </Form.Select>
          </div>

          <div className="default-table-area all-products">
            <div className="table-responsive">
              <Table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">Invoice ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Email</th>
                    <th scope="col">Issued Date</th>
                    <th scope="col">Total</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Wallet Balance</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentInvoices.map((invoice, index) => (
                    <tr key={index}>
                      <td>{invoice.invoiceID}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={invoice.customer.img}
                            className="wh-40"
                            alt="user"
                            width={40}
                            height={40}
                            style={{ borderRadius: "100%" }}
                          />
                          <div className="ms-2 ps-1">
                            <h6 className="fw-medium fs-14 m-0">
                              {invoice.customer.name}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>{invoice.email}</td>
                      <td>{invoice.issuedDate}</td>
                      <td>{invoice.total}</td>
                      <td>{invoice.quantity}</td>
                      <td>{invoice.walletBalance}</td>
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <Link to={invoice.viewLink}>
                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <span className="material-symbols-outlined fs-16 text-primary">
                                visibility
                              </span>
                            </button>
                          </Link>

                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined fs-16 text-body">
                              print
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

            <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
              <span className="fs-12 fw-medium">
                Showing {indexOfFirstInvoice + 1} to{" "}
                {Math.min(indexOfLastInvoice, filteredInvoices.length)} of{" "}
                {filteredInvoices.length} Results
              </span>

              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0 justify-content-center">
                  <li className="page-item">
                    <button
                      className="page-link icon"
                      onClick={() =>
                        currentPage > 1 && handlePageChange(currentPage - 1)
                      }
                    >
                      <span className="material-symbols-outlined">
                        keyboard_arrow_left
                      </span>
                    </button>
                  </li>
                  {Array.from({ length: totalPages }).map((_, idx) => (
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
                  <li className="page-item">
                    <button
                      className="page-link icon"
                      onClick={() =>
                        currentPage < totalPages &&
                        handlePageChange(currentPage + 1)
                      }
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

export default InvoiceTable;
