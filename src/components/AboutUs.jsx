import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import images from "../data/images";

const AboutUs = () => {
  return (
    <div className="bg-brown">
      <Container className="py-5">
        <Row>
          <Col
            xs={12}
            md={5}
            id="about-us"
            className="d-flex flex-column align-items-end justify-content-center"
          >
            <span className=" fw-bold custom-text">關於我們</span>
            <h5 className="text-white py-1 xs:text-start md:text-end w-75">
              我們充滿熱情，致力於提供卓越的產品和服務。我們深信唯有不斷探索和創新才能滿足客戶的需求。
            </h5>
            <button className="custom-btn">了解更多</button>
          </Col>
          <Col xs={3} md={2}>
            <img
              className="position-relative top-50 hidden"
              width={"100%"}
              src={images.G}
              alt="bg"
            />
            <img
              className="position-relative hidden"
              style={{ transform: "translateX(-20%)" }}
              width={"170%"}
              src={images.woodSpoon}
              alt="spoon"
            />
          </Col>
          <Col
            xs={9}
            md={5}
            className="py-3 d-flex flex-column align-items-start justify-content-center"
          >
            <span className=" fw-bold custom-text">特色料理</span>
            <h5 className="text-white py-1 text-start xs:w-100 md:w-75">
              我們承諾為每一位客戶提供無與倫比的價值和卓越的服務。我們了解客戶的需求、提供客製菜餚
            </h5>
            <button className="custom-btn">了解更多</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
