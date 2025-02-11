"use client";

import React, { useState } from "react";
import { Card, Form, Table, Button } from "react-bootstrap";

const ticketsData = [
  {
    id: "#JAN-855",
    ticketTitle: "Network Infrastructure",
    requester: "Walter Frazier",
    assignedTo: "Oliver Clark",
    createdDate: "20 Apr 2024",
    dueDate: "30 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#JAN-856",
    ticketTitle: "Cloud Migration",
    requester: "Kimberly Anderson",
    assignedTo: "Ethan Baker",
    createdDate: "21 Apr 2024",
    dueDate: "25 Apr 2024",
    priority: "Low",
    status: "pending",
  },
  {
    id: "#DEC-857",
    ticketTitle: "Website Revamp",
    requester: "Roscoe Guerrero",
    assignedTo: "Sophia Carter",
    createdDate: "17 Apr 2024",
    dueDate: "20 Apr 2024",
    priority: "Medium",
    status: "inProgress",
  },
  {
    id: "#DEC-858",
    ticketTitle: "Mobile Application",
    requester: "Robert Stewart",
    assignedTo: "Ava Cooper",
    createdDate: "10 Apr 2024",
    dueDate: "15 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#DEC-859",
    ticketTitle: "System Deployment",
    requester: "Dustin Fritch",
    assignedTo: "Isabella Evans",
    createdDate: "05 Apr 2024",
    dueDate: "10 Apr 2024",
    priority: "Low",
    status: "cancelled",
  },
  {
    id: "#JAN-860",
    ticketTitle: "Login Issues",
    requester: "Walter Frazier",
    assignedTo: "Oliver Clark",
    createdDate: "20 Apr 2024",
    dueDate: "30 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#FEB-861",
    ticketTitle: "Email Configuration",
    requester: "Kimberly Anderson",
    assignedTo: "Ethan Baker",
    createdDate: "21 Apr 2024",
    dueDate: "25 Apr 2024",
    priority: "Low",
    status: "pending",
  },
  {
    id: "#MAR-862",
    ticketTitle: "Application Error",
    requester: "Roscoe Guerrero",
    assignedTo: "Sophia Carter",
    createdDate: "17 Apr 2024",
    dueDate: "20 Apr 2024",
    priority: "Medium",
    status: "inProgress",
  },
  {
    id: "#JAN-863",
    ticketTitle: "Software Installation",
    requester: "Robert Stewart",
    assignedTo: "Ava Cooper",
    createdDate: "10 Apr 2024",
    dueDate: "15 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#DEC-864",
    ticketTitle: "System Upgrade",
    requester: "Dustin Fritch",
    assignedTo: "Isabella Evans",
    createdDate: "05 Apr 2024",
    dueDate: "10 Apr 2024",
    priority: "Low",
    status: "cancelled",
  },
  {
    id: "#DEC-865",
    ticketTitle: "System Upgrade",
    requester: "Dustin Fritch",
    assignedTo: "Isabella Evans",
    createdDate: "05 Apr 2024",
    dueDate: "10 Apr 2024",
    priority: "Low",
    status: "cancelled",
  },
  {
    id: "#DEC-866",
    ticketTitle: "Mobile Application",
    requester: "Robert Stewart",
    assignedTo: "Ava Cooper",
    createdDate: "10 Apr 2024",
    dueDate: "15 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#DEC-867",
    ticketTitle: "System Deployment",
    requester: "Dustin Fritch",
    assignedTo: "Isabella Evans",
    createdDate: "05 Apr 2024",
    dueDate: "10 Apr 2024",
    priority: "Low",
    status: "cancelled",
  },
  {
    id: "#JAN-868",
    ticketTitle: "Login Issues",
    requester: "Walter Frazier",
    assignedTo: "Oliver Clark",
    createdDate: "20 Apr 2024",
    dueDate: "30 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#JAN-869",
    ticketTitle: "Network Infrastructure",
    requester: "Walter Frazier",
    assignedTo: "Oliver Clark",
    createdDate: "20 Apr 2024",
    dueDate: "30 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#JAN-870",
    ticketTitle: "Cloud Migration",
    requester: "Kimberly Anderson",
    assignedTo: "Ethan Baker",
    createdDate: "21 Apr 2024",
    dueDate: "25 Apr 2024",
    priority: "Low",
    status: "pending",
  },
  {
    id: "#DEC-871",
    ticketTitle: "Website Revamp",
    requester: "Roscoe Guerrero",
    assignedTo: "Sophia Carter",
    createdDate: "17 Apr 2024",
    dueDate: "20 Apr 2024",
    priority: "Medium",
    status: "inProgress",
  },
];

const AllTickets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(ticketsData.length / itemsPerPage);

  // Determine tickets to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTickets = ticketsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
            <h3 className="mb-0">All Tickets</h3>

            <div className="text-end">
              <button
                className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                onClick={handleToggleShowModal}
              >
                <span className="py-sm-1 d-block">
                  <i className="ri-add-line"></i>
                  <span>Add New Ticket</span>
                </span>
              </button>
            </div>
          </div>

          <div className="default-table-area all-projects">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Ticket Title</th>
                    <th scope="col">Requester</th>
                    <th scope="col">Assigned To</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentTickets.map((ticket, index) => (
                    <tr key={index}>
                      <td className="text-body">{ticket.id}</td>

                      <td className="text-body">{ticket.ticketTitle}</td>

                      <td>{ticket.requester}</td>

                      <td className="text-body">{ticket.assignedTo}</td>

                      <td className="text-body">{ticket.createdDate}</td>

                      <td className="text-body">{ticket.dueDate}</td>

                      <td className="text-body">{ticket.priority}</td>

                      <td>
                        <span
                          className={`badge bg-opacity-10 p-2 fs-12 fw-medium text-capitalize ${ticket.status}`}
                        >
                          {ticket.status}
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

              <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
                <span className="fs-12 fw-medium">
                  Showing {currentTickets.length} of {ticketsData.length}{" "}
                  Results
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
          </div>
        </Card.Body>
      </Card>

      {/* Modal */}
      <div className={`custom-modal right ${isShowModal ? "" : "show"}`}>
        <div className="custom-modal-content position-relative z-3">
          <div className="border-bottom py-3 px-4 d-flex align-items-center justify-content-between">
            <h3 className="fs-18 mb-0">Create New Ticket</h3>

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
                <Form.Label className="label">Ticket Title</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Ticket Title"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Requester</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Requester"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Assigned To</Form.Label>
                <Form.Select
                  className="form-control text-dark"
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option value="0">Oliver Clark</option>
                  <option value="1">Ethan Baker</option>
                  <option value="2">Sophia Carter</option>
                  <option value="3">Ava Cooper</option>
                  <option value="4">Isabella Evans</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Created Date</Form.Label>
                <Form.Control type="date" className="text-dark" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Due Date</Form.Label>
                <Form.Control type="date" className="text-dark" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Priority</Form.Label>
                <Form.Select
                  className="form-control text-dark"
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option value="0">High</option>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Status</Form.Label>
                <Form.Select
                  className="form-control text-dark"
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option value="0">Finished</option>
                  <option value="1">Pending</option>
                  <option value="2">In Progress</option>
                  <option value="3">Cancelled</option>
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
                    <span>Create New Ticket</span>
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

export default AllTickets;
