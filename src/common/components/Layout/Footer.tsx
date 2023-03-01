import { Col, Layout, Row } from "antd";

const { Footer: FooterLayout } = Layout;

const Footer: React.FC = () => {
  return (
    <FooterLayout id="layout-footer">
      <div className="footer-container">
        <div className="footer-content">
          <Row className="title">
            <Col className="shape">
              <div className="circle-shape"></div>
              <div className="oval-shape"></div>
            </Col>
            <Col className="title">DataWarehouse</Col>
          </Row>
          <Row>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</Row>
          <Row>info@warehouse.project </Row>
          <Row> 1-232-3434 (Main) </Row>
        </div>
        <div className="footer-content">
          <Row className="title">About</Row>
          <Row>Profile</Row>
          <Row>Fuetures</Row>
          <Row>Careers</Row>
          <Row>DW News</Row>
        </div>
        <div className="footer-content">
          <Row className="title">Help</Row>
          <Row>Support</Row>
          <Row>Sign up</Row>
          <Row>Guide</Row>
          <Row>Reports</Row>
          <Row>Q&A</Row>
        </div>
        <div className="footer-content">
          <Row className="title">Social Media</Row>
        </div>
      </div>
    </FooterLayout>
  );
};

export default Footer;
