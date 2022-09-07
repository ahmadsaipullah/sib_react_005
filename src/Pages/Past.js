// import { Row } from "react-bootstrap";

const Past = () => {
  return (
    <>
      <h1 className="judul">Past Meetups</h1>
      <h5 className="mx-auto text-end">See all</h5>
      <div className="past row">
        <div className="col-md-4">
          <div className="pastrow">
            <p>27 November 2017</p>
            <hr />
            <p> #39 JakartaJS April Meetup with Kumparan</p>
            <p>
              139 <span className="text-muted">went</span>
            </p>
            <button className="btn button">View</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="pastrow">
            <p>27 November 2017</p>
            <hr />
            <p> #38 JakartaJS April Meetup with Blibli</p>
            <p>
              113 <span className="text-muted">went</span>
            </p>
            <button className="btn button">View</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="pastrow">
            <p>27 November 2017</p>
            <hr />
            <p> #37 JakartaJS April Meetup with Hacktive8</p>
            <p>
              110 <span className="text-muted">went</span>
            </p>
            <button className="btn button">View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Past;
