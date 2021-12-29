import { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "../Components/Category";
import Food from "../Components/Food";
import { food, IFood } from "../food";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.white.lighter};
  width: auto;
  height: 100vh;
  margin-left: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  width: 100%;
  margin-top: 55px;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
`;
const Mats = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
const Mat = styled.span`
  background-color: #87cefa;
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  justify-self: center;
  text-align: center;
  cursor: pointer;
`;

const Foods = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

function Material() {
  const [click, setClick] = useState<string[]>([]);
  const [foodResult, setFoodResult] = useState<IFood[]>([]);

  let mat: Array<string> = [];
  food.map((item) => mat.push(...item.material));
  const mats = mat.filter((item, index) => mat.indexOf(item) === index);
  const matClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedMat: string = event.currentTarget.innerHTML;
    if (event.currentTarget.style.backgroundColor === "") {
      event.currentTarget.style.backgroundColor = "tomato";
      setClick((prop) => [...prop, clickedMat]);
    } else {
      event.currentTarget.style.backgroundColor = "";
      setClick((prop) => prop.filter((material) => material !== clickedMat));
    }
  };
  const foodResulting = () => {
    for (let i = 0; i < click.length; i++) {
      setFoodResult(food.filter((prop) => prop.material.includes(click[i])));
    }
  };
  useEffect(foodResulting, [click]);
  console.log(foodResult);
  return (
    <>
      <Category />
      <Wrapper>
        <Title>
          <span>재료를 선택하세요</span>
        </Title>
        <Mats>
          {mats.map((material, index) => (
            <Mat key={index} onClick={matClick}>
              {material}
            </Mat>
          ))}
        </Mats>
        <Foods>
          {foodResult?.map((item) => (
            <Food
              key={item.id}
              name={item.name}
              material={item.material}
              time={item.time}
            ></Food>
          ))}
        </Foods>
      </Wrapper>
    </>
  );
}
export default Material;
