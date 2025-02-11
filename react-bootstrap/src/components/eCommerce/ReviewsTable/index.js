"use client";

import React, { useState } from "react";
import { Card, Table, Form } from "react-bootstrap";

const reviewsData = [
  {
    id: 1,
    reviewerName: "Olivia Clark",
    reviewerEmail: "olivia@trezo.com",
    reviewerImage: "/images/user-6.jpg",
    rating: 5,
    reviewText: "Great product, highly recommend!",
    productName: "Smart Band",
    productImage: "/images/product-1.jpg",
    date: "17 Dec 2024",
    time: "08:30 PM",
    status: "Pending",
  },
  {
    id: 2,
    reviewerName: "Zephyr Zing",
    reviewerEmail: "zephyr@trezo.com",
    reviewerImage: "/images/user-7.jpg",
    rating: 4,
    reviewText: "The product quality is satisfactory.",
    productName: "Headphone",
    productImage: "/images/product-2.jpg",
    date: "17 Dec 2024",
    time: "08:30 PM",
    status: "Approved",
  },
  {
    id: 3,
    reviewerName: "Nova Nectar",
    reviewerEmail: "nova@trezo.com",
    reviewerImage: "/images/user-8.jpg",
    rating: 3,
    reviewText: "Could be better.",
    productName: "iPhone 15 Plus",
    productImage: "/images/product-3.jpg",
    date: "17 Dec 2024",
    time: "08:30 PM",
    status: "Rejected",
  },
  {
    id: 4,
    reviewerName: "Olivia Clark",
    reviewerEmail: "olivia@trezo.com",
    reviewerImage: "/images/user-7.jpg",
    rating: 5,
    reviewText: "Great product, highly recommend!",
    productName: "Smart Band",
    productImage: "/images/product-1.jpg",
    date: "17 Dec 2024",
    time: "08:30 PM",
    status: "Pending",
  },
  {
    id: 5,
    reviewerName: "Zephyr Zing",
    reviewerEmail: "zephyr@trezo.com",
    reviewerImage: "/images/user-8.jpg",
    rating: 4,
    reviewText: "The product quality is satisfactory.",
    productName: "Headphone",
    productImage: "/images/product-2.jpg",
    date: "17 Dec 2024",
    time: "08:30 PM",
    status: "Approved",
  },
  {
    id: 6,
    reviewerName: "Nova Nectar",
    reviewerEmail: "nova@trezo.com",
    reviewerImage: "/images/user-9.jpg",
    rating: 3,
    reviewText: "Could be better.",
    productName: "iPhone 15 Plus",
    productImage: "/images/product-3.jpg",
    date: "17 Dec 2024",
    time: "08:30 PM",
    status: "Rejected",
  },
];

const ReviewsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtered reviews based on the search query
  const filteredReviews = reviewsData.filter(
    (review) =>
      review.reviewerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredReviews.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Paginated reviews
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentReviews = filteredReviews.slice(
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
                  setCurrentPage(1); // Reset to page 1 when search query changes
                }}
              />

              <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                search
              </span>
            </Form>

            <Form.Select
              className="month-select form-control"
              aria-label="Default select example"
            >
              <option defaultValue="0">Show All</option>
              <option defaultValue="1">Weekly</option>
              <option defaultValue="2">Monthly</option>
              <option defaultValue="3">Yearly</option>
            </Form.Select>
          </div>

          <div className="default-table-area manage-reviews-table">
            <div className="table-responsive">
              <Table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">Reviewer</th>
                    <th scope="col">Review</th>
                    <th scope="col">Product</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentReviews.map((review) => (
                    <tr key={review.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={review.reviewerImage}
                            className="wh-40 rounded-circle"
                            alt="user"
                            width={40}
                            height={40}
                          />
                          <div className="ms-2 ps-1">
                            <h6 className="fw-medium fs-14 mb-0">
                              {review.reviewerName}
                            </h6>
                            <span className="text-body">
                              {review.reviewerEmail}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="d-flex align-items-lg-center flex-wrap gap-1 mb-2">
                          {[...Array(review.rating)].map((_, idx) => (
                            <i
                              key={idx}
                              className="ri-star-fill fs-18 text-warning"
                            ></i>
                          ))}
                        </div>
                        <p className="mw-380">{review.reviewText}</p>
                      </td>

                      <td>
                        <div className="d-flex align-items-center text-secondary hover">
                          <img
                            src={review.productImage}
                            className="rounded-3 wh-40"
                            alt="product"
                            width={40}
                            height={40}
                          />
                          <span className="fs-15 fw-medium ms-2">
                            {review.productName}
                          </span>
                        </div>
                      </td>

                      <td>
                        <span className="d-block">{review.date}</span>
                        <span className="d-block">{review.time}</span>
                      </td>

                      <td>
                        <span
                          className={`badge p-2 fs-12 fw-medium text-capitalize ${
                            review.status === "Pending"
                              ? "bg-primary bg-opacity-10 text-primary"
                              : review.status === "Approved"
                              ? "bg-success bg-opacity-10 text-success"
                              : "bg-danger bg-opacity-10 text-danger"
                          }`}
                        >
                          {review.status}
                        </span>
                      </td>

                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined text-primary fs-16">
                              download_done
                            </span>
                          </button>

                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined text-body fs-16">
                              reply
                            </span>
                          </button>

                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined text-danger fs-16">
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

export default ReviewsTable;
