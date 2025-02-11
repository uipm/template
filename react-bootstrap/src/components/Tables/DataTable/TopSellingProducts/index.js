"use client";

import React, { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const topSellingProductsData = [
  {
    id: '1',
    product: {
      img: "/images/product-1.jpg",
      title: "Smart Band",
      detailsLink: "/ecommerce/product-details",
      date: "08 Jun 2024",
    },
    price: "$35.00",
    order: 75,
    stock: "750",
    amount: "$2,625",
  },
  {
    id: '2',
    product: {
      img: "/images/product-2.jpg",
      title: "Headphone",
      detailsLink: "/ecommerce/product-details",
      date: "07 Jun 2024",
    },
    price: "$49.00",
    order: 25,
    stock: "825",
    amount: "$1,225",
  },
  {
    id: '3',
    product: {
      img: "/images/product-3.jpg",
      title: "iPhone 15 Plus",
      detailsLink: "/ecommerce/product-details",
      date: "06 Jun 2024",
    },
    price: "$99.00",
    order: 55,
    stock: "Stock Out",
    amount: "$5,445",
  },
  {
    id: '4',
    product: {
      img: "/images/product-4.jpg",
      title: "Bluetooth Speaker",
      detailsLink: "/ecommerce/product-details",
      date: "05 Jun 2024",
    },
    price: "$59.00",
    order: 40,
    stock: "535",
    amount: "$2,360",
  },
  {
    id: '5',
    product: {
      img: "/images/product-5.jpg",
      title: "Airbuds 2nd Gen",
      detailsLink: "/ecommerce/product-details",
      date: "04 Jun 2024",
    },
    price: "$79.00",
    order: 56,
    stock: "460",
    amount: "$4,424",
  },
  {
    id: '6',
    product: {
      img: "/images/product-3.jpg",
      title: "iPhone 15 Plus",
      detailsLink: "/ecommerce/product-details",
      date: "06 Jun 2024",
    },
    price: "$99.00",
    order: 55,
    stock: "Stock Out",
    amount: "$5,445",
  },
  {
    id: '7',
    product: {
      img: "/images/product-1.jpg",
      title: "Smart Band",
      detailsLink: "/ecommerce/product-details",
      date: "08 Jun 2024",
    },
    price: "$35.00",
    order: 75,
    stock: "750",
    amount: "$2,625",
  },
  {
    id: '8',
    product: {
      img: "/images/product-2.jpg",
      title: "Headphone",
      detailsLink: "/ecommerce/product-details",
      date: "07 Jun 2024",
    },
    price: "$49.00",
    order: 25,
    stock: "825",
    amount: "$1,225",
  },
  {
    id: '9',
    product: {
      img: "/images/product-4.jpg",
      title: "Bluetooth Speaker",
      detailsLink: "/ecommerce/product-details",
      date: "05 Jun 2024",
    },
    price: "$59.00",
    order: 40,
    stock: "535",
    amount: "$2,360",
  },
  {
    id: '10',
    product: {
      img: "/images/product-5.jpg",
      title: "Airbuds 2nd Gen",
      detailsLink: "/ecommerce/product-details",
      date: "04 Jun 2024",
    },
    price: "$79.00",
    order: 56,
    stock: "460",
    amount: "$4,424",
  },
];

const TopSellingProducts = () => {
  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Total Pages
  const totalItems = topSellingProductsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Paginated Data
  const paginatedData = topSellingProductsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
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
            <h3 className="mb-0">Top Selling Products</h3>
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

          <div className="default-table-area top-selling-products">
            <div className="table-responsive">
              <Table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Order</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((value, i) => (
                    <tr key={i}>
                      <td>
                        <Link
                          to={value.product.detailsLink}
                          className="d-flex align-items-center"
                        >
                          <img
                            src={value.product.img}
                            className="wh-40 rounded-3"
                            alt="product-1"
                            width={40}
                            height={40}
                          />
                          <div className="ms-2 ps-1">
                            <h6 className="fw-medium fs-14">
                              {value.product.title}
                            </h6>
                            <span className="fs-12 text-body">
                              {value.product.date}
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td>{value.price}</td>
                      <td>{value.order}</td>
                      <td>{value.stock}</td>
                      <td>{value.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
              <span className="fs-12 fw-medium">
                Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
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

export default TopSellingProducts;
