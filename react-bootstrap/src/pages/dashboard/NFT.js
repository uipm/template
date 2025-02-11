import React from "react";
import { Row, Col } from "react-bootstrap";
import ManageYourNft from "../../components/Dashboard/NFT/ManageYourNft";
import NftSlider from "../../components/Dashboard/NFT/NftSlider";
import EthereumRate from "../../components/Dashboard/NFT/EthereumRate";
import FeaturedNftArtworks from "../../components/Dashboard/NFT/FeaturedNftArtworks";
import DownloadApp from "../../components/Dashboard/NFT/DownloadApp";
import MostPopularSellers from "../../components/Dashboard/NFT/MostPopularSellers";
import WorldwideTopCreators from "../../components/Dashboard/NFT/WorldwideTopCreators";
import TopCollections from "../../components/Dashboard/NFT/TopCollections";
import TopNfts from "../../components/Dashboard/NFT/TopNfts";
import HistoryOfBids from "../../components/Dashboard/NFT/HistoryOfBids";
import ActiveAuctions from "../../components/Dashboard/NFT/ActiveAuctions";

const NFT = () => {
  return (
    <>
      <ManageYourNft />

      <NftSlider />

      <Row>
        <Col xs={12} md={12} lg={12} xxl={4}>
          <EthereumRate />
        </Col>

        <Col xs={12} md={12} lg={12} xxl={8}>
          <ActiveAuctions />
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col xs={12} sm={12} md={12} lg={8} xl={9}>
          <FeaturedNftArtworks />
        </Col>

        <Col xs={12} sm={12} md={12} lg={4} xl={3}>
          <DownloadApp />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={8}>
          <MostPopularSellers />
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={4}>
          <WorldwideTopCreators />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={4} xl={5} xxl={3}>
          <TopCollections />
        </Col>

        <Col xs={12} sm={12} md={12} lg={8} xl={7} xxl={6}>
          <TopNfts />
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={3}>
          <HistoryOfBids />
        </Col>
      </Row>
    </>
  );
};

export default NFT;
