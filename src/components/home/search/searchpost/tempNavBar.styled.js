import styled from 'styled-components';

export const SearchHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 13px 0;
  border-bottom: 0.5px solid #dbdbdb;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 12px;
  height: 48px;
`;

export const BackArrowButton = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;
export const SearchBox = styled.input`
  height: 32px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.bgColor};
  border: none;
  padding-left: 16px;
  width: 50%;

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
