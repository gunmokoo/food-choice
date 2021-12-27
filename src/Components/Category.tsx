import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: fixed;
  height: 95%;
  margin-left: 30px;
  margin-top: 55px;
  color: black;
`;

const List = styled.div<{ match: boolean }>`
  background-color: ${(props) =>
    props.match ? props.theme.white.lighter : props.theme.white.darker};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
  border-radius: 50px 0px 0px 50px;
  border: 1px solid black;
  border-right: ${(props) => (props.match ? "none" : "2px solid")};
  box-shadow: -20px 10px 10px 5px rgba(0, 0, 0, 0.5);
`;

const Item = styled(Link)`
  font-size: 30px;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 20px;
  &:hover {
    color: red;
  }
`;

function Category() {
  const homeMatch = useRouteMatch("/");
  const materialMatch = useRouteMatch("/material");
  const rankMatch = useRouteMatch("/rank");
  const questionMatch = useRouteMatch("/question");
  return (
    <Nav>
      <List match={homeMatch?.isExact || false}>
        <Item to="/">홈</Item>
      </List>
      <List match={materialMatch?.isExact || false}>
        <Item to="/material">재료</Item>
      </List>
      <List match={rankMatch?.isExact || false}>
        <Item to="/rank">랭크</Item>
      </List>
      <List match={questionMatch?.isExact || false}>
        <Item to="/question">질문</Item>
      </List>
    </Nav>
  );
}
export default Category;
