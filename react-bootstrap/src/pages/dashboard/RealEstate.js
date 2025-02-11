import React from "react";
import { Row, Col } from "react-bootstrap";
import ActiveTotalProperty from "../../components/Dashboard/RealEstate/ActiveTotalProperty";
import Revenue from "../../components/Dashboard/RealEstate/Revenue";
import NewListingsVSSoldProperties from "../../components/Dashboard/RealEstate/NewListingsVSSoldProperties";
import PropertiesForSale from "../../components/Dashboard/RealEstate/PropertiesForSale";
import PropertiesForRent from "../../components/Dashboard/RealEstate/PropertiesForRent";
import NewCustomersThisMonth from "../../components/Dashboard/RealEstate/NewCustomersThisMonth";
import MostSalesLocation from "../../components/Dashboard/RealEstate/MostSalesLocation";
import RentalIncome from "../../components/Dashboard/RealEstate/RentalIncome";
import SocialSearch from "../../components/Dashboard/RealEstate/SocialSearch";
import RecentProperty from "../../components/Dashboard/RealEstate/RecentProperty";
import CustomerReviews from "../../components/Dashboard/RealEstate/CustomerReviews";
import TopProperty from "../../components/Dashboard/RealEstate/TopProperty";
import LatestTransaction from "../../components/Dashboard/RealEstate/LatestTransaction";

const RealEstate = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={12} lg={12} xxl={4}>
          <Row>
            <Col lg={6} xxl={12}>
              <ActiveTotalProperty />
            </Col>

            <Col lg={6} xxl={12}>
              <Revenue />
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={12} lg={12} xxl={8}>
          <NewListingsVSSoldProperties />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={6} lg={6} xl={5} xxl={4}>
          <PropertiesForSale />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} xl={7} xxl={4}>
          <PropertiesForRent />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} xl={7} xxl={4}>
          <NewCustomersThisMonth />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={5}>
          <MostSalesLocation />

          <RecentProperty />
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={7}>
          <RentalIncome />

          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <SocialSearch />

              <TopProperty />
            </Col>

            <Col xs={12} sm={12} md={12} lg={6}>
              <CustomerReviews />
            </Col>
          </Row> 
        </Col>
      </Row>

      <LatestTransaction />
    </>
  );
};

export default RealEstate;
