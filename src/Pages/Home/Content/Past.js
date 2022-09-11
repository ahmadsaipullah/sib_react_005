import { Row, Col } from "react-bootstrap";
import propTypes from "prop-types";

const Past = ({ person, person2, person3 }) => {
  return (
    <>
      <h1 className="judul">Past Meetups</h1>
      <h5 className="mx-auto text-end">See all</h5>
      <Row className="past">
        <Col md={4}>
          <div className="pastrow">
            <p>{person.tgl}</p>
            <hr />
            <p>{person.loaction}</p>
            <p>{person.member}</p>
            <button className="btn btn-success">{person.view}</button>
          </div>
        </Col>

        <Col md={4}>
          <div className="pastrow">
            <p>{person2.tgl}</p>
            <hr />
            <p>{person2.loaction}</p>
            <p>{person2.member}</p>
            <button className="btn btn-success">{person2.view}</button>
          </div>
        </Col>

        <Col md={4}>
          <div className="pastrow">
            <p>{person3.tgl}</p>
            <hr />
            <p>{person3.loaction}</p>
            <p>{person3.member}</p>
            <button className="btn btn-success">{person3.view}</button>
          </div>
        </Col>
      </Row>
    </>
  );
};

Past.propTypes = {
  person: propTypes.shape({
    tgl: propTypes.string,
    loaction: propTypes.string,
    member: propTypes.string,
    view: propTypes.string,
  }),
};

export default Past;
