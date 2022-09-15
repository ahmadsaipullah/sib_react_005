import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

const Main = () => {
  const [isredirect, setRedirect] = useState();
  const location = useLocation();
  useEffect(() => {
    setRedirect(location.pathname);
  }, [location]);

  const isActive1 = isredirect === "/profile" ? "active" : "";

  const [current, setCurrent] = useState(0);

  const getData = async () => {
    const data = axios.get(
      "https://api.currencyfreaks.com/latest?apikey=550d6c819a5441e1a4235f2ee0496dc7&symbols=CAD,EUR,IDR,JPY,CHF,GBP"
    );
    return data;
  };

  useEffect(() => {
    getData().then((res) => setCurrent(res));
  }, []);

  const mataUang = ["Currency", "We Buy", "Exchange Rate", "We Sell"];

  return (
    <>
      <h5 className="current">
        {current ? (
          <>
            <table border={3} className="table">
              <thead>
                <tr>
                  {mataUang.map((namaHeader, index) => {
                    return <th key={index}>{namaHeader}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {
                  Object.keys(current.data.rates).map((namaBody, index) => {
                    return (
                      <tr key={index}>
                        <td>{namaBody}</td>
                        <td>{namaBody}</td>
                        <td>{namaBody}</td>
                        <td>{namaBody}</td>
                      </tr>
                    );
                  })

                  //    getData.rates.map((namaBody, index) => {
                  //   return (
                  //     <tr key={index}>
                  //       <td>{namaBody}</td>
                  //       <td>{namaBody}</td>
                  //     </tr>
                  //   );
                  // })
                }
              </tbody>
            </table>
          </>
        ) : (
          <></>
        )}
      </h5>
      <div className={isActive1}>
        <Link as={Link} to="/profile" className="btn btn-success">
          Click Here
        </Link>
      </div>
    </>
  );
};

export default Main;
