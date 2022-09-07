const Member = () => {
  return (
    <>
      <h1 className="judul">Members</h1>
      <h5 className="mx-auto text-end">See all</h5>
      <div className="member">
        <div className="row">
          <div className="memberimage col-md-2">
            <image src="#" alt="#" className="img-fluid" />
          </div>
          <div className="organaizer col col-md-2">
            <h5>
              <b>Organizers</b>
            </h5>
            <p>Saipul Ahmad</p>
          </div>
          <div className="col-md-1">
            <p className="other">4 Other</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
