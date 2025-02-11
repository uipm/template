"use client";

import { Row, Col, Dropdown, Card, Form } from "react-bootstrap";

const ApplicationsContent = () => {
  const cardData = [
    {
      id: 1,
      name: "ET Template",
      files: 159,
      size: "4.5 GB",
      icon: "/images/figma.svg",
    },
    {
      id: 2,
      name: "React Template",
      files: 159,
      size: "4.5 GB",
      icon: "/images/dribbble.svg",
    },
    {
      id: 3,
      name: "Material UI",
      files: 159,
      size: "4.5 GB",
      icon: "/images/spotify.svg",
    },
    {
      id: 4,
      name: "WP Themes",
      files: 159,
      size: "4.5 GB",
      icon: "/images/github.svg",
    },
    {
      id: 5,
      name: "Personal Photos",
      files: 159,
      size: "4.5 GB",
      icon: "/images/gdrive.svg",
    },
    {
      id: 6,
      name: "Mobile Apps",
      files: 159,
      size: "4.5 GB",
      icon: "/images/trello.svg",
    },
    {
      id: 7,
      name: "Important Files",
      files: 159,
      size: "4.5 GB",
      icon: "/images/slak.svg",
    },
    {
      id: 8,
      name: "Angular Template",
      files: 159,
      size: "4.5 GB",
      icon: "/images/pinterest.svg",
    },
    {
      id: 9,
      name: "Projects",
      files: 159,
      size: "4.5 GB",
      icon: "/images/facebook.svg",
    },
    {
      id: 10,
      name: "Documents",
      files: 159,
      size: "4.5 GB",
      icon: "/images/linkedin.svg",
    },
  ];

  return (
    <Row>
      {cardData.map((card) => (
        <Col sm={6} xl={6} xxl={3} key={card.id}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between">
                <Form>
                  <Form.Check
                    type="checkbox"
                    id={`checkbox-${card.id}`}
                    label=""
                  />
                </Form>

                <Dropdown className="action-opt ms-2 position-relative top-3">
                  <Dropdown.Toggle
                    variant="secondary"
                    id={`dropdown-${card.id}`}
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
                <img src={card.icon} alt={card.name} width={30} height={30} />
                <span className="fs-15 fw-bold text-secondary ms-2 position-relative top-2">
                  {card.name}
                </span>
              </div>

              <div className="d-flex justify-content-between">
                <span className="fs-13 text-secondary">{card.files} Files</span>
                <span className="fs-13 text-secondary">{card.size}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ApplicationsContent;
