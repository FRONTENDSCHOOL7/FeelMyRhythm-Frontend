import styled from 'styled-components';

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  border: 0.5px solid #dbdbdb;
`;

export const ItemTitleContent = styled.p`
  width: 140px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 6px;

  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemIDContent = styled.p`
  color: #767676;
  width: 140px;
  font-size: 12px;
  margin-top: 4px;

  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
