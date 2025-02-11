"use client";

import React, { useState } from "react";
import { Dropdown, Card, Form } from "react-bootstrap";

const Done = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Admin Template",
      description:
        "A brief description of the project, its objectives, and its importance to the organization.",
      users: [
        "/images/user-30.jpg",
        "/images/user-31.jpg",
        "/images/user-32.jpg",
      ],
      deadline: "3 days left",
      color: "#DDE4FF",
    },
    {
      id: 2,
      name: "eCommerce Project",
      description:
        "A brief description of the project, its objectives, and its importance to the organization.",
      users: ["/images/user-30.jpg", "/images/user-31.jpg"],
      deadline: "7 days left",
      color: "#F3E8FF",
    },
    {
      id: 3,
      name: "Shopify Theme",
      description:
        "A brief description of the project, its objectives, and its importance to the organization.",
      users: [
        "/images/user-30.jpg",
        "/images/user-31.jpg",
        "/images/user-32.jpg",
      ],
      deadline: "7 days left",
      color: "#D8FFC8",
    },
  ]);

  const [isShowModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    users: [],
    deadline: "",
    color: "#DDE4FF",
  });

  const handleToggleShowModal = () => {
    setShowModal(!isShowModal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = () => {
    if (newTask.name && newTask.description && newTask.deadline) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({
        name: "",
        description: "",
        users: [],
        deadline: "",
        color: "#DDE4FF",
      });
      setShowModal(false);
    }
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <h4 className="mb-0">Done</h4>
            <Dropdown className="action-opt">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="bg-transparent p-0"
              >
                <span className="material-symbols-outlined">more_horiz</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-white border box-shadow">
                <Dropdown.Item href="#">Select All</Dropdown.Item>
                <Dropdown.Item href="#">Edit All</Dropdown.Item>
                <Dropdown.Item href="#">Delete All</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {tasks.map((task) => (
            <div
              key={task.id}
              className="kb-card rounded-3 mb-4"
              style={{ backgroundColor: task.color, padding: "20px" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0 fs-14 fw-semibold">{task.name}</h4>
                <button className="fs-20 text-body hover border-0 p-0 bg-transparent">
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </div>
              <p>{task.description}</p>
              <div className="d-flex align-items-center justify-content-between pt-1">
                <div className="d-flex">
                  {task.users.map((user, index) => (
                    <div key={index} className="ms-m-15">
                      <img
                        src={user}
                        className="wh-34 rounded-circle border border-2 border-color-white"
                        alt="user"
                        width={34}
                        height={34}
                      />
                    </div>
                  ))}
                </div>
                <span className="text-primary">{task.deadline}</span>
              </div>
            </div>
          ))}

          <button
            className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
            onClick={handleToggleShowModal}
          >
            <span className="py-sm-1 d-block">
              <i className="ri-add-line d-none d-sm-inline-block"></i>
              <span>Add New Card</span>
            </span>
          </button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <div className={`custom-modal right ${isShowModal ? "show" : ""}`}>
        <div className="custom-modal-content position-relative z-3">
          <div className="border-bottom py-3 px-4 d-flex align-items-center justify-content-between">
            <h3 className="fs-18 mb-0">Add New Card</h3>
            <div className="close-link" onClick={handleToggleShowModal}>
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>
          <div className="p-4">
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="label">Task Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={newTask.name}
                  onChange={handleInputChange}
                  placeholder="Task Name"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={newTask.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  style={{ height: "120px" }}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Deadline</Form.Label>
                <Form.Control
                  type="text"
                  name="deadline"
                  value={newTask.deadline}
                  onChange={handleInputChange}
                  placeholder="Deadline (e.g., 3 days left)"
                />
              </Form.Group>
              <Form.Group>
                <button
                  type="button"
                  className="btn btn-primary text-white fw-semibold"
                  onClick={handleAddTask}
                >
                  Add Task
                </button>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="close-outside" onClick={handleToggleShowModal}></div>
      </div>
    </>
  );
};

export default Done;
