"use client";

import { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const productsData = [
  {
    id: "#JAN-999",
    img: "/images/product-1.jpg",
    title: "Smart Band",
    detailsLink: "/ecommerce/product-details",
    date: "08 Jun 2024",
    category: "Watch",
    price: "$35.00",
    order: 75,
    stock: "750",
    amount: "$2,625",
    rating: "5.00 (141 reviews)",
    status: "published",
  },
  {
    id: "#JAN-998",
    img: "/images/product-2.jpg",
    title: "Headphone",
    detailsLink: "/ecommerce/product-details",
    date: "07 Jun 2024",
    category: "Electronics",
    price: "$49.00",
    order: 25,
    stock: "825",
    amount: "$1,225",
    rating: "5.00 (69 reviews)",
    status: "draft",
  },
  {
    id: "#JAN-997",
    img: "/images/product-3.jpg",
    title: "iPhone 15 Plus",
    detailsLink: "/ecommerce/product-details",
    date: "06 Jun 2024",
    category: "Apple",
    price: "$99.00",
    order: 55,
    stock: "Stock Out",
    amount: "$5,445",
    rating: "5.00 (99 reviews)",
    status: "published",
  },
  {
    id: "#JAN-996",
    img: "/images/product-4.jpg",
    title: "Bluetooth Speaker",
    detailsLink: "/ecommerce/product-details",
    date: "05 Jun 2024",
    category: "Google",
    price: "$59.00",
    order: 40,
    stock: "535",
    amount: "$2,360",
    rating: "4.00 (75 reviews)",
    status: "published",
  },
  {
    id: "#JAN-999",
    img: "/images/product-1.jpg",
    title: "Smart Band",
    detailsLink: "/ecommerce/product-details",
    date: "08 Jun 2024",
    category: "Watch",
    price: "$35.00",
    order: 75,
    stock: "750",
    amount: "$2,625",
    rating: "5.00 (141 reviews)",
    status: "published",
  },
  {
    id: "#JAN-998",
    img: "/images/product-2.jpg",
    title: "Headphone",
    detailsLink: "/ecommerce/product-details",
    date: "07 Jun 2024",
    category: "Electronics",
    price: "$49.00",
    order: 25,
    stock: "825",
    amount: "$1,225",
    rating: "5.00 (69 reviews)",
    status: "draft",
  },
  {
    id: "#JAN-995",
    img: "/images/product-5.jpg",
    title: "Airbuds 2nd Gen",
    detailsLink: "/ecommerce/product-details",
    date: "04 Jun 2024",
    category: "Headphone",
    price: "$79.00",
    order: 56,
    stock: "460",
    amount: "$4,424",
    rating: "5.00 (158 reviews)",
    status: "draft",
  },
  {
    id: "#JAN-997",
    img: "/images/product-3.jpg",
    title: "iPhone 15 Plus",
    detailsLink: "/ecommerce/product-details",
    date: "06 Jun 2024",
    category: "Apple",
    price: "$99.00",
    order: 55,
    stock: "Stock Out",
    amount: "$5,445",
    rating: "5.00 (99 reviews)",
    status: "published",
  },
  {
    id: "#JAN-996",
    img: "/images/product-4.jpg",
    title: "Bluetooth Speaker",
    detailsLink: "/ecommerce/product-details",
    date: "05 Jun 2024",
    category: "Google",
    price: "$59.00",
    order: 40,
    stock: "535",
    amount: "$2,360",
    rating: "4.00 (75 reviews)",
    status: "published",
  },
  {
    id: "#JAN-995",
    img: "/images/product-5.jpg",
    title: "Airbuds 2nd Gen",
    detailsLink: "/ecommerce/product-details",
    date: "04 Jun 2024",
    category: "Headphone",
    price: "$79.00",
    order: 56,
    stock: "460",
    amount: "$4,424",
    rating: "5.00 (158 reviews)",
    status: "draft",
  },
  {
    id: "#JAN-998",
    img: "/images/product-2.jpg",
    title: "Headphone",
    detailsLink: "/ecommerce/product-details",
    date: "07 Jun 2024",
    category: "Electronics",
    price: "$49.00",
    order: 25,
    stock: "825",
    amount: "$1,225",
    rating: "5.00 (69 reviews)",
    status: "draft",
  },
  {
    id: "#JAN-999",
    img: "/images/product-1.jpg",
    title: "Smart Band",
    detailsLink: "/ecommerce/product-details",
    date: "08 Jun 2024",
    category: "Watch",
    price: "$35.00",
    order: 75,
    stock: "750",
    amount: "$2,625",
    rating: "5.00 (141 reviews)",
    status: "published",
  },
  {
    id: "#JAN-995",
    img: "/images/product-5.jpg",
    title: "Airbuds 2nd Gen",
    detailsLink: "/ecommerce/product-details",
    date: "04 Jun 2024",
    category: "Headphone",
    price: "$79.00",
    order: 56,
    stock: "460",
    amount: "$4,424",
    rating: "5.00 (158 reviews)",
    status: "draft",
  },
  {
    id: "#JAN-996",
    img: "/images/product-4.jpg",
    title: "Bluetooth Speaker",
    detailsLink: "/ecommerce/product-details",
    date: "05 Jun 2024",
    category: "Google",
    price: "$59.00",
    order: 40,
    stock: "535",
    amount: "$2,360",
    rating: "4.00 (75 reviews)",
    status: "published",
  },
  {
    id: "#JAN-997",
    img: "/images/product-3.jpg",
    title: "iPhone 15 Plus",
    detailsLink: "/ecommerce/product-details",
    date: "06 Jun 2024",
    category: "Apple",
    price: "$99.00",
    order: 55,
    stock: "Stock Out",
    amount: "$5,445",
    rating: "5.00 (99 reviews)",
    status: "published",
  },
  {
    id: "#JAN-995",
    img: "/images/product-5.jpg",
    title: "Airbuds 2nd Gen",
    detailsLink: "/ecommerce/product-details",
    date: "04 Jun 2024",
    category: "Headphone",
    price: "$79.00",
    order: 56,
    stock: "460",
    amount: "$4,424",
    rating: "5.00 (158 reviews)",
    status: "draft",
  },
];

const AllProducts = () => {
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term
  const filteredProducts = productsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages for filtered data
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Slice data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-lg-4 mb-3">
        <Form className="position-relative table-src-form me-0">
          <Form.Control
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
            search
          </span>
        </Form>

        <Link
          to="/ecommerce/create-product"
          className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
        >
          <span className="py-sm-1 d-block">
            <i className="ri-add-line d-none d-sm-inline-block fs-18"></i>
            <span>Add New Product</span>
          </span>
        </Link>
      </div>

      <div className="default-table-area all-products">
        <div className="table-responsive">
          <Table className="align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Product</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Order</th>
                <th scope="col">Stock</th>
                <th scope="col">Amount</th>
                <th scope="col">Rating</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>

                  <td>
                    <Link
                      to={item.detailsLink}
                      className="d-flex align-items-center"
                    >
                      <img
                        src={item.img}
                        className="wh-40 rounded-3"
                        alt="product-1"
                        width={40}
                        height={40}
                      />
                      <div className="ms-2 ps-1">
                        <h6 className="fw-medium fs-14">{item.title}</h6>
                        <span className="fs-12 text-body">{item.date}</span>
                      </div>
                    </Link>
                  </td>

                  <td>{item.category}</td>

                  <td>{item.price}</td>

                  <td>{item.order}</td>

                  <td>{item.stock}</td>

                  <td>{item.amount}</td>

                  <td>{item.rating}</td>

                  <td>
                    <span
                      className={`badge bg-opacity-10 p-2 fs-12 fw-medium text-capitalize ${item.status}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <div className="d-flex align-items-center gap-1">
                      <Link to={item.detailsLink}>
                        <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                          <span className="material-symbols-outlined fs-16 text-primary">
                            visibility
                          </span>
                        </button>
                      </Link>

                      <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                        <span className="material-symbols-outlined fs-16 text-body">
                          edit
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
            Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
            {totalItems} Results
          </span>

          <nav aria-label="Page navigation example">
            <ul className="pagination mb-0 justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
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
              {[...Array(totalPages)].map((_, index) => (
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
    </>
  );
};

export default AllProducts;
