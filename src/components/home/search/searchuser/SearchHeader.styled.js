import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const SearchHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  padding: 13px 0;
  border-bottom: 0.5px solid #dbdbdb;
  max-width: 767px;
  width: 100vw;
  /* gap: 10px; */
  align-items: center;
  height: 48px;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-left: 16px;
  padding-right: 12px;
`;

export const ArrowLeftImg = styled(AiOutlineArrowLeft)`
  margin-right: 10px;
  cursor: pointer;
  fill: ${({ theme }) => theme.textColor};
`;

export const SearchBox = styled.input`
  flex-grow: 1;
  height: 32px;
  border-radius: 32px;
  background-color: #f2f2f2;
  border: none;
  padding: 0 16px;

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
