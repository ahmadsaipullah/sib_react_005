import propTypes from "prop-types";

const Member = ({ person }) => {
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
              <b>{person.header}</b>
            </h5>
            <p>{person.name}</p>
          </div>
          <div className="col-md-1">
            <p className="other">{person.other}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Member.propTypes = {
  person: propTypes.shape({
    header: propTypes.string,
    name: propTypes.string,
    other: propTypes.string,
  }),
};

export default Member;
