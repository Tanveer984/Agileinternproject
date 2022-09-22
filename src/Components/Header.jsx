import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VscAccount, VscBellDot } from "react-icons/vsc";
const Header = () => {
  return (
    <Navbar style={{ background: "black" }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="NavLink navcolor-1">
          <Link to="/">
            <span style={{ color: "#31E59A" }}>Grow</span>
            <span style={{ color: "#B4E381" }}>Pi</span>
            <span style={{ color: "#F4BD74" }}>tal</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto NavLink ">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Contact Us</Link>
          </Nav>
          <Nav className="NavLink navColor-2">
            <Link to="#">
              <VscBellDot
                color="#CE9E34"
                style={{ width: "35px", height: "35px" }}
              />
            </Link>
            <Link to="/login">
              <VscAccount
                color="#CE9E34"
                style={{ width: "35px", height: "35px" }}
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
