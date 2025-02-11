"use client";

import { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";

const contactsData = [
  {
    id: "#800",
    user: {
      img: "/images/user-6.jpg",
      name: "Oliver Khan",
    },
    email: "oliver@trezo.com",
    phone: "+1 555-123-4567",
    lastContacted: "19 Jun 2024",
    company: "ABC Corporation",
    leadScore: 50,
    status: "active",
  },
  {
    id: "#801",
    user: {
      img: "/images/user-7.jpg",
      name: "Carolyn Barnes",
    },
    email: "carolyn@trezo.com",
    phone: "+1 555-987-6543",
    lastContacted: "18 Jun 2024",
    company: "XYZ Ltd",
    leadScore: 35,
    status: "active",
  },
  {
    id: "#802",
    user: {
      img: "/images/user-8.jpg",
      name: "Donna Miller",
    },
    email: "donna@trezo.com",
    phone: "+1 555-456-7890",
    lastContacted: "17 Jun 2024",
    company: "Tech Solutions",
    leadScore: 40,
    status: "deactive",
  },
  {
    id: "#803",
    user: {
      img: "/images/user-9.jpg",
      name: "Barbara Cross",
    },
    email: "barbara@trezo.com",
    phone: "+1 555-369-7878",
    lastContacted: "16 Jun 2024",
    company: "Global Solutions",
    leadScore: 25,
    status: "active",
  },
  {
    id: "#804",
    user: {
      img: "/images/user-10.jpg",
      name: "Rebecca Block",
    },
    email: "rebecca@trezo.com",
    phone: "+1 555-658-4488",
    lastContacted: "15 Jun 2024",
    company: "Acma Industries",
    leadScore: 27,
    status: "deactive",
  },
  {
    id: "#805",
    user: {
      img: "/images/user-11.jpg",
      name: "Ramiro McCarty",
    },
    email: "ramiro@trezo.com",
    phone: "+1 555-558-9966",
    lastContacted: "14 Jun 2024",
    company: "Synergy Ltd",
    leadScore: 16,
    status: "active",
  },
  {
    id: "#806",
    user: {
      img: "/images/user-12.jpg",
      name: "Robert Fairweather",
    },
    email: "robert@trezo.com",
    phone: "+1 555-357-5888",
    lastContacted: "13 Jun 2024",
    company: "Summit Solutions",
    leadScore: 38,
    status: "active",
  },
  {
    id: "#807",
    user: {
      img: "/images/user-13.jpg",
      name: "Marcelino Haddock",
    },
    email: "marcelino@trezo.com",
    phone: "+1 555-456-8877",
    lastContacted: "12 Jun 2024",
    company: "Strategies Ltd",
    leadScore: 15,
    status: "active",
  },
  {
    id: "#808",
    user: {
      img: "/images/user-14.jpg",
      name: "Thomas Wilson",
    },
    email: "thomas@trezo.com",
    phone: "+1 555-622-4488",
    lastContacted: "11 Jun 2024",
    company: "Tech Enterprises",
    leadScore: 41,
    status: "deactive",
  },
  {
    id: "#809",
    user: {
      img: "/images/user-15.jpg",
      name: "Nathaniel Hulsey",
    },
    email: "nathaniel@trezo.com",
    phone: "+1 555-225-4488",
    lastContacted: "10 Jun 2024",
    company: "Synetic Solutions",
    leadScore: 29,
    status: "active",
  },
  {
    id: "#810",
    user: {
      img: "/images/user-8.jpg",
      name: "Donna Miller",
    },
    email: "donna@trezo.com",
    phone: "+1 555-456-7890",
    lastContacted: "17 Jun 2024",
    company: "Tech Solutions",
    leadScore: 40,
    status: "deactive",
  },
  {
    id: "#811",
    user: {
      img: "/images/user-6.jpg",
      name: "Oliver Khan",
    },
    email: "oliver@trezo.com",
    phone: "+1 555-123-4567",
    lastContacted: "19 Jun 2024",
    company: "ABC Corporation",
    leadScore: 50,
    status: "active",
  },
  {
    id: "#812",
    user: {
      img: "/images/user-7.jpg",
      name: "Carolyn Barnes",
    },
    email: "carolyn@trezo.com",
    phone: "+1 555-987-6543",
    lastContacted: "18 Jun 2024",
    company: "XYZ Ltd",
    leadScore: 35,
    status: "active",
  },
  {
    id: "#813",
    user: {
      img: "/images/user-10.jpg",
      name: "Rebecca Block",
    },
    email: "rebecca@trezo.com",
    phone: "+1 555-658-4488",
    lastContacted: "15 Jun 2024",
    company: "Acma Industries",
    leadScore: 27,
    status: "deactive",
  },
  {
    id: "#814",
    user: {
      img: "/images/user-11.jpg",
      name: "Ramiro McCarty",
    },
    email: "ramiro@trezo.com",
    phone: "+1 555-558-9966",
    lastContacted: "14 Jun 2024",
    company: "Synergy Ltd",
    leadScore: 16,
    status: "active",
  },
  {
    id: "#815",
    user: {
      img: "/images/user-9.jpg",
      name: "Barbara Cross",
    },
    email: "barbara@trezo.com",
    phone: "+1 555-369-7878",
    lastContacted: "16 Jun 2024",
    company: "Global Solutions",
    leadScore: 25,
    status: "active",
  },
  {
    id: "#816",
    user: {
      img: "/images/user-12.jpg",
      name: "Robert Fairweather",
    },
    email: "robert@trezo.com",
    phone: "+1 555-357-5888",
    lastContacted: "13 Jun 2024",
    company: "Summit Solutions",
    leadScore: 38,
    status: "active",
  },
  {
    id: "#817",
    user: {
      img: "/images/user-14.jpg",
      name: "Thomas Wilson",
    },
    email: "thomas@trezo.com",
    phone: "+1 555-622-4488",
    lastContacted: "11 Jun 2024",
    company: "Tech Enterprises",
    leadScore: 41,
    status: "deactive",
  },
  {
    id: "#818",
    user: {
      img: "/images/user-15.jpg",
      name: "Nathaniel Hulsey",
    },
    email: "nathaniel@trezo.com",
    phone: "+1 555-225-4488",
    lastContacted: "10 Jun 2024",
    company: "Synetic Solutions",
    leadScore: 29,
    status: "active",
  },
  {
    id: "#819",
    user: {
      img: "/images/user-13.jpg",
      name: "Marcelino Haddock",
    },
    email: "marcelino@trezo.com",
    phone: "+1 555-456-8877",
    lastContacted: "12 Jun 2024",
    company: "Strategies Ltd",
    leadScore: 15,
    status: "active",
  },
];

const ITEMS_PER_PAGE = 10;

const ContactsTable = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data based on the search query
  const filteredData = contactsData.filter(
    (contact) =>
      contact.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Calculate the items to display for the current page
  const currentItems = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4">
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

            <div className="text-end">
              <Form.Select
                className="month-select form-control"
                aria-label="Default select example"
              >
                <option defaultValue="0">All</option>
                <option defaultValue="1">Active</option>
                <option defaultValue="2">Deactive</option>
              </Form.Select>
            </div>
          </div>

          <div className="default-table-area style-two default-table-width">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox"
                          label="ID"
                        />
                      </Form>
                    </th>
                    <th scope="col">User</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Last Contacted</th>
                    <th scope="col">Company</th>
                    <th scope="col">Lead Score</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentItems.map((value, i) => (
                    <tr key={i}>
                      <td className="text-body">
                        <Form>
                          <Form.Check
                            type="checkbox"
                            id={value.id}
                            label={value.id}
                          />
                        </Form>
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src={value.user.img}
                              className="wh-34 rounded-circle"
                              alt="user"
                              width={34}
                              height={34}
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 position-relative top-1">
                            <h6 className="mb-0 fs-14 fw-medium">
                              {value.user.name}
                            </h6>
                          </div>
                        </div>
                      </td>

                      <td className="text-body">{value.email}</td>

                      <td>{value.phone}</td>

                      <td className="text-body">{value.lastContacted}</td>

                      <td className="text-body">{value.company}</td>

                      <td className="text-body">{value.leadScore}</td>

                      <td>
                        <span
                          className={`badge bg-opacity-10 p-2 fs-12 fw-medium text-capitalize ${value.status}`}
                        >
                          {value.status}
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

              <div className="p-4">
                <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
                  <span className="fs-12 fw-medium">
                    Showing{" "}
                    {Math.min(
                      (currentPage - 1) * ITEMS_PER_PAGE + 1,
                      contactsData.length
                    )}{" "}
                    -{" "}
                    {Math.min(
                      currentPage * ITEMS_PER_PAGE,
                      contactsData.length
                    )}{" "}
                    of {contactsData.length} Results
                  </span>

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
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ContactsTable;
