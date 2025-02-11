"use client";

import { useState } from "react";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const sampleEvents = [
  {
    id: 1,
    title: "Annual Conference 2024",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-1.jpg",
    price: 120,
    seatBooked: 1156,
    progress: 85,
    attendees: [
      "/images/user-6.jpg",
      "/images/user-7.jpg",
      "/images/user-8.jpg",
    ],
  },
  {
    id: 2,
    title: "Leadership Summit 2024",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-2.jpg",
    price: 150,
    seatBooked: 556,
    progress: 30,
    attendees: ["/images/user-10.jpg", "/images/user-11.jpg"],
  },
  {
    id: 3,
    title: "Product Launch Webinar",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-3.jpg",
    price: 123,
    seatBooked: 356,
    progress: 65,
    attendees: [
      "/images/user-15.jpg",
      "/images/user-16.jpg",
      "/images/user-17.jpg",
    ],
  },
  {
    id: 4,
    title: "AI in Healthcare Symposium",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-4.jpg",
    price: 99,
    seatBooked: 226,
    progress: 82,
    attendees: [
      "/images/user-18.jpg",
      "/images/user-19.jpg",
      "/images/user-20.jpg",
    ],
  },
  {
    id: 5,
    title: "Product Launch Webinar",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-5.jpg",
    price: 123,
    seatBooked: 356,
    progress: 65,
    attendees: [
      "/images/user-21.jpg",
      "/images/user-22.jpg",
      "/images/user-23.jpg",
    ],
  },
  {
    id: 6,
    title: "AI in Healthcare Symposium",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-6.jpg",
    price: 35,
    seatBooked: 225,
    progress: 85,
    attendees: [
      "/images/user-1.jpg",
      "/images/user-2.jpg",
      "/images/user-3.jpg",
    ],
  },
  {
    id: 7,
    title: "Workshop: Digital Marketing",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-7.jpg",
    price: 30,
    seatBooked: 340,
    progress: 65,
    attendees: [
      "/images/user-4.jpg",
      "/images/user-7.jpg",
      "/images/user-9.jpg",
    ],
  },
  {
    id: 8,
    title: "Charity Gala Dinner",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-8.jpg",
    price: 87,
    seatBooked: 300,
    progress: 80,
    attendees: [
      "/images/user-10.jpg",
      "/images/user-11.jpg",
      "/images/user-2.jpg",
    ],
  },
  {
    id: 9,
    title: "Charity Gala Dinner",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-9.jpg",
    price: 56,
    seatBooked: 40,
    progress: 90,
    attendees: [
      "/images/user-25.jpg",
      "/images/user-26.jpg",
      "/images/user-27.jpg",
    ],
  },
  {
    id: 10,
    title: "Networking Mixer",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-10.jpg",
    price: 89,
    seatBooked: 25,
    progress: 70,
    attendees: [
      "/images/user-7.jpg",
      "/images/user-8.jpg",
      "/images/user-9.jpg",
    ],
  },
  {
    id: 11,
    title: "AI in Healthcare Symposium",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-3.jpg",
    price: 99,
    seatBooked: 40,
    progress: 75,
    attendees: [
      "/images/user-28.jpg",
      "/images/user-29.jpg",
      "/images/user-30.jpg",
    ],
  },
  {
    id: 12,
    title: "Product Launch Webinar",
    viewLink: "/events/details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    image: "/images/event-5.jpg",
    price: 30,
    seatBooked: 30,
    progress: 50,
    attendees: [
      "/images/user-4.jpg",
      "/images/user-5.jpg",
      "/images/user-6.jpg",
    ],
  },
];

const EventsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  // Calculate pagination indices
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = sampleEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Total pages
  const totalPages = Math.ceil(sampleEvents.length / eventsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Row>
        {currentEvents.map((event) => (
          <Col sm={6} xl={4} xxl={3} key={event.id}>
            <Card className="bg-white border-0 rounded-3 mb-4 transition-y">
              <Card.Body className="p-4">
                <div className="position-relative mb-3">
                  <Link to={event.viewLink}>
                    <img
                      src={event.image}
                      className="rounded-3"
                      alt={event.title}
                      width={700}
                      height={467}
                    />
                  </Link>
                  <div className="bg-white pb-2 ps-2 position-absolute top-0 end-0 rounded-3 rounded-top-0 rounded-end-0 bg-for-dark-mode">
                    <span className="wh-60 lh-60 bg-primary hover-bg d-inline-block text-white text-center rounded-3 fs-16 fw-bold">
                      ${event.price}
                    </span>
                  </div>
                </div>

                <Link
                  to={event.viewLink}
                  className="text-secondary text-decoration-none fs-18 fw-bold hover d-block mb-2"
                >
                  {event.title}
                </Link>

                <p>{event.description}</p>

                <ul className="ps-0 mb-4 list-unstyled d-flex align-items-center">
                  {event.attendees.map((attendee, idx) => (
                    <li className="ms-m-15" key={idx}>
                      <img
                        src={attendee}
                        className="wh-40 rounded-circle border border-2 border-color-white"
                        alt="attendee"
                        width={40}
                        height={40}
                      />
                    </li>
                  ))}
                </ul>

                <div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="d-block">Seat Booked</span>
                    <span className="fw-medium d-block text-secondary">
                      {event.seatBooked}
                    </span>
                  </div>

                  <ProgressBar
                    variant="primary"
                    now={event.progress}
                    style={{ height: "4px" }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}

        <Col sm={12}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
                <span>
                  Showing {indexOfFirstEvent + 1} to{" "}
                  {Math.min(indexOfLastEvent, sampleEvents.length)} of{" "}
                  {sampleEvents.length} Results
                </span>

                <nav aria-label="Page navigation example">
                  <ul className="pagination mb-0 justify-content-center">
                    <li className="page-item">
                      <button
                        className="page-link icon"
                        onClick={() =>
                          currentPage > 1 && handlePageChange(currentPage - 1)
                        }
                      >
                        <span className="material-symbols-outlined">
                          keyboard_arrow_left
                        </span>
                      </button>
                    </li>
                    {Array.from({ length: totalPages }).map((_, idx) => (
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
                          currentPage < totalPages &&
                          handlePageChange(currentPage + 1)
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default EventsGrid;
