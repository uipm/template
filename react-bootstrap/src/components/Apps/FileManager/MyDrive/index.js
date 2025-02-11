"use client";

import React from "react";
import { Row, Col, Dropdown, Card, Form } from "react-bootstrap";

const driveData = [
  {
    id: 1,
    title: "Assets",
    icon: "folder_open",
    bgColor: "bg-primary bg-opacity-10",
    textColor: "text-primary",
    files: "387 Files",
    size: "4.5 GB",
  },
  {
    id: 2,
    title: "Projects",
    icon: "news",
    bgColor: "bg-danger bg-opacity-10",
    textColor: "text-danger",
    files: "123 Files",
    size: "1.4 GB",
  },
  {
    id: 3,
    title: "Personal",
    icon: "folder",
    bgColor: "bg-success bg-opacity-10",
    textColor: "text-success",
    files: "435 Files",
    size: "5.2 GB",
  },
  {
    id: 4,
    title: "Templates",
    icon: "folder_open",
    bgColor: "bg-primary-div bg-opacity-10",
    textColor: "text-primary-div",
    files: "431 Files",
    size: "1.3 GB",
  },
];

const MyDrive = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4 pb-0">
          <h3 className="mb-4">My Drive</h3>

          <Row className="justify-content-center">
            {driveData.map((item) => (
              <Col key={item.id} sm={6} xl={6} xxl={3}>
                <Card
                  className={`${item.bgColor} border-0 rounded-3 mb-4 file-for-dark`}
                >
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between">
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id={`checkbox-${item.id}`}
                          label=""
                        />
                      </Form>

                      <Dropdown className="action-opt ms-2 position-relative top-3">
                        <Dropdown.Toggle
                          variant="secondary"
                          id={`dropdown-${item.id}`}
                          className="bg-transparent p-0"
                        >
                          <span className="material-symbols-outlined fs-25">
                            more_horiz
                          </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-white border box-shadow">
                          <Dropdown.Item href="#">
                            <span className="material-symbols-outlined">
                              border_color
                            </span>{" "}
                            Edit
                          </Dropdown.Item>

                          <Dropdown.Item href="#">
                            <span className="material-symbols-outlined">
                              delete
                            </span>{" "}
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    <div className="d-flex align-items-center py-4 my-3">
                      <span
                        className={`material-symbols-outlined fs-45 ${item.textColor}`}
                      >
                        {item.icon}
                      </span>
                      <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                        {item.title}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span className="fs-13 text-secondary">{item.files}</span>
                      <span className="fs-13 text-secondary">{item.size}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyDrive;
