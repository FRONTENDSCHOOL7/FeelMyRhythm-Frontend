import styled from 'styled-components';

export const HeaderLayout = styled.div`
  display: flex;
  padding: 13px 0;

  font-family: Spoqa Han Sans Neo;
  border-bottom: 0.5px solid #dbdbdb;

  padding-left: 16px;
  padding-right: 16px;
`;

export const HeaderTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`;

export const SearchImg = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

export const ArrowLeftImg = styled.img``;

export const SaveBtn = styled.button`
  background-color: #ffc7a7;
  border-radius: 32px;

  margin-left: auto;
  padding: 7px 32px;

  color: #fff;

  font-size: 14px;
  font-weight: 500;
  text-align: center;

  border: none;
`;
