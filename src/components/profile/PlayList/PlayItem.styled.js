import styled from 'styled-components';

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  cursor: pointer;
`;

export const ItemImgBox = styled.div`
  width: 150px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  border: 0.5px solid #dbdbdb;
`;

export const ItemImg = styled.img`
  height: 140%;
  transform: translate(-10%, -14%);
`;

export const ItemTitleContent = styled.p`
  width: 150px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 6px;

  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemIDContent = styled.p`
  color: ${({ $textColor }) => $textColor};
  width: 150px;
  font-size: 12px;
  margin-top: 4px;

  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
