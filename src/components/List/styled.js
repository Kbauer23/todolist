import styled from 'styled-components';

export const DivList = styled.div`
  width: 75%;
  height: 100%;
  margin: 5vh 10vw 5vh 10vw;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Li = styled.li`
  width: 30vw;
  height: 10vh;
  border: 2px solid #d7dbdf;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 50px;
`;

export const DivLi = styled('DivLi')`
  display: flex;
  align-items: center;
`;

export const DivIcons = styled('DivIcons')`
  display: flex;
  gap: 50px;
`;
// export const FcPlusStyled = styled(FcPlus)`
//   height: 40px;
// `;
