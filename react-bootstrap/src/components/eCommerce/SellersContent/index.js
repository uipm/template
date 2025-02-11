"use client";

import React, { useState } from "react";
import { Row, Col, Dropdown, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const sellersData = [
  {
    id: 1,
    name: "Ava Turner",
    email: "turner@trezo.com",
    image: "/images/seller-1.png",
    lastSaleDate: "25 Nov 2024",
    itemStock: 50,
    walletBalance: "$9,999.50",
    revenue: "$5,999.50",
    store: "TechMaster Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 2,
    name: "Ethan Parker",
    email: "ethan@trezo.com",
    image: "/images/seller-2.png",
    lastSaleDate: "1 Nov 2024",
    itemStock: 39,
    walletBalance: "$6,756.50",
    revenue: "$4,645.50",
    store: "RisionTech Outlet",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 3,
    name: "Isabella Lee",
    email: "isabella@trezo.com",
    image: "/images/seller-3.png",
    lastSaleDate: "30 Sep 2024",
    itemStock: 75,
    walletBalance: "$5,550.00",
    revenue: "$4,350.50",
    store: "ComfotLiving",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 4,
    name: "Thompson Torres",
    email: "thompson@trezo.com",
    image: "/images/seller-4.png",
    lastSaleDate: "02 Aug 2024",
    itemStock: 99,
    walletBalance: "$2,100.50",
    revenue: "$1,500.50",
    store: "SportFit Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 5,
    name: "Lucas Lyon",
    email: "lucas@trezo.com",
    image: "/images/seller-5.png",
    lastSaleDate: "22 July 2024",
    itemStock: 350,
    walletBalance: "$15,250.50",
    revenue: "$10,200.50",
    store: "Velas Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 6,
    name: "Morgan Sturges",
    email: "morgan@trezo.com",
    image: "/images/seller-6.png",
    lastSaleDate: "10 Jun 2024",
    itemStock: 200,
    walletBalance: "$10,500.50",
    revenue: "$5,458.50",
    store: "Herna Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 7,
    name: "Sophia McNeel",
    email: "sophia@trezo.com",
    image: "/images/seller-7.png",
    lastSaleDate: "16 Feb 2024",
    itemStock: 80,
    walletBalance: "$2,580.00",
    revenue: "$1,500.00",
    store: "Dona Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 8,
    name: "Rodriguez Meade",
    email: "rodriguez@trezo.com",
    image: "/images/seller-8.png",
    lastSaleDate: "12 May 2024",
    itemStock: 150,
    walletBalance: "$9,000.00",
    revenue: "$6,000.00",
    store: "Willi Dav Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 9,
    name: "Olivia Taylor",
    email: "olivia@trezo.com",
    image: "/images/seller-9.png",
    lastSaleDate: "10 Apr 2024",
    itemStock: 75,
    walletBalance: "$7,500.50",
    revenue: "$4,500.50",
    store: "Donne Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 10,
    name: "David Smith",
    email: "david@trezo.com",
    image: "/images/seller-10.png",
    lastSaleDate: "03 Dec 2024",
    itemStock: 500,
    walletBalance: "$18,500.00",
    revenue: "$13,200.00",
    store: "RichMaster Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 11,
    name: "Alice Johnson",
    email: "alice@trezo.com",
    image: "/images/seller-11.png",
    lastSaleDate: "23 Mar 2024",
    itemStock: 50,
    walletBalance: "$6,300.50",
    revenue: "$4,000.50",
    store: "Dajon Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 12,
    name: "Emily Brown",
    email: "emily@trezo.com",
    image: "/images/seller-12.png",
    lastSaleDate: "20 Jan 2024",
    itemStock: 99,
    walletBalance: "$3,699.50",
    revenue: "$5,999.50",
    store: "Barbahall Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 13,
    name: "Lucas Lyon",
    email: "lucas@trezo.com",
    image: "/images/seller-5.png",
    lastSaleDate: "22 July 2024",
    itemStock: 350,
    walletBalance: "$15,250.50",
    revenue: "$10,200.50",
    store: "Velas Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 14,
    name: "Morgan Sturges",
    email: "morgan@trezo.com",
    image: "/images/seller-6.png",
    lastSaleDate: "10 Jun 2024",
    itemStock: 200,
    walletBalance: "$10,500.50",
    revenue: "$5,458.50",
    store: "Herna Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 15,
    name: "Sophia McNeel",
    email: "sophia@trezo.com",
    image: "/images/seller-7.png",
    lastSaleDate: "16 Feb 2024",
    itemStock: 80,
    walletBalance: "$2,580.00",
    revenue: "$1,500.00",
    store: "Dona Store",
    viewLink: "/ecommerce/sellers/details",
  },
  {
    id: 16,
    name: "Rodriguez Meade",
    email: "rodriguez@trezo.com",
    image: "/images/seller-8.png",
    lastSaleDate: "12 May 2024",
    itemStock: 150,
    walletBalance: "$9,000.00",
    revenue: "$6,000.00",
    store: "Willi Dav Store",
    viewLink: "/ecommerce/sellers/details",
  },
];

const SellersContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter sellers based on search query
  const filteredSellers = sellersData.filter((seller) =>
    seller.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredSellers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Paginated sellers
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSellers = filteredSellers.slice(
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
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <Form className="position-relative table-src-form me-0">
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to page 1 on search
                }}
              />
              <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                search
              </span>
            </Form>

            <Link
              to="/ecommerce/sellers/create"
              className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
            >
              <span className="py-sm-1 d-block">
                <i className="ri-add-line d-none d-sm-inline-block"></i>
                <span>Add New Seller</span>
              </span>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Row>
        {currentSellers.map((seller) => (
          <Col key={seller.id} sm={6} lg={4} xxl={3}>
            <Card className="bg-white border-0 rounded-3 mb-4">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={seller.image}
                        className="wh-52"
                        alt={seller.name}
                        width={52}
                        height={52}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <Link
                        to={seller.viewLink}
                        className="text-decoration-none text-secondary fw-medium fs-16 mb-1"
                      >
                        {seller.name}
                      </Link>
                      <span className="d-block">{seller.email}</span>
                    </div>
                  </div>

                  <Dropdown className="action-opt ms-2 position-relative top-3">
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic"
                      className="bg-transparent p-0"
                    >
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-white border box-shadow">
                      <Dropdown.Item href="#">
                        <i className="material-symbols-outlined">visibility</i>
                        View
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="material-symbols-outlined">delete</i>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span>Last Sale Date:</span>
                  <span className="text-secondary ms-1">
                    {seller.lastSaleDate}
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Item Stock:</span>
                  <span className="text-secondary ms-1">
                    {seller.itemStock}
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Wallet Balance:</span>
                  <span className="text-secondary ms-1">
                    {seller.walletBalance}
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Revenue:</span>
                  <span className="text-secondary ms-1">{seller.revenue}</span>
                </div>
                <div className="d-flex align-items-center mb-0">
                  <span>Store:</span>
                  <span className="text-secondary ms-1">{seller.store}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="bg-white d-flex justify-content-between align-items-center p-4 mb-4 rounded-3">
        <span className="fs-13">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems}{" "}
          sellers
        </span>

        <nav>
          <ul className="pagination m-0">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                &laquo;
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
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SellersContent;
