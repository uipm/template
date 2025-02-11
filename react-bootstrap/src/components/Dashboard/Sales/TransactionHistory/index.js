"use client";

import { Dropdown, Card } from "react-bootstrap";

const transactionsData = [
  {
    icon: "credit_card",
    iconColor: "bg-primary-100 text-primary",
    title: "Master Card",
    date: "23 Dec 2024 - 3:20 pm",
    amount: "+1,520",
    amountColor: "text-success",
  },
  {
    icon: "redeem",
    iconColor: "bg-danger-100 text-danger",
    title: "Paypal",
    date: "23 Dec 2024 - 3:20 pm",
    amount: "-2,250",
    amountColor: "text-danger",
  },
  {
    icon: "account_balance",
    iconColor: "bg-purple-100 text-primary-div",
    title: "Wise",
    date: "23 Dec 2024 - 3:20 pm",
    amount: "+3,560",
    amountColor: "text-success",
  },
  {
    icon: "currency_ruble",
    iconColor: "bg-info-100 text-info",
    title: "Payoneer",
    date: "23 Dec 2024 - 3:20 pm",
    amount: "+6,500",
    amountColor: "text-success",
  },
  {
    icon: "credit_score",
    iconColor: "bg-success-100 text-success",
    title: "Credit Card",
    date: "23 Dec 2024 - 3:20 pm",
    amount: "+4,320",
    amountColor: "text-danger",
  },
  {
    icon: "account_balance",
    iconColor: "bg-purple-100 text-primary-div",
    title: "Wise",
    date: "16 Dec 2024 - 1:23 pm",
    amount: "+5,432",
    amountColor: "text-success",
  },
  {
    icon: "redeem",
    iconColor: "bg-danger-100 text-danger",
    title: "Paypal",
    date: "23 Dec 2024 - 3:20 pm",
    amount: "+1,820",
    amountColor: "text-success",
  },
];

const TransactionHistory = () => {
  return (
    <Card className="bg-white border-0 rounded-3 mb-4">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
          <h3 className="mb-0">Transaction History</h3>

          <Dropdown className="action-opt">
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              className="bg-transparent p-0"
            >
              <span className="material-symbols-outlined fs-22">
                more_horiz
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-white border box-shadow">
              <Dropdown.Item href="#">This Day</Dropdown.Item>
              <Dropdown.Item href="#">This Week</Dropdown.Item>
              <Dropdown.Item href="#">This Month</Dropdown.Item>
              <Dropdown.Item href="#">This Year</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <ul className="ps-0 mb-0 list-unstyled ">
          {transactionsData.map((transaction, index) => (
            <li
              key={index}
              className="d-flex align-items-center justify-content-between mb-3 pb-3 lcbmp-none"
            >
              <div className="d-flex align-items-center gap-3">
                <div className="flex-shrink-0">
                  <span
                    className={`material-symbols-outlined fs-24 icon-circle ${transaction.iconColor} text-center rounded-circle wh-40 lh-40`}
                  >
                    {transaction.icon}
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="fw-medium fs16 mb-0">{transaction.title}</h6>
                  <span className="fs-12">{transaction.date}</span>
                </div>
              </div>
              <span className={`fs-14 fw-medium ${transaction.amountColor}`}>
                {transaction.amount}
              </span>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default TransactionHistory;
