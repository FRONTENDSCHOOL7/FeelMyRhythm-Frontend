import styled from 'styled-components';

export const SearchHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  padding: 13px 0;
  border-bottom: 0.5px solid #dbdbdb;
  gap: 20px;
  align-items: center;
  justify-content: center;
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
  min-width: 188px;
  height: 32px;
  border-radius: 32px;
  background-color: #f2f2f2;
  border: none;

  ::placeholder {
    color: #c4c4c4;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 16px;
  }

  &:focus {
    outline: none;
  }
`;
