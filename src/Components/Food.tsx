import styled from "styled-components";
import { IFood } from "../food";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.silver.lighter};
  width: 300px;
  height: 330px;
  border-radius: 10px;
  position: relative;
  justify-self: center;
`;
const Img = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
`;
const Time = styled.span`
  position: absolute;
  right: 3px;
`;
const Title = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Name = styled.span`
  font-size: 22px;
`;
const Col = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: 5px;
`;
const Material = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  span {
    background-color: #87cefa;
    border-radius: 10px;
    padding: 10px;
  }
`;

function Food({ name, material, time }: IFood) {
  return (
    <Wrapper>
      <Img src={require(`../img/${name}.jpg`)} />
      <Time>{time} min</Time>
      <Title>
        <Name>{name}</Name>
      </Title>
      <Col length={material.length}>
        {material.map((mat) => (
          <Material>
            <span>{mat}</span>
          </Material>
        ))}
      </Col>
    </Wrapper>
  );
}
export default Food;
