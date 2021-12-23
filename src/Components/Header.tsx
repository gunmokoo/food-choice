import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 55px;
  top: 0;
  background-color: ${(props) => props.theme.black.lighter};
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px;
`;

const Logo = styled.svg``;

const Item = styled.span`
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

function Header() {
  return (
    <Nav>
      <Col>
        <Item>FC2021</Item>
      </Col>
      <Col>
        <Link to="/login">Login</Link>
      </Col>
    </Nav>
  );
}

export default Header;
