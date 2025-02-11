"use client";

import { Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation(); // Use `useLocation` to get the current path
  const pathname = location.pathname; // Extract `pathname` from location

  return (
    <>
      <Dropdown className="admin-profile">
        <Dropdown.Toggle className="d-xxl-flex align-items-center bg-transparent border-0 text-start p-0 cursor">
          <div className="flex-shrink-0">
            <img
              className="rounded-circle wh-40 administrator"
              src="/images/administrator.jpg"
              alt="admin"
              width={40}
              height={40}
            />
          </div>

          <div className="flex-grow-1 ms-2">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-none d-xxl-block">
                <div className="d-flex align-content-center">
                  <h3>Olivia</h3>
                </div>
              </div>
            </div>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="border-0 bg-white dropdown-menu-end">
          <div className="d-flex align-items-center info">
            <div className="flex-shrink-0">
              <img
                className="rounded-circle wh-30 administrator"
                src="/images/administrator.jpg"
                alt="admin"
                width={30}
                height={30}
              />
            </div>
            <div className="flex-grow-1 ms-2">
              <h3 className="fw-medium">Olivia John</h3>
              <span className="fs-12">Marketing Manager</span>
            </div>
          </div>

          <ul className="admin-link ps-0 mb-0 list-unstyled">
            <li>
              <Link
                to="/my-profile"
                className={`dropdown-item d-flex align-items-center text-body ${
                  pathname === "/my-profile" ? "activeLink" : ""
                }`}
              >
                <i className="material-symbols-outlined">account_circle</i>
                <span className="ms-2">My Profile</span>
              </Link>
            </li>

            <li>
              <Link
                to="/apps/chat"
                className={`dropdown-item d-flex align-items-center text-body ${
                  pathname === "/apps/chat" ? "activeLink" : ""
                }`}
              >
                <i className="material-symbols-outlined">chat</i>
                <span className="ms-2">Messages</span>
              </Link>
            </li>

            <li>
              <Link
                to="/apps/to-do-list"
                className={`dropdown-item d-flex align-items-center text-body ${
                  pathname === "/apps/to-do-list" ? "activeLink" : ""
                }`}
              >
                <i className="material-symbols-outlined">
                  format_list_bulleted
                </i>
                <span className="ms-2">My Task</span>
              </Link>
            </li>

            <li>
              <Link
                to="/ecommerce/checkout"
                className={`dropdown-item d-flex align-items-center text-body ${
                  pathname === "/ecommerce/checkout" ? "activeLink" : ""
                }`}
              >
                <i className="material-symbols-outlined">credit_card</i>
                <span className="ms-2">Billing</span>
              </Link>
            </li>
          </ul>

          <ul className="admin-link ps-0 mb-0 list-unstyled">
            <li>
              <Link
                to="/settings/account-settings"
                className={`dropdown-item d-flex align-items-center text-body ${
                  pathname === "/settings/account-settings" ? "activeLink" : ""
                }`}
              >
                <i className="material-symbols-outlined">settings</i>
                <span className="ms-2">Settings</span>
              </Link>
            </li>

            <li>
              <Link
                to="/helpdesk/tickets"
                className={`dropdown-item d-flex align-items-center text-body ${
                  pathname === "/helpdesk/tickets" ? "activeLink" : ""
                }`}
              >
                <i className="material-symbols-outlined">support</i>
                <span className="ms-2">Support</span>
              </Link>
            </li>

            <li>
              <a
                href="/authentication/lock-screen"
                className="dropdown-item d-flex align-items-center text-body"
              >
                <i className="material-symbols-outlined">lock</i>
                <span className="ms-2">Lock Screen</span>
              </a>
            </li>

            <li>
              <a
                href="/authentication/logout"
                className="dropdown-item d-flex align-items-center text-body"
              >
                <i className="material-symbols-outlined">logout</i>
                <span className="ms-2">Logout</span>
              </a>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Profile;
