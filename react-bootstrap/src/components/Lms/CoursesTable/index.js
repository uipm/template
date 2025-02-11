"use client";

import React, { useState } from "react";
import { Card, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const courseData = [
  {
    id: "#855",
    courseName: "Cybersecurity Awareness",
    detailsLink: "/lms/courses/details",
    category: "Technology",
    instructorImg: "/images/user-6.jpg",
    instructorName: "Oliver Khan",
    enrolled: 180,
    startDate: "25 Mar 2024",
    endDate: "25 Apr 2024",
    price: "$49.99",
  },
  {
    id: "#856",
    courseName: "Python Programming",
    detailsLink: "/lms/courses/details",
    category: "Science",
    instructorImg: "/images/user-7.jpg",
    instructorName: "Ava Cooper",
    enrolled: 250,
    startDate: "20 Mar 2024",
    endDate: "20 Apr 2024",
    price: "$45.32",
  },
  {
    id: "#857",
    courseName: "Big Data Analytics",
    detailsLink: "/lms/courses/details",
    category: "Health & Wellness",
    instructorImg: "/images/user-8.jpg",
    instructorName: "Isabella Evans",
    enrolled: 320,
    startDate: "15 Mar 2024",
    endDate: "15 Apr 2024",
    price: "$99.00",
  },
  {
    id: "#858",
    courseName: "Introduction to Blockchain",
    detailsLink: "/lms/courses/details",
    category: "Education",
    instructorImg: "/images/user-9.jpg",
    instructorName: "Mia Hughes",
    enrolled: 135,
    startDate: "10 Mar 2024",
    endDate: "10 Apr 2024",
    price: "$29.75",
  },
  {
    id: "#859",
    courseName: "Network Administration",
    detailsLink: "/lms/courses/details",
    category: "Food & Cooking",
    instructorImg: "/images/user-10.jpg",
    instructorName: "Noah Mitchell",
    enrolled: 460,
    startDate: "05 Mar 2024",
    endDate: "05 Apr 2024",
    price: "$56.99",
  },
  {
    id: "#860",
    courseName: "Artificial Intelligence",
    detailsLink: "/lms/courses/details",
    category: "Lifestyle & Fashion",
    instructorImg: "/images/user-11.jpg",
    instructorName: "Oliver Khan",
    enrolled: 515,
    startDate: "10 Feb 2024",
    endDate: "10 Mar 2024",
    price: "$78.75",
  },
  {
    id: "#861",
    courseName: "Artificial Intelligence",
    detailsLink: "/lms/courses/details",
    category: "Lifestyle & Fashion",
    instructorImg: "/images/user-11.jpg",
    instructorName: "Oliver Khan",
    enrolled: 515,
    startDate: "10 Feb 2024",
    endDate: "10 Mar 2024",
    price: "$78.75",
  },
  {
    id: "#862",
    courseName: "Network Administration",
    detailsLink: "/lms/courses/details",
    category: "Food & Cooking",
    instructorImg: "/images/user-10.jpg",
    instructorName: "Noah Mitchell",
    enrolled: 460,
    startDate: "05 Mar 2024",
    endDate: "05 Apr 2024",
    price: "$56.99",
  },
  {
    id: "#863",
    courseName: "Business Finance",
    detailsLink: "/lms/courses/details",
    category: "Health & Wellness",
    instructorImg: "/images/user-8.jpg",
    instructorName: "Isabella Evans",
    enrolled: 320,
    startDate: "15 Mar 2024",
    endDate: "15 Apr 2024",
    price: "$99.00",
  },
  {
    id: "#864",
    courseName: "Photoshop Mastery",
    detailsLink: "/lms/courses/details",
    category: "Education",
    instructorImg: "/images/user-9.jpg",
    instructorName: "Mia Hughes",
    enrolled: 135,
    startDate: "10 Mar 2024",
    endDate: "10 Apr 2024",
    price: "$29.75",
  },
  {
    id: "#865",
    courseName: "Network Administration",
    detailsLink: "/lms/courses/details",
    category: "Food & Cooking",
    instructorImg: "/images/user-10.jpg",
    instructorName: "Noah Mitchell",
    enrolled: 460,
    startDate: "05 Mar 2024",
    endDate: "05 Apr 2024",
    price: "$56.99",
  },
  {
    id: "#866",
    courseName: "Business Finance",
    detailsLink: "/lms/courses/details",
    category: "Health & Wellness",
    instructorImg: "/images/user-8.jpg",
    instructorName: "Isabella Evans",
    enrolled: 320,
    startDate: "15 Mar 2024",
    endDate: "15 Apr 2024",
    price: "$99.00",
  },
  {
    id: "#867",
    courseName: "Artificial Intelligence",
    detailsLink: "/lms/courses/details",
    category: "Lifestyle & Fashion",
    instructorImg: "/images/user-11.jpg",
    instructorName: "Oliver Khan",
    enrolled: 515,
    startDate: "10 Feb 2024",
    endDate: "10 Mar 2024",
    price: "$78.75",
  },
  {
    id: "#868",
    courseName: "Artificial Intelligence",
    detailsLink: "/lms/courses/details",
    category: "Lifestyle & Fashion",
    instructorImg: "/images/user-11.jpg",
    instructorName: "Oliver Khan",
    enrolled: 515,
    startDate: "10 Feb 2024",
    endDate: "10 Mar 2024",
    price: "$78.75",
  },
  {
    id: "#869",
    courseName: "Photoshop Mastery",
    detailsLink: "/lms/courses/details",
    category: "Education",
    instructorImg: "/images/user-9.jpg",
    instructorName: "Mia Hughes",
    enrolled: 135,
    startDate: "10 Mar 2024",
    endDate: "10 Apr 2024",
    price: "$29.75",
  },
];

const CoursesTable = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;

  const totalCourses = courseData.length;
  const totalPages = Math.ceil(totalCourses / itemsPerPage);

  // Get the courses for the current page
  const currentCourses = courseData.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h3 className="mb-0">Courses</h3>

              <Form.Select
                className="month-select form-control p-0 h-auto border-0"
                aria-label="Default select example"
              >
                <option value="0">All Courses</option>
                <option value="1">Paid</option>
                <option value="2">Free</option>
                <option value="3">Top Rated</option>
                <option value="4">Best Seller</option>
              </Form.Select>
            </div>
          </div>

          <div className="default-table-area style-two all-projects">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Instructor</th>
                    <th scope="col">Enrolled</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCourses &&
                    currentCourses.map((course, i) => (
                      <tr key={i}>
                        <td className="text-body">{course.id}</td>

                        <td>
                          <Link to={course.detailsLink}>
                            {course.courseName}
                          </Link>
                        </td>

                        <td>{course.category}</td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src={course.instructorImg}
                                className="wh-34 rounded-circle"
                                alt="user"
                                width={34}
                                height={34}
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 position-relative top-1">
                              <h6 className="mb-0 fs-14 fw-medium">
                                {course.instructorName}
                              </h6>
                            </div>
                          </div>
                        </td>

                        <td className="text-body">{course.enrolled}</td>

                        <td className="text-body">{course.startDate}</td>

                        <td className="text-body">{course.endDate}</td>

                        <td>{course.price}</td>

                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <Link to={course.detailsLink}>
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
                  Showing {indexOfFirstCourse + 1} to{" "}
                  {Math.min(indexOfLastCourse, totalCourses)} of {totalCourses}{" "}
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

export default CoursesTable;
