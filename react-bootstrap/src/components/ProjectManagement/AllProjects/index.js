"use client";

import React, { useState } from "react";
import { Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: "#850",
    projectName: "Project CyberSphere",
    viewLink: "/project-management/project-overview",
    client: "NovaTech Solutions",
    assignees: {
      images: [
        {
          img: "/images/user-15.jpg",
        },
        {
          img: "/images/user-11.jpg",
        },
        {
          img: "/images/user-6.jpg",
        },
        {
          img: "/images/user-9.jpg",
        },
      ],
      number: "+10",
    },
    budget: "$4,500",
    startDate: "25 Mar 2024",
    endDate: "25 Apr 2024",
    status: "finished",
  },
  {
    id: "#851",
    projectName: "Digital Oasis Initiative",
    viewLink: "/project-management/project-overview",
    client: "AlphaWave Innovations",
    assignees: {
      images: [
        {
          img: "/images/user-7.jpg",
        },
        {
          img: "/images/user-8.jpg",
        },
        {
          img: "/images/user-9.jpg",
        },
      ],
      number: "+04",
    },
    budget: "$6,800",
    startDate: "20 Mar 2024",
    endDate: "20 Apr 2024",
    status: "inProgress",
  },
  {
    id: "#852",
    projectName: "CloudScape Evolution",
    viewLink: "/project-management/project-overview",
    client: "InnovateIQ Inc.",
    assignees: {
      images: [
        {
          img: "/images/user-10.jpg",
        },
        {
          img: "/images/user-12.jpg",
        },
      ],
      number: "+07",
    },
    budget: "$2,500",
    startDate: "15 Mar 2024",
    endDate: "15 Apr 2024",
    status: "pending",
  },
  {
    id: "#853",
    projectName: "Data Dynamo Drive",
    viewLink: "/project-management/project-overview",
    client: "BlueSky Technologies",
    assignees: {
      images: [
        {
          img: "/images/user-13.jpg",
        },
        {
          img: "/images/user-14.jpg",
        },
        {
          img: "/images/user-15.jpg",
        },
        {
          img: "/images/user-12.jpg",
        },
      ],
      number: "+15",
    },
    budget: "$7,500",
    startDate: "10 Mar 2024",
    endDate: "10 Apr 2024",
    status: "inProgress",
  },
  {
    id: "#854",
    projectName: "QuantumLeap Quest",
    viewLink: "/project-management/project-overview",
    client: "NexGen Systems",
    assignees: {
      images: [
        {
          img: "/images/user-7.jpg",
        },
        {
          img: "/images/user-9.jpg",
        },
        {
          img: "/images/user-6.jpg",
        },
      ],
      number: "+03",
    },
    budget: "$3,400",
    startDate: "05 Mar 2024",
    endDate: "05 Apr 2024",
    status: "finished",
  },
  {
    id: "#855",
    projectName: "QuantumLeap Quest",
    viewLink: "/project-management/project-overview",
    client: "NexGen Systems",
    assignees: {
      images: [
        {
          img: "/images/user-7.jpg",
        },
        {
          img: "/images/user-9.jpg",
        },
        {
          img: "/images/user-6.jpg",
        },
      ],
      number: "+03",
    },
    budget: "$3,400",
    startDate: "05 Mar 2024",
    endDate: "05 Apr 2024",
    status: "finished",
  },
  {
    id: "#854",
    projectName: "Data Dynamo Drive",
    viewLink: "/project-management/project-overview",
    client: "BlueSky Technologies",
    assignees: {
      images: [
        {
          img: "/images/user-13.jpg",
        },
        {
          img: "/images/user-14.jpg",
        },
        {
          img: "/images/user-15.jpg",
        },
        {
          img: "/images/user-12.jpg",
        },
      ],
      number: "+15",
    },
    budget: "$7,500",
    startDate: "10 Mar 2024",
    endDate: "10 Apr 2024",
    status: "inProgress",
  },
  {
    id: "#855",
    projectName: "Project Monitoring",
    viewLink: "/project-management/project-overview",
    client: "InnovateIQ Inc.",
    assignees: {
      images: [
        {
          img: "/images/user-10.jpg",
        },
        {
          img: "/images/user-12.jpg",
        },
      ],
      number: "+07",
    },
    budget: "$2,500",
    startDate: "15 Mar 2024",
    endDate: "15 Apr 2024",
    status: "pending",
  },
  {
    id: "#856",
    projectName: "Project Alpho",
    viewLink: "/project-management/project-overview",
    client: "BlueSky Technologies",
    assignees: {
      images: [
        {
          img: "/images/user-13.jpg",
        },
        {
          img: "/images/user-14.jpg",
        },
        {
          img: "/images/user-15.jpg",
        },
        {
          img: "/images/user-12.jpg",
        },
      ],
      number: "+15",
    },
    budget: "$7,500",
    startDate: "10 Mar 2024",
    endDate: "10 Apr 2024",
    status: "inProgress",
  },
  {
    id: "#857",
    projectName: "Dashboard Design",
    viewLink: "/project-management/project-overview",
    client: "NexGen Systems",
    assignees: {
      images: [
        {
          img: "/images/user-7.jpg",
        },
        {
          img: "/images/user-9.jpg",
        },
        {
          img: "/images/user-6.jpg",
        },
      ],
      number: "+03",
    },
    budget: "$3,400",
    startDate: "05 Mar 2024",
    endDate: "05 Apr 2024",
    status: "finished",
  },
  {
    id: "#858",
    projectName: "QuantumLeap Quest",
    viewLink: "/project-management/project-overview",
    client: "NexGen Systems",
    assignees: {
      images: [
        {
          img: "/images/user-7.jpg",
        },
        {
          img: "/images/user-9.jpg",
        },
        {
          img: "/images/user-6.jpg",
        },
      ],
      number: "+03",
    },
    budget: "$3,400",
    startDate: "05 Mar 2024",
    endDate: "05 Apr 2024",
    status: "finished",
  },
  {
    id: "#859",
    projectName: "Data Dynamo Drive",
    viewLink: "/project-management/project-overview",
    client: "BlueSky Technologies",
    assignees: {
      images: [
        {
          img: "/images/user-13.jpg",
        },
        {
          img: "/images/user-14.jpg",
        },
        {
          img: "/images/user-15.jpg",
        },
        {
          img: "/images/user-12.jpg",
        },
      ],
      number: "+15",
    },
    budget: "$7,500",
    startDate: "10 Mar 2024",
    endDate: "10 Apr 2024",
    status: "inProgress",
  },
  {
    id: "#860",
    projectName: "Project Monitoring",
    viewLink: "/project-management/project-overview",
    client: "InnovateIQ Inc.",
    assignees: {
      images: [
        {
          img: "/images/user-10.jpg",
        },
        {
          img: "/images/user-12.jpg",
        },
      ],
      number: "+07",
    },
    budget: "$2,500",
    startDate: "15 Mar 2024",
    endDate: "15 Apr 2024",
    status: "pending",
  },
  {
    id: "#861",
    projectName: "Project Alpho",
    viewLink: "/project-management/project-overview",
    client: "BlueSky Technologies",
    assignees: {
      images: [
        {
          img: "/images/user-13.jpg",
        },
        {
          img: "/images/user-14.jpg",
        },
        {
          img: "/images/user-15.jpg",
        },
        {
          img: "/images/user-12.jpg",
        },
      ],
      number: "+15",
    },
    budget: "$7,500",
    startDate: "10 Mar 2024",
    endDate: "10 Apr 2024",
    status: "inProgress",
  },
  {
    id: "#862",
    projectName: "Dashboard Design",
    viewLink: "/project-management/project-overview",
    client: "NexGen Systems",
    assignees: {
      images: [
        {
          img: "/images/user-7.jpg",
        },
        {
          img: "/images/user-9.jpg",
        },
        {
          img: "/images/user-6.jpg",
        },
      ],
      number: "+03",
    },
    budget: "$3,400",
    startDate: "05 Mar 2024",
    endDate: "05 Apr 2024",
    status: "finished",
  },
];

const AllProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h3 className="mb-0">All Projects</h3>

              <Link
                to="/project-management/create-project"
                className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
              >
                <span className="py-sm-1 d-block">
                  <i className="ri-add-line d-none d-sm-inline-block fs-18"></i>
                  <span>Create New Project</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="default-table-area style-two all-projects">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Project Name</th>
                    <th scope="col">Client</th>
                    <th scope="col">Assignees</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentProjects.map((value, i) => (
                    <tr key={i}>
                      <td className="text-body">{value.id}</td>

                      <td>
                        <Link href={value.viewLink}>{value.projectName}</Link>
                      </td>

                      <td>{value.client}</td>

                      <td>
                        <ul className="ps-0 mb-0 list-unstyled d-flex align-items-center">
                          {value.assignees.images
                            .slice(0, 5)
                            .map((value, i) => (
                              <li key={i} className="ms-m-10">
                                <img
                                  src={value.img}
                                  className="wh-34 lh-34 rounded-circle border border-1 border-color-white"
                                  alt="user"
                                  width={34}
                                  height={34}
                                />
                              </li>
                            ))}

                          <li className="ms-m-10">
                            <div className="wh-34 lh-34 rounded-circle bg-primary d-block text-center text-decoration-none text-white fs-12 fw-medium border border-1 border-color-white">
                              {value.assignees.number}
                            </div>
                          </li>
                        </ul>
                      </td>

                      <td className="text-body">{value.budget}</td>

                      <td className="text-body">{value.startDate}</td>

                      <td className="text-body">{value.endDate}</td>

                      <td>
                        <span
                          className={`badge bg-opacity-10 p-2 fs-12 fw-medium text-capitalize ${value.status}`}
                        >
                          {value.status}
                        </span>
                      </td>

                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <Link href={value.viewLink}>
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

            <div className="p-4 pt-lg-4">
              <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
                <span className="fs-12 fw-medium">
                  Showing {indexOfFirstItem + 1} to{" "}
                  {Math.min(indexOfLastItem, projectsData.length)} of{" "}
                  {projectsData.length} Results
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
                          setCurrentPage(Math.min(totalPages, currentPage + 1))
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
        </Card.Body>
      </Card>
    </>
  );
};

export default AllProjects;
