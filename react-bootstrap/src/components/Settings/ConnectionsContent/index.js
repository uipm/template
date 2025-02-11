"use client";

import { Table } from "react-bootstrap";
import NavList from "../NavList";

const connectedAccounts = [
  {
    name: "Google",
    image: "/images/google2.svg",
    description: "Calendar and Contacts",
  },
  {
    name: "Slack",
    image: "/images/slack.svg",
    description: "Communications",
  },
  {
    name: "GitHub",
    image: "/images/github.svg",
    description: "Manage your Git repositories",
  },
  {
    name: "Mailchimp",
    image: "/images/mailchimp.svg",
    description: "Email marketing service",
  },
  {
    name: "Figma",
    image: "/images/figma.svg",
    description: "Design",
  },
];

const socialAccounts = [
  {
    name: "Facebook",
    image: "/images/facebook3.svg",
    description: "Calendar and Contacts",
  },
  {
    name: "Twitter",
    image: "/images/twitter.svg",
    description: "Communications",
  },
  {
    name: "Instagram",
    image: "/images/instagram.svg",
    description: "Communications",
  },
  {
    name: "Dribbble",
    image: "/images/dribbble.svg",
    description: "Communications",
  },
  {
    name: "Behance",
    image: "/images/behance.svg",
    description: "Communications",
  },
];

const ConnectionsContent = () => {
  return (
    <div className="bg-white p-4 rounded-3 mb-4">
      <NavList />

      <h4 className="fs-18 mb-2">Connected Accounts</h4>

      <div className="default-table-area connected-table border-bottom pb-3 mb-4">
        <div className="table-responsive">
          <Table className="table align-middle border-0">
            <tbody>
              {connectedAccounts.map((account) => (
                <tr key={account.name}>
                  <td className="ps-0">
                    <div className="d-flex align-items-center">
                      <img
                        src={account.image}
                        alt={account.name}
                        style={{
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <div className="ms-3">
                        <span className="fw-semibold text-dark">
                          {account.name}
                        </span>
                        <p className="fs-14 text-body fw-normal">
                          {account.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="border-0 text-decoration-none text-primary fs-14"
                    >
                      Click to Disconnect
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <h4 className="fs-18 mb-2">Social Accounts</h4>

      <div className="default-table-area connected-table">
        <div className="table-responsive">
          <Table className="table align-middle border-0">
            <tbody>
              {socialAccounts.map((account) => (
                <tr key={account.name}>
                  <td className="ps-0">
                    <div className="d-flex align-items-center">
                      <img
                        src={account.image}
                        alt={account.name}
                        width={40}
                        height={40}
                      />
                      <div className="ms-3">
                        <span className="fw-semibold text-dark">
                          {account.name}
                        </span>
                        <p className="fs-14 text-body fw-normal">
                          {account.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="border-0 text-decoration-none text-primary fs-14"
                    >
                      Click to Disconnect
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsContent;
