// import logo from '/';

const Main = () => {
  return (
    <>
      <h1 className="mt-4">Past Meetups</h1>
      <div className="container">
        <h5 className="d-flex justify-content-end ms-auto mb-4">See all</h5>
        <div className="row justify-content-center">
          <div className="col col-md-3 py-4 bg-dark mx-5">
            <p className="text-white">27 November 2017</p>
            <hr className="text-white"></hr>
            <p className="text-white">
              #39 JakartaJS April Meetup with Kumparan
            </p>
            <p className="text-white">
              139 <span className="text-muted">went</span>
            </p>
            <button className="btn btn-primary"> View</button>
          </div>

          <div className="col col-md-3 py-4 bg-dark  mx-5">
            <p className="text-white">27 October 2017</p>
            <hr className="text-white"></hr>
            <p className="text-white">#38 JakartaJS April Meetup with Blibli</p>
            <p className="text-white">
              113 <span className="text-muted">went</span>
            </p>
            <button className="btn btn-primary"> View</button>
          </div>

          <div className="col col-md-3 py-4 bg-dark mx-5">
            <p className="text-white">27 September 2017</p>
            <hr className="text-white"></hr>
            <p className="text-white">
              #37 JakartaJS April Meetup with Hacktive8
            </p>
            <p className="text-white">
              110 <span className="text-muted">went</span>
            </p>
            <button className="btn btn-primary"> View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
