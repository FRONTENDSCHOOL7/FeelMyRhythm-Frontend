import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const SearchHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid #dbdbdb;
  align-items: center;
  padding-left: 16px;
  padding-right: 12px;
  height: 48px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const ArrowLeftImg = styled(AiOutlineArrowLeft)`
  margin-right: 10px;
  cursor: pointer;
  fill: ${({ theme }) => theme.textColor};
`;

export const SearchBox = styled.input`
  height: 32px;
  border-radius: 32px;
  background-color: #f2f2f2;
  border: none;
  padding-left: 16px;
  flex-grow: 1;
  margin-right: 8px;

  ::placeholder {
    color: #c4c4c4;
    font-family: 'Orbit-Regular';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:focus {
    outline: none;
  }
`;
