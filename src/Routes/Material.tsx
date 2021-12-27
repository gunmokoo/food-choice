import styled from "styled-components";
import Category from "../Components/Category";
import { food } from "../food";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.white.lighter};
  width: 85%;
  height: 100vh;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  padding: 30px;
  margin-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  height: 50px;
`;

const Mats = styled.div`
  width: 100%;
`;

const Mat = styled.span`
  width: 100px;
`;

function Material() {
  let mat: Array<string> = [];
  food.map((item) => {
    mat.push(...item.material);
  });
  const mats = mat.filter((item, index) => mat.indexOf(item) === index);
  console.log(mats);
  return (
    <>
      <Category />
      <Wrapper>
        <Form>
          <Input />
        </Form>
        <Mats></Mats>
      </Wrapper>
    </>
  );
}
export default Material;
