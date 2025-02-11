"use client";

import React, { useState } from "react";
import { Card, Form, Table, Button } from "react-bootstrap";

const leadsData = [
  {
    id: "#850",
    customerImg: "/images/user-6.jpg",
    customerName: "Oliver Khan",
    email: "oliver@trezo.com",
    phone: "+1 555-123-4567",
    createdDate: "19 Jun 2024",
    company: "ABC Corporation",
    leadSource: "Organic",
    status: "confirmed",
  },
  {
    id: "#851",
    customerImg: "/images/user-7.jpg",
    customerName: "Carolyn Barnes",
    email: "carolyn@trezo.com",
    phone: "+1 555-987-6543",
    createdDate: "18 Jun 2024",
    company: "XYZ Ltd",
    leadSource: "Social",
    status: "inProgress",
  },
  {
    id: "#852",
    customerImg: "/images/user-8.jpg",
    customerName: "Donna Miller",
    email: "donna@trezo.com",
    phone: "+1 555-456-7890",
    createdDate: "17 Jun 2024",
    company: "Tech Solutions",
    leadSource: "Website",
    status: "pending",
  },
  {
    id: "#853",
    customerImg: "/images/user-9.jpg",
    customerName: "Barbara Cross",
    email: "barbara@trezo.com",
    phone: "+1 555-369-7878",
    createdDate: "16 Jun 2024",
    company: "Global Solutions",
    leadSource: "Paid",
    status: "rejected",
  },
  {
    id: "#854",
    customerImg: "/images/user-10.jpg",
    customerName: "Rebecca Block",
    email: "rebecca@trezo.com",
    phone: "+1 555-658-4488",
    createdDate: "15 Jun 2024",
    company: "Acma Industries",
    leadSource: "Others",
    status: "confirmed",
  },
  {
    id: "#855",
    customerImg: "/images/user-11.jpg",
    customerName: "Ramiro McCarty",
    email: "ramiro@trezo.com",
    phone: "+1 555-558-9966",
    createdDate: "14 Jun 2024",
    company: "Synergy Ltd",
    leadSource: "Facebook",
    status: "inProgress",
  },
  {
    id: "#856",
    customerImg: "/images/user-12.jpg",
    customerName: "Robert Fairweather",
    email: "robert@trezo.com",
    phone: "+1 555-357-5888",
    createdDate: "13 Jun 2024",
    company: "Summit Solutions",
    leadSource: "Instagram",
    status: "pending",
  },
  {
    id: "#857",
    customerImg: "/images/user-13.jpg",
    customerName: "Marcelino Haddock",
    email: "marcelino@trezo.com",
    phone: "+1 555-456-8877",
    createdDate: "12 Jun 2024",
    company: "Strategies Ltd",
    leadSource: "X",
    status: "rejected",
  },
  {
    id: "#858",
    customerImg: "/images/user-14.jpg",
    customerName: "Thomas Wilson",
    email: "thomas@trezo.com",
    phone: "+1 555-622-4488",
    createdDate: "11 Jun 2024",
    company: "Tech Enterprises",
    leadSource: "LinkedIn",
    status: "confirmed",
  },
  {
    id: "#859",
    customerImg: "/images/user-15.jpg",
    customerName: "Nathaniel Hulsey",
    email: "nathaniel@trezo.com",
    phone: "+1 555-225-4488",
    createdDate: "10 Jun 2024",
    company: "Synetic Solutions",
    leadSource: "Pinterest",
    status: "inProgress",
  },
  {
    id: "#860",
    customerImg: "/images/user-18.jpg",
    customerName: "Donna Miller",
    email: "donna@trezo.com",
    phone: "+1 555-456-7890",
    createdDate: "17 Jun 2024",
    company: "Tech Solutions",
    leadSource: "Website",
    status: "pending",
  },
  {
    id: "#861",
    customerImg: "/images/user-16.jpg",
    customerName: "Oliver Khan",
    email: "oliver@trezo.com",
    phone: "+1 555-123-4567",
    createdDate: "19 Jun 2024",
    company: "ABC Corporation",
    leadSource: "Organic",
    status: "confirmed",
  },
  {
    id: "#862",
    customerImg: "/images/user-17.jpg",
    customerName: "Carolyn Barnes",
    email: "carolyn@trezo.com",
    phone: "+1 555-987-6543",
    createdDate: "18 Jun 2024",
    company: "XYZ Ltd",
    leadSource: "Social",
    status: "inProgress",
  },
  {
    id: "#863",
    customerImg: "/images/user-21.jpg",
    customerName: "Ramiro McCarty",
    email: "ramiro@trezo.com",
    phone: "+1 555-558-9966",
    createdDate: "14 Jun 2024",
    company: "Synergy Ltd",
    leadSource: "Facebook",
    status: "inProgress",
  },
  {
    id: "#864",
    customerImg: "/images/user-22.jpg",
    customerName: "Robert Fairweather",
    email: "robert@trezo.com",
    phone: "+1 555-357-5888",
    createdDate: "13 Jun 2024",
    company: "Summit Solutions",
    leadSource: "Instagram",
    status: "pending",
  },
  {
    id: "#865",
    customerImg: "/images/user-19.jpg",
    customerName: "Barbara Cross",
    email: "barbara@trezo.com",
    phone: "+1 555-369-7878",
    createdDate: "16 Jun 2024",
    company: "Global Solutions",
    leadSource: "Paid",
    status: "rejected",
  },
  {
    id: "#866",
    customerImg: "/images/user-20.jpg",
    customerName: "Rebecca Block",
    email: "rebecca@trezo.com",
    phone: "+1 555-658-4488",
    createdDate: "15 Jun 2024",
    company: "Acma Industries",
    leadSource: "Others",
    status: "confirmed",
  },
  {
    id: "#867",
    customerImg: "/images/user-23.jpg",
    customerName: "Marcelino Haddock",
    email: "marcelino@trezo.com",
    phone: "+1 555-456-8877",
    createdDate: "12 Jun 2024",
    company: "Strategies Ltd",
    leadSource: "X",
    status: "rejected",
  },
  {
    id: "#868",
    customerImg: "/images/user-25.jpg",
    customerName: "Nathaniel Hulsey",
    email: "nathaniel@trezo.com",
    phone: "+1 555-225-4488",
    createdDate: "10 Jun 2024",
    company: "Synetic Solutions",
    leadSource: "Pinterest",
    status: "inProgress",
  },
  {
    id: "#869",
    customerImg: "/images/user-24.jpg",
    customerName: "Thomas Wilson",
    email: "thomas@trezo.com",
    phone: "+1 555-622-4488",
    createdDate: "11 Jun 2024",
    company: "Tech Enterprises",
    leadSource: "LinkedIn",
    status: "confirmed",
  },
];

const LeadsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Handle search change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  // Filter leads based on search term
  const filteredLeads = leadsData.filter((lead) => {
    return (
      lead.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm)
    );
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Modal
  const [isShowModal, setShowModal] = useState("false");
  const handleToggleShowModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4">
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

            <div className="text-end">
              <button
                className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                onClick={handleToggleShowModal}
              >
                <span className="py-sm-1 d-block">
                  <i className="ri-add-line"></i>
                  <span>Add New Lead</span>
                </span>
              </button>
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
                    <th scope="col">Customer</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Company</th>
                    <th scope="col">Lead Source</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentLeads.map((lead, i) => (
                    <tr key={i}>
                      <td className="text-body">
                        <Form>
                          <Form.Check
                            type="checkbox"
                            id={lead.id}
                            label={lead.id}
                          />
                        </Form>
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src={lead.customerImg}
                              className="wh-34 rounded-circle"
                              alt="user"
                              width={34}
                              height={34}
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 position-relative top-1">
                            <h6 className="mb-0 fs-14 fw-medium">
                              {lead.customerName}
                            </h6>
                          </div>
                        </div>
                      </td>

                      <td className="text-body">{lead.email}</td>

                      <td>{lead.phone}</td>

                      <td className="text-body">{lead.createdDate}</td>

                      <td className="text-body">{lead.company}</td>

                      <td className="text-body">{lead.leadSource}</td>

                      <td>
                        <span
                          className={`badge bg-opacity-10 p-2 fs-12 fw-medium text-capitalize ${lead.status}`}
                        >
                          {lead.status}
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
                    Showing {indexOfFirstItem + 1} to{" "}
                    {Math.min(indexOfLastItem, filteredLeads.length)} of{" "}
                    {filteredLeads.length} Results
                  </span>

                  <nav aria-label="Page navigation example">
                    <ul className="pagination mb-0 justify-content-center">
                      <li className="page-item">
                        <button
                          className="page-link icon"
                          onClick={() =>
                            setCurrentPage(Math.max(1, currentPage - 1))
                          }
                        >
                          <span className="material-symbols-outlined">
                            keyboard_arrow_left
                          </span>
                        </button>
                      </li>
                      {[...Array(totalPages)].map((_, idx) => (
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
                            setCurrentPage(
                              Math.min(totalPages, currentPage + 1)
                            )
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
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Modal */}
      <div className={`custom-modal right ${isShowModal ? "" : "show"}`}>
        <div className="custom-modal-content position-relative z-3">
          <div className="border-bottom py-3 px-4 d-flex align-items-center justify-content-between">
            <h3 className="fs-18 mb-0">Add New Lead</h3>

            <div className="close-link" onClick={handleToggleShowModal}>
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>

          <div className="p-4">
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="label">ID No</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="ID No"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">User Name</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="User Name"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control
                  type="email"
                  className="text-dark"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Phone</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Phone"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Due Date</Form.Label>
                <Form.Control type="date" className="text-dark" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Company</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Company"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Lead Source</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Lead Source"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Status</Form.Label>
                <Form.Select
                  className="form-control text-dark"
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option defaultValue="0">Confirmed</option>
                  <option defaultValue="1">In Progress</option>
                  <option defaultValue="2">Pending</option>
                  <option defaultValue="3">Rejected</option>
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
                    <span>Create New Lead</span>
                  </span>
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className="close-outside" onClick={handleToggleShowModal}></div>
      </div>
    </>
  );
};

export default LeadsTable;
