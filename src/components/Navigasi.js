import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const Navigasi = () => {
  const [isredirect, setRedirect] = useState();
  const location = useLocation();
  useEffect(() => {
    setRedirect(location.pathname);
  }, [location]);

  const isActive1 = isredirect === "/" ? "active" : "";
  const isActive2 = isredirect === "/createMeetup" ? "active" : "";
  const isActive3 = isredirect === "/explorer" ? "active" : "";
  const isActive4 = isredirect === "/login" ? "active" : "";

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className={isActive1}>
                QTemu
              </Nav.Link>
              <Nav.Link as={Link} to="/createMeetup" className={isActive2}>
                Create Meetup
              </Nav.Link>
              <Nav.Link as={Link} to="/explorer" className={isActive3}>
                Explorer
              </Nav.Link>
            </Nav>
            <Nav>
              <Button as={Link} to="/login" className={isActive4}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigasi;
