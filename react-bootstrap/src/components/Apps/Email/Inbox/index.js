"use client";

import {
  Dropdown,
  Card,
  Form,
  OverlayTrigger,
  Tooltip,
  Tab,
  Tabs,
} from "react-bootstrap";
import PrimaryEmail from "./PrimaryEmail";
import PromotionsEmail from "./PromotionsEmail";

const Inbox = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mb-4">
            <div className="d-flex position-relative top-3">
              <div className="d-flex">
                <Form>
                  <Form.Check type="checkbox" id="default-checkbox" label="" />
                </Form>

                <Dropdown className="btn-group">
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className="dropdown-toggle p-0 border-0 ps-0 bg-transparent c-dropdown"
                  >
                    <span className="material-symbols-outlined fs-22 text-body">
                      arrow_drop_down
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white border box-shadow">
                    <Dropdown.Item href="#">All</Dropdown.Item>

                    <Dropdown.Item href="#">None</Dropdown.Item>

                    <Dropdown.Item href="#">Read</Dropdown.Item>

                    <Dropdown.Item href="#">Unread</Dropdown.Item>

                    <Dropdown.Item href="#">Starred</Dropdown.Item>

                    <Dropdown.Item href="#">Untarred</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Archive</Tooltip>}
              >
                <button className="pe-0 border-0 bg-transparent ps-2">
                  <span className="material-symbols-outlined fs-20 text-body hover">
                    archive
                  </span>
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Help</Tooltip>}
              >
                <button className="pe-0 border-0 bg-transparent ms-2">
                  <span className="material-symbols-outlined fs-20 text-body hover">
                    help_clinic
                  </span>
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Tresh</Tooltip>}
              >
                <button className="pe-0 border-0 bg-transparent ms-2">
                  <span className="material-symbols-outlined fs-20 text-body hover">
                    delete
                  </span>
                </button>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">More Option</Tooltip>}
              >
                <Dropdown className="action-opt ms-2 position-relative top-3">
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className="p-0 border-0 bg-transparent"
                  >
                    <i className="material-symbols-outlined">more_vert</i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white border box-shadow">
                    <Dropdown.Item href="#">
                      <i className="material-symbols-outlined">visibility</i>
                      View Profile
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <i className="material-symbols-outlined">delete</i>
                      Delete Chat
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <i className="material-symbols-outlined">lock</i>
                      Block
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </OverlayTrigger>
            </div> 
          </div>

          <Tabs
            defaultActiveKey="primary"
            id="uncontrolled-tab-example"
            className="inbox-tabs"
          >
            <Tab eventKey="primary" title="Primary">
              <PrimaryEmail />
            </Tab>

            <div eventKey="promotions" title="Promotions">
              <PromotionsEmail />
            </div>
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
};

export default Inbox;
