import React from "react";
import { Breadcrumb } from "react-bootstrap";
import PricingPlanStyle1 from "../components/ExtraPages/PricingPlan/PricingPlanStyle1";
import PricingPlanStyle2 from "../components/ExtraPages/PricingPlan/PricingPlanStyle2";
import PricingPlanStyle3 from "../components/ExtraPages/PricingPlan/PricingPlanStyle3";

const PricingPlan = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Pricing</h3>

        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Pricing</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <PricingPlanStyle1 />

      <div className="mb-4 pt-4">
        <h3 className="mb-0">Pricing Plan 2</h3>
      </div>

      <PricingPlanStyle2 />

      <div className="mb-4 pt-4">
        <h3 className="mb-0">Pricing Plan 3</h3>
      </div>

      <PricingPlanStyle3 />
    </>
  );
};

export default PricingPlan;
