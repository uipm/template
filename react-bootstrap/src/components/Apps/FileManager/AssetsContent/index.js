"use client";

import { Row, Col, Dropdown, Card, Form } from "react-bootstrap";

const AssetsContent = () => {
  const assetsData = [
    { id: 1, name: "Projects", files: 159, size: "4.5 GB", color: "primary" },
    {
      id: 2,
      name: "Documents",
      files: 159,
      size: "4.5 GB",
      color: "primary-div",
    },
    { id: 3, name: "Media", files: 159, size: "4.5 GB", color: "success" },
    {
      id: 4,
      name: "Applications",
      files: 159,
      size: "4.5 GB",
      color: "danger",
    },
    {
      id: 5,
      name: "ET Template",
      files: 159,
      size: "4.5 GB",
      color: "warning",
    },
    {
      id: 6,
      name: "React Template",
      files: 159,
      size: "4.5 GB",
      color: "info",
    },
    {
      id: 7,
      name: "Material UI",
      files: 159,
      size: "4.5 GB",
      color: "primary-div",
    },
    {
      id: 8,
      name: "WP Themes",
      files: 159,
      size: "4.5 GB",
      color: "secondary",
    },
    {
      id: 9,
      name: "Personal Photos",
      files: 159,
      size: "4.5 GB",
      color: "danger",
    },
    {
      id: 10,
      name: "Mobile Apps",
      files: 159,
      size: "4.5 GB",
      color: "primary",
    },
    {
      id: 11,
      name: "Important Files",
      files: 159,
      size: "4.5 GB",
      color: "primary-div",
    },
    {
      id: 12,
      name: "Angular Template",
      files: 159,
      size: "4.5 GB",
      color: "warning",
    },
  ];

  return (
    <Row className="justify-content-center">
      {assetsData.map((asset) => (
        <Col sm={6} xl={6} xxl={3} key={asset.id}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between">
                <Form>
                  <Form.Check
                    type="checkbox"
                    id={`checkbox-${asset.id}`}
                    label=""
                  />
                </Form>

                <Dropdown className="action-opt ms-2 position-relative top-3">
                  <Dropdown.Toggle
                    variant="secondary"
                    id={`dropdown-${asset.id}`}
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
                      </span>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="material-symbols-outlined">delete</i>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="d-flex align-items-center py-4 my-3">
                <span
                  className={`material-symbols-outlined fs-45 text-${asset.color}`}
                >
                  folder_open
                </span>
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  {asset.name}
                </span>
              </div>

              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">
                  {asset.files} Files
                </span>
                <span className="fs-13 text-secondary">{asset.size}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AssetsContent;
