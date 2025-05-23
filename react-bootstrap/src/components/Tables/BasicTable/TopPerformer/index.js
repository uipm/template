"use client";

import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const topPerformerData = [
  {
    userImg: "/images/user-6.jpg",
    userName: "Alex Davis",
    email: "alex@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-7.jpg",
    userName: "Laura Martinez",
    email: "laura@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-8.jpg",
    userName: "Mark Thompson",
    email: "mark@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-9.jpg",
    userName: "Rachel White",
    email: "rachel@trezo.com",
    link: "#",
  },
  {
    userImg: "/images/user-10.jpg",
    userName: "Kevin Lee",
    email: "kevin@trezo.com",
    link: "#",
  },
];

const TopPerformer = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30">
            <h3 className="mb-0">Top Performer</h3>

            <Form.Select
              className="month-select form-control p-0 h-auto border-0"
              aria-label="Default select example"
            >
              <option defaultValue="0">Select</option>
              <option defaultValue="1">This Month</option>
              <option defaultValue="2">Last Month</option>
              <option defaultValue="3">Last Year</option>
            </Form.Select>
          </div>

          <ul className="ps-0 mb-0 list-unstyled border-top pt-3">
            {topPerformerData &&
              topPerformerData.slice(0, 5).map((value, i) => (
                <li
                  key={i}
                  className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3"
                >
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={value.userImg}
                        className="wh-44 rounded-circle"
                        alt="user"
                        width={44}
                        height={44}
                      />
                    </div>
                    <div className="flex-grow-1 ms-2 position-relative top-2">
                      <h6 className="mb-0 fw-medium">{value.userName}</h6>
                      <span>{value.email}</span>
                    </div>
                  </div>
                  <Link
                    to={value.link}
                    className="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                  >
                    <i className="ri-arrow-right-up-line fs-18"></i>
                  </Link>
                </li>
              ))}
          </ul> 
        </Card.Body>
      </Card>
    </>
  );
};

export default TopPerformer;
