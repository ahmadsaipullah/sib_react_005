import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="curent">
        <div className="rates">
          <div className="about">
            <h5>Nama : Ahmad Safiullah</h5>
            <h5>Alamat : Cengkareng, Jakarta Barat</h5>
            <h5>Fakultas : Teknik</h5>
            <h5>Prodi : Informatika</h5>
          </div>
          <div>
            <Link className="btn btn-success" as={Link} to="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
