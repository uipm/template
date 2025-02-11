"use client";

import React, { useState } from "react";
import { Card, Form, Table, Button } from "react-bootstrap";

const categoriesData = [
  {
    image: "/images/product-1.jpg",
    name: "Watch",
    totalProducts: 54,
    slug: "watch",
    description: "What is lorem ipsum?",
    status: "active",
  },
  {
    image: "/images/product-2.jpg",
    name: "Headphone",
    totalProducts: 13,
    slug: "headphone",
    description: "Why do we use it?",
    status: "active",
  },
  {
    image: "/images/product-3.jpg",
    name: "Mobile",
    totalProducts: 42,
    slug: "mobile",
    description: "Where does it come from?",
    status: "deactive",
  },
  {
    image: "/images/product-4.jpg",
    name: "Speaker",
    totalProducts: 32,
    slug: "speaker",
    description: "Where can I get some?",
    status: "active",
  },
  {
    image: "/images/product-5.jpg",
    name: "Electronics",
    totalProducts: 100,
    slug: "electronics",
    description: "Contrary to popular belief",
    status: "active",
  },
  {
    image: "/images/product-4.jpg",
    name: "Speaker",
    totalProducts: 32,
    slug: "speaker",
    description: "Where can I get some?",
    status: "active",
  },
  {
    image: "/images/product-5.jpg",
    name: "Electronics",
    totalProducts: 100,
    slug: "electronics",
    description: "Contrary to popular belief",
    status: "active",
  },
  {
    image: "/images/product-1.jpg",
    name: "Watch",
    totalProducts: 54,
    slug: "watch",
    description: "What is lorem ipsum?",
    status: "active",
  },
  {
    image: "/images/product-2.jpg",
    name: "Headphone",
    totalProducts: 13,
    slug: "headphone",
    description: "Why do we use it?",
    status: "active",
  },
  {
    image: "/images/product-3.jpg",
    name: "Mobile",
    totalProducts: 42,
    slug: "mobile",
    description: "Where does it come from?",
    status: "deactive",
  },
];

const CategoriesTable = () => {
  const itemsPerPage = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  // Filter categories based on the search query
  const filteredCategories = categoriesData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredCategories.length; // Total filtered items
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Total pages

  // Calculate items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredCategories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Modal
  const [isShowModal, setShowModal] = useState("false");
  const handleToggleShowModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-lg-4 mb-3">
            <Form className="position-relative table-src-form me-0">
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to the first page on search
                }}
              />

              <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                search
              </span>
            </Form>

            <button
              className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
              onClick={handleToggleShowModal}
            >
              <span className="py-sm-1 d-block">
                <i className="ri-add-line d-none d-sm-inline-block fs-18"></i>
                <span>Add New Categorie</span>
              </span>
            </button>
          </div>

          <div className="default-table-area ec-recent-orders">
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
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Total Products</th>
                    <th scope="col">Slug</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Form>
                          <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            label=""
                          />
                        </Form>
                      </td>

                      <td>
                        <img
                          src={item.image}
                          className="wh-40 rounded-100"
                          alt="product-1"
                          width={40}
                          height={40}
                        />
                      </td>

                      <td>{item.name}</td>

                      <td>{item.totalProducts}</td>

                      <td>{item.slug}</td>

                      <td>{item.description}</td>

                      <td>
                        <span
                          className={`badge bg-opacity-10 p-2 fs-12 fw-medium text-capitalize ${item.status}`}
                        >
                          {item.status}
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

            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="fs-13">
                Showing {startIndex + 1} to{" "}
                {Math.min(startIndex + itemsPerPage, totalItems)} of{" "}
                {totalItems} results
              </span>

              <nav>
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
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
          </div>
        </Card.Body>
      </Card>

      {/* Modal */}
      <div className={`custom-modal right ${isShowModal ? "" : "show"}`}>
        <div className="custom-modal-content position-relative z-3">
          <div className="border-bottom py-3 px-4 d-flex align-items-center justify-content-between">
            <h3 className="fs-18 mb-0"> Add New Categorie</h3>

            <div className="close-link" onClick={handleToggleShowModal}>
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>

          <div className="p-4">
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="label">Image</Form.Label>
                <Form.Control type="file" className="text-dark" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Name</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Total Products</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Total Products"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Slug</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Slug"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  className="text-dark"
                  placeholder="Description"
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Status</Form.Label>
                <Form.Select
                  className="form-control text-dark"
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option defaultValue="0">Active</option>
                  <option defaultValue="1">Deactive</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="d-flex gap-3">
                <Button
                  variant="primary"
                  type="submit"
                  className="text-white fw-semibold py-2 px-2 px-sm-3"
                >
                  <span className="py-sm-1 d-block">
                    <i className="ri-add-line text-white"></i>{" "}
                    <span>Create New Categorie</span>
                  </span>
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesTable;
