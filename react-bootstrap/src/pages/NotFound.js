import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="not-found-content m-auto py-5 text-center">
        <img
          src="/images/error.png"
          className="mb-4"
          alt="error"
          width={400}
          height={400}
        />

        <h3 className="fs-24 mb-3">
          Looks like we did not find this page, please try again later.
        </h3>

        <p className="mb-4">
          But no worries! Our team is looking ever where while you wait safely.
        </p>

        <a href="/" className="btn btn-primary py-2 px-4 fs-16 fw-medium">
          <span className="d-inline-block py-1">Back To Home</span>
        </a>
      </div>
    </>
  );
};

export default NotFound;
