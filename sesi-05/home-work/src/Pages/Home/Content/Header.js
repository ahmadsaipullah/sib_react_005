//import logo from "./";

import { Row, Col } from "react-bootstrap";

import propTypes from "prop-types";

const Header = ({ person }) => {
  return (
    <>
      <div className="header">
        <Row>
          <Col md={1}></Col>
          <Col md={4} className="gambar img-responsive">
            <image src="#" alt="#" className="img-fluid" />
          </Col>
          <Col md={4}>
            <h1>{person.tittle}</h1>
            <p>{person.loaction}</p>
            <p>{person.member}</p>
            <p>{person.organaizer}</p>
            <button className="btn btn-primary button">Jois Us</button>
          </Col>
        </Row>
      </div>
    </>
  );
};

Header.propTypes = {
  person: propTypes.shape({
    tittle: propTypes.string,
    loaction: propTypes.string,
    member: propTypes.string,
    organaizer: propTypes.string,
  }),
};

export default Header;
