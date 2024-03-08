import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 80px;
  margin: 30px 0px 80px;
  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 1em;
  width: 75%;
  background-color: #edeff0;
  padding: 10px 15px;
  border: 3px solid #d7dbdf;
  border-right: none;
  border-radius: 0.35em 0 0 0.35em;
  outline: none;
  height: 100%;
`;

export const DivHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledFaSearch = styled(FaSearch)`
  color: #fff;
  font-size: 20px;
  margin-right: 5px;
`;

export const Button = styled.button`
  background: #000;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 0 0.35em 0.35em 0;
  max-height: 100%;
`;
