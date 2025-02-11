"use client";

import { Row, Col, Dropdown, Card, Form } from "react-bootstrap";

const PersonalContent = () => {
  const cardData = [
    {
      id: 1,
      name: "Projects",
      files: 159,
      size: "4.5 GB",
      icon: "/images/png.png",
    },
    {
      id: 2,
      name: "Documents",
      files: 522,
      size: "5.5 GB",
      icon: "/images/jpg.png",
    },
    {
      id: 3,
      name: "Media",
      files: 995,
      size: "7.5 GB",
      icon: "/images/txt.png",
    },
    {
      id: 4,
      name: "Applications",
      files: 159,
      size: "4.5 GB",
      icon: "/images/pdf.png",
    },
    {
      id: 5,
      name: "ET Template",
      files: 159,
      size: "4.5 GB",
      icon: "/images/xl4.png",
    },
    {
      id: 6,
      name: "React Template",
      files: 357,
      size: "8.5 GB",
      icon: "/images/doc.png",
    },
    {
      id: 7,
      name: "Material UI",
      files: 159,
      size: "4.5 GB",
      icon: "/images/png.png",
    },
    {
      id: 8,
      name: "WP Theme",
      files: 522,
      size: "4.5 GB",
      icon: "/images/jpg.png",
    },
    {
      id: 9,
      name: "Personal Photos",
      files: 159,
      size: "4.5 GB",
      icon: "/images/txt.png",
    },
    {
      id: 10,
      name: "Mobile Apps",
      files: 39,
      size: "3.8 GB",
      icon: "/images/pdf.png",
    },
    {
      id: 11,
      name: "Important Files",
      files: 75,
      size: "2.2 GB",
      icon: "/images/xl4.png",
    },
    {
      id: 12,
      name: "Angular Template",
      files: 75,
      size: "2.2 GB",
      icon: "/images/jpg.png",
    },
  ];

  return (
    <Row className="justify-content-center">
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

              <div className="py-4">
                <img src={card.icon} alt={card.name} width={56} height={56} />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">
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

export default PersonalContent;
