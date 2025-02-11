"use client";

import { useState } from "react";
import { Card, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const eventsData = [
  {
    eventID: "#JAN-258",
    image: "/images/event-1.jpg",
    title: "Annual Conference 2024",
    detailsLink: "/events/details",
    dateAndTime: "01 Dec 2024 09:00 AM",
    location: "Convention Center",
    organizer: "ABC Corporation",
    status: "happening",
  },
  {
    eventID: "#JAN-648",
    image: "/images/event-2.jpg",
    title: "Leadership Summit 2024",
    detailsLink: "/events/details",
    dateAndTime: "10 Dec 2024 03:00 AM",
    location: "Online",
    organizer: "Marketing Pros",
    status: "upcoming",
  },
  {
    eventID: "#JAN-945",
    image: "/images/event-3.jpg",
    title: "Product Launch Webinar",
    detailsLink: "/events/details",
    dateAndTime: "15 Dec 2024 06:00 PM",
    location: "City Sky Lounge",
    organizer: "Tech Solutions Inc.",
    status: "past",
  },
  {
    eventID: "#JAN-186",
    image: "/images/event-4.jpg",
    title: "AI in Healthcare Symposium",
    detailsLink: "/events/details",
    dateAndTime: "20 Dec 2024 09:00 AM",
    location: "Training Center",
    organizer: "Startup Hub",
    status: "upcoming",
  },
  {
    eventID: "#JAN-439",
    image: "/images/event-5.jpg",
    title: "Tech Summit 2024",
    detailsLink: "/events/details",
    dateAndTime: "25 Dec 2024 02:30 PM",
    location: "Tech Park Auditorium",
    organizer: "Community Foundation",
    status: "upcoming",
  },
  {
    eventID: "#JAN-752",
    image: "/images/event-6.jpg",
    title: "Startup Pitch Day",
    detailsLink: "/events/details",
    dateAndTime: "30 Dec 2024 11:00 AM",
    location: "Grand Hotel Ballroom",
    organizer: "FutureTech Solutions",
    status: "upcoming",
  },
  {
    eventID: "#JAN-658",
    image: "/images/event-7.jpg",
    title: "Workshop: Digital Marketing",
    detailsLink: "/events/details",
    dateAndTime: "01 Jan 2024 07:00 AM",
    location: "Innovation Hub",
    organizer: "Leadership Institute",
    status: "upcoming",
  },
  {
    eventID: "#JAN-951",
    image: "/images/event-8.jpg",
    title: "Charity Gala Dinner",
    detailsLink: "/events/details",
    dateAndTime: "10 Jan 2024 03:00PM",
    location: "Medical Center",
    organizer: "XYZ Innovations",
    status: "upcoming",
  },
  {
    eventID: "#JAN-357",
    image: "/images/event-9.jpg",
    title: "Web Development Seminar",
    detailsLink: "/events/details",
    dateAndTime: "20 Jan 2024 01:00 PM",
    location: "Corporate HQ",
    organizer: "DTech Institute",
    status: "past",
  },
  {
    eventID: "#JAN-851",
    image: "/images/event-10.jpg",
    title: "Networking Mixer",
    detailsLink: "/events/details",
    dateAndTime: "30 Jan 2024 10:00 AM",
    location: "Online",
    organizer: "ABC Corporation",
    status: "upcoming",
  },
  {
    eventID: "#JAN-439",
    image: "/images/event-5.jpg",
    title: "Tech Summit 2024",
    detailsLink: "/events/details",
    dateAndTime: "25 Dec 2024 02:30 PM",
    location: "Tech Park Auditorium",
    organizer: "Community Foundation",
    status: "upcoming",
  },
  {
    eventID: "#JAN-752",
    image: "/images/event-6.jpg",
    title: "Startup Pitch Day",
    detailsLink: "/events/details",
    dateAndTime: "30 Dec 2024 11:00 AM",
    location: "Grand Hotel Ballroom",
    organizer: "FutureTech Solutions",
    status: "upcoming",
  },
  {
    eventID: "#JAN-658",
    image: "/images/event-7.jpg",
    title: "Workshop: Digital Marketing",
    detailsLink: "/events/details",
    dateAndTime: "01 Jan 2024 07:00 AM",
    location: "Innovation Hub",
    organizer: "Leadership Institute",
    status: "upcoming",
  },
  {
    eventID: "#JAN-258",
    image: "/images/event-1.jpg",
    title: "Annual Conference 2024",
    detailsLink: "/events/details",
    dateAndTime: "01 Dec 2024 09:00 AM",
    location: "Convention Center",
    organizer: "ABC Corporation",
    status: "happening",
  },
  {
    eventID: "#JAN-648",
    image: "/images/event-2.jpg",
    title: "Leadership Summit 2024",
    detailsLink: "/events/details",
    dateAndTime: "10 Dec 2024 03:00 AM",
    location: "Online",
    organizer: "Marketing Pros",
    status: "upcoming",
  },
  {
    eventID: "#JAN-945",
    image: "/images/event-3.jpg",
    title: "Product Launch Webinar",
    detailsLink: "/events/details",
    dateAndTime: "15 Dec 2024 06:00 PM",
    location: "City Sky Lounge",
    organizer: "Tech Solutions Inc.",
    status: "past",
  },
  {
    eventID: "#JAN-186",
    image: "/images/event-4.jpg",
    title: "AI in Healthcare Symposium",
    detailsLink: "/events/details",
    dateAndTime: "20 Dec 2024 09:00 AM",
    location: "Training Center",
    organizer: "Startup Hub",
    status: "upcoming",
  },
  {
    eventID: "#JAN-951",
    image: "/images/event-8.jpg",
    title: "Charity Gala Dinner",
    detailsLink: "/events/details",
    dateAndTime: "10 Jan 2024 03:00PM",
    location: "Medical Center",
    organizer: "XYZ Innovations",
    status: "upcoming",
  },
  {
    eventID: "#JAN-357",
    image: "/images/event-9.jpg",
    title: "Web Development Seminar",
    detailsLink: "/events/details",
    dateAndTime: "20 Jan 2024 01:00 PM",
    location: "Corporate HQ",
    organizer: "DTech Institute",
    status: "past",
  },
  {
    eventID: "#JAN-851",
    image: "/images/event-10.jpg",
    title: "Networking Mixer",
    detailsLink: "/events/details",
    dateAndTime: "30 Jan 2024 10:00 AM",
    location: "Online",
    organizer: "ABC Corporation",
    status: "upcoming",
  },
];

const EventsListTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 10;

  // Filter events based on search query
  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination indices
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  // Total pages
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-lg-4 mb-3">
            <Form className="position-relative table-src-form me-0">
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={handleSearchChange}
              />

              <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                search
              </span>
            </Form>

            <div className="text-end">
              <Link to="/events/create-an-event">
                <button className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg">
                  <span className="py-sm-1 d-block">
                    <i className="ri-add-line"></i>
                    <span>Add New Event</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="default-table-area all-products">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">Event ID</th>
                    <th scope="col">Event</th>
                    <th scope="col">Date and Time</th>
                    <th scope="col">Location</th>
                    <th scope="col">Organizer</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentEvents.map((event, i) => (
                    <tr key={i}>
                      <td className="text-body">{event.eventID}</td>

                      <td>
                        <Link
                          to={event.detailsLink}
                          className="d-flex align-items-center"
                        >
                          <img
                            src={event.image}
                            className="rounded-3"
                            alt="event-1"
                            width={40}
                            height={40}
                          />
                          <div className="ms-2 ps-1">
                            <h6 className="fw-medium fs-14 mb-0">
                              {event.title}
                            </h6>
                          </div>
                        </Link>
                      </td>

                      <td className="text-body">{event.dateAndTime}</td>

                      <td>{event.location}</td>

                      <td className="text-body">{event.organizer}</td>

                      <td>
                        <span
                          className={`badge bg-opacity-10 p-2 fs-12 fw-medium text-capitalize ${event.status}`}
                        >
                          {event.status}
                        </span>
                      </td>

                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <Link to={event.detailsLink}>
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

              <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
                <span className="fs-12 fw-medium">
                  Showing {indexOfFirstEvent + 1} to{" "}
                  {Math.min(indexOfLastEvent, filteredEvents.length)} of{" "}
                  {filteredEvents.length} Results
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
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default EventsListTable;
