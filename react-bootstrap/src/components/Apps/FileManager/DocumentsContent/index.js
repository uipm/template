"use client";

import { Row, Col, Card } from "react-bootstrap";

const DocumentsContent = () => {
  const cardData = [
    { id: 1, title: "Projects", icon: "/images/png.png" },
    { id: 2, title: "Documents", icon: "/images/jpg.png" },
    { id: 3, title: "Media", icon: "/images/txt.png" },
    { id: 4, title: "Applications", icon: "/images/pdf.png" },
    { id: 5, title: "ET Template", icon: "/images/xl4.png" },
    { id: 6, title: "React Template", icon: "/images/doc.png" },
    { id: 7, title: "Material UI", icon: "/images/png.png" },
    { id: 8, title: "WP Theme", icon: "/images/jpg.png" },
    { id: 9, title: "Personal Photos", icon: "/images/txt.png" },
    { id: 10, title: "Mobile Apps", icon: "/images/pdf.png" },
    { id: 11, title: "Important Files", icon: "/images/xl4.png" },
    { id: 12, title: "Angular Template", icon: "/images/jpg.png" },
  ];

  return (
    <>
      <Row>
        {cardData.map((card) => (
          <Col sm={6} xl={6} xxl={3} key={card.id}>
            <Card className="bg-white border-0 rounded-3 mb-4">
              <Card.Body className="p-4">
                <div className="mb-3 text-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    width={56}
                    height={56}
                  />
                  <span className="fs-15 fw-bold text-secondary d-block mt-3">
                    {card.title}
                  </span>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-3">
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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DocumentsContent;
