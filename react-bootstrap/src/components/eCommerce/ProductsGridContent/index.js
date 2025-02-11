"use client";

import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const productsData = [
  {
    id: 1,
    name: 'Apple MacBook Pro 16.2" with M3 Pro Chip',
    price: 3479,
    originalPrice: 3599,
    image: "/images/product-6.jpg",
    rating: 5,
    link: "/ecommerce/product-details",
  },
  {
    id: 2,
    name: "SAMSUNG Galaxy Tab A9+ Tablet 11”",
    price: 549,
    originalPrice: 649,
    image: "/images/product-7.jpg",
    rating: 4.5,
    link: "/ecommerce/product-details",
  },
  {
    id: 3,
    name: "Apple iPhone 15 Pro Max (512 GB)",
    price: 1479,
    originalPrice: 1599,
    image: "/images/product-8.jpg",
    rating: 4,
    link: "/ecommerce/product-details",
  },
  {
    id: 4,
    name: "Gildan Men's Crew T-Shirts, Multipack",
    price: 79,
    originalPrice: 89,
    image: "/images/product-9.jpg",
    rating: 5,
    link: "/ecommerce/product-details",
  },
  {
    id: 5,
    name: "Skechers Men's Summits High Range",
    price: 849,
    originalPrice: 999,
    image: "/images/product-10.jpg",
    rating: 3,
    link: "/ecommerce/product-details",
  },
  {
    id: 6,
    name: "Amazfit GTR 3 Smart Watch for Men",
    price: 49,
    originalPrice: 69,
    image: "/images/product-11.jpg",
    rating: 5,
    link: "/ecommerce/product-details",
  },
  {
    id: 7,
    name: "SOJOS Small Round Polarized Sunglasses",
    price: 39,
    originalPrice: 49,
    image: "/images/product-12.jpg",
    rating: 4.5,
    link: "/ecommerce/product-details",
  },
  {
    id: 8,
    name: "Nautical Clock Ship Table Clock Brass Desk",
    price: 25,
    originalPrice: 39,
    image: "/images/product-13.jpg",
    rating: 4,
    link: "/ecommerce/product-details",
  },
  {
    id: 9,
    name: "Carhartt, Durable, Adjustable Crossbody Bag",
    price: 149,
    originalPrice: 299,
    image: "/images/product-14.jpg",
    rating: 5,
    link: "/ecommerce/product-details",
  },
];

const ProductsGridContent = () => {
  const itemsPerPage = 6; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter] = useState("0");

  // Filter and search products
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "0" ||
      product.name.toLowerCase().includes(selectedFilter.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on search
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-sm-flex justify-content-between align-items-center flex-wrap gap-2">
            <h4 className="fs-16 fw-medium mb-2 mb-sm-0">Filter</h4>

            <Form className="default-src-form">
              <div className="d-sm-flex flex-wrap gap-3">
                <div className="position-relative mb-2 mb-sm-0">
                  <Form.Control
                    type="text"
                    className="rounded-3"
                    placeholder="Search here"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />

                  <span className="material-symbols-outlined fs-18 position-absolute top-50 start-0 translate-middle-y">
                    search
                  </span>
                </div>

                <div>
                  <Form.Select
                    className="form-control rounded-1 py-0 fs-14 ps-3 bg-transparent pe-5"
                    aria-label="Default select example"
                  >
                    <option defaultValue="0">Default Shorting</option>
                    <option defaultValue="1">Apple</option>
                    <option defaultValue="2">SAMSUNG</option>
                    <option defaultValue="3">T-Shirts</option>
                  </Form.Select>
                </div>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>

      <Row className="justify-content-center">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Col sm={6} lg={4} key={product.id}>
              <div className="mb-4 transition-y">
                <div className="position-relative mb-3">
                  <Link to={product.link}>
                    <img
                      src={product.image}
                      className="rounded-3"
                      alt={product.name}
                      width={1070}
                      height={1070}
                    />
                  </Link>

                  <button
                    type="button"
                    className="bg-body-bg bg-for-dark-mode pt-2 ps-2 position-absolute bottom-0 end-0 rounded-3 rounded-bottom-0 rounded-end-0 border-0"
                  >
                    <span className="material-symbols-outlined fs-24 wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3">
                      shopping_cart
                    </span>
                  </button>
                </div>

                <Link
                  to={product.link}
                  className="text-secondary text-decoration-none fs-16 hover d-block mb-4"
                >
                  {product.name}
                </Link>

                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="fs-20 mb-0">
                    ${product.price}{" "}
                    <del className="fs-16 fw-normal text-body">
                      ${product.originalPrice}
                    </del>
                  </h2>

                  <div className="d-flex flex-wrap gap-1">
                    {[...Array(5)].map((_, index) => {
                      if (index < Math.floor(product.rating)) {
                        return (
                          <i
                            key={index}
                            className="ri-star-fill fs-16 text-warning"
                          ></i>
                        );
                      }
                      if (
                        product.rating % 1 !== 0 &&
                        index === Math.floor(product.rating)
                      ) {
                        return (
                          <i
                            key={index}
                            className="ri-star-half-fill fs-16 text-warning"
                          ></i>
                        );
                      }
                      return (
                        <i
                          key={index}
                          className="ri-star-line fs-16 text-warning"
                        ></i>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <Col sm={12}>
            <p className="text-center mb-4">No products found.</p>
          </Col>
        )}

        <Col sm={12} lg={12}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
                <span className="fs-12 fw-medium">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(endIndex, totalProducts)} of {totalProducts} Results
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
                        <span className="material-symbols-outlined fs-24">
                          keyboard_arrow_left
                        </span>
                      </button>
                    </li>
                    {[...Array(totalPages)].map((_, pageIndex) => (
                      <li key={pageIndex} className="page-item">
                        <button
                          className={`page-link ${
                            currentPage === pageIndex + 1 ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(pageIndex + 1)}
                        >
                          {pageIndex + 1}
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
                        <span className="material-symbols-outlined fs-24">
                          keyboard_arrow_right
                        </span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductsGridContent;
